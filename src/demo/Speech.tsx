import React from "react";
import { EasterEggConfig } from "../types";
import { useEasterEgg } from ".";

const SpeechRecognition: React.FC = () => {
  const easterEggConfig: EasterEggConfig = {
    trigger: "reveal you secrets",
    callback: () => alert("Voice-activated Easter egg found!"),
    type: "voiceCommand",
    // voicePhrase: "reveal you secrets",
    voicePhrase: "hello hello",
  };

  const { triggered, EasterEggWrapper, isListening } =
    useEasterEgg(easterEggConfig);

  /** You may give a voice feedback to the user */
  // const msg = new SpeechSynthesisUtterance();
  // msg.text = "As you command!";
  // msg.lang = "en-US";
  // msg.volume = 1;
  // msg.rate = 1;
  // msg.pitch = 1;
  // window.speechSynthesis.speak(msg);

  return (
    <div>
      <h1>My Component</h1>
      <EasterEggWrapper>
        <div
          style={{
            width: 400,
            height: 100,
            border: "1px solid black",
            borderRadius: 4,
            padding: "10px",
          }}
        >
          {isListening
            ? "👂🏼 Listening for voice command..."
            : "👆🏼 Click to start listenings"}
          <br />
          <br />
          Say "Hello hello" to trigger the Easter egg!
        </div>
      </EasterEggWrapper>
      {triggered && <p>Easter 🥚 found! ✅</p>}
    </div>
  );
};

export default SpeechRecognition;
