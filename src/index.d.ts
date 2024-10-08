import React from "react";
export interface SpeechRecognition extends EventTarget {
    continuous: boolean;
    interimResults: boolean;
    onstart: (event: Event) => void;
    onend: (event: Event) => void;
    onresult: (event: SpeechRecognitionEvent) => void;
    start: () => void;
    stop: () => void;
}
export interface SpeechRecognitionEvent extends Event {
    results: SpeechRecognitionResultList;
}
export interface SpeechRecognitionResultList {
    length: number;
    item(index: number): SpeechRecognitionResult;
    [index: number]: SpeechRecognitionResult;
}
export interface SpeechRecognitionResult {
    isFinal: boolean;
    [index: number]: SpeechRecognitionAlternative;
}
export interface SpeechRecognitionAlternative {
    transcript: string;
    confidence: number;
}
declare global {
    interface Window {
        SpeechRecognition: new () => SpeechRecognition;
        webkitSpeechRecognition: new () => SpeechRecognition;
    }
}
export type ClickPattern = number[];
type EasterEggConfig = {
    trigger: string | ClickPattern;
    callback: () => void;
    type: "keyCombo" | "mouseRegion" | "voiceCommand";
    voicePhrase?: string;
};
export type ConfettiOptions = {
    angle: number;
    spread: number;
    particleCount: number;
    origin: {
        y: number;
    };
};
declare const useEasterEgg: (config: EasterEggConfig) => {
    triggered: boolean;
    EasterEggWrapper: React.ForwardRefExoticComponent<{
        children: React.ReactNode;
    } & React.RefAttributes<HTMLDivElement>>;
    isListening: boolean;
};
export { useEasterEgg };
export type { EasterEggConfig };
