import React, { useEffect, useState, useRef, forwardRef } from "react";
import type {
  EasterEggConfig,
  SpeechRecognition,
  SpeechRecognitionEvent,
} from "./types";

const useEasterEgg = (config: EasterEggConfig) => {
  const [triggered, setTriggered] = useState(false);
  const componentRef = useRef<HTMLElement | null>(null);
  const [isListening, setIsListening] = useState(false);

  useEffect(() => {
    let currentSequence = "";
    let clickPattern: number[] = [];
    let lastClickTime = 0;
    let currentClickCount = 0;
    let recognition: SpeechRecognition | null = null;

    const handleKeyPress = (event: KeyboardEvent) => {
      if (config.type === "keyCombo") {
        currentSequence += event.key;
        if (currentSequence.includes(config.trigger as string)) {
          setTriggered(true);
          config.callback();
          currentSequence = "";
        }
      }
    };

    const handleMouseClick = (event: MouseEvent) => {
      if (config.type === "mouseRegion" && componentRef.current) {
        const rect = componentRef.current.getBoundingClientRect();
        const isInRegion =
          event.clientX >= rect.left &&
          event.clientX <= rect.right &&
          event.clientY >= rect.top &&
          event.clientY <= rect.bottom;

        if (isInRegion) {
          const currentTime = new Date().getTime();
          const timeDiff = currentTime - lastClickTime;

          if (timeDiff < 300) {
            currentClickCount++;
          } else {
            if (currentClickCount > 0) {
              clickPattern.push(currentClickCount);
            }
            currentClickCount = 1;
          }

          lastClickTime = currentTime;

          if (Array.isArray(config.trigger)) {
            const triggerPattern = config.trigger as number[];
            const patternToCheck = [...clickPattern, currentClickCount];

            if (
              patternToCheck.length === triggerPattern.length &&
              patternToCheck.every(
                (count, index) => count === triggerPattern[index]
              )
            ) {
              setTriggered(true);
              config.callback();
              clickPattern = [];
              currentClickCount = 0;
            } else if (patternToCheck.length >= triggerPattern.length) {
              clickPattern = [];
              currentClickCount = 1;
            }
          }
        }
      }
    };

    const handleMouseUp = () => {
      if (currentClickCount > 0) {
        clickPattern.push(currentClickCount);
        currentClickCount = 0;
      }
    };

    const initializeSpeechRecognition = () => {
      if (
        config.type === "voiceCommand" &&
        ("SpeechRecognition" in window || "webkitSpeechRecognition" in window)
      ) {
        const SpeechRecognition =
          window.SpeechRecognition || window.webkitSpeechRecognition;
        recognition = new SpeechRecognition();
        recognition.continuous = true;
        recognition.interimResults = false;

        recognition.onstart = () => {
          setIsListening(true);
        };

        recognition.onend = () => {
          setIsListening(false);
        };

        recognition.onresult = (event: SpeechRecognitionEvent) => {
          console.log("result", event.results);
          const last = event.results.length - 1;
          const transcript = event.results[last][0].transcript
            .trim()
            .toLowerCase();

          if (transcript === config.voicePhrase?.toLowerCase()) {
            setTriggered(true);
            config.callback();
          }
        };

        recognition.start();
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    window.addEventListener("click", handleMouseClick);
    window.addEventListener("mouseup", handleMouseUp);

    if (config.type === "voiceCommand") {
      initializeSpeechRecognition();
    }

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
      window.removeEventListener("click", handleMouseClick);
      window.removeEventListener("mouseup", handleMouseUp);
      if (recognition) {
        recognition.stop();
      }
    };
  }, [config]);

  const EasterEggWrapper = forwardRef<
    HTMLDivElement,
    { children: React.ReactNode }
  >((props, ref) => {
    const combinedRef = (node: HTMLDivElement | null) => {
      componentRef.current = node;
      if (typeof ref === "function") {
        ref(node);
      } else if (ref) {
        ref.current = node;
      }
    };

    return React.createElement("div", { ref: combinedRef }, props.children);
  });

  EasterEggWrapper.displayName = "EasterEggWrapper";

  return { triggered, EasterEggWrapper, isListening };
};

export { useEasterEgg };
