import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEasterEgg } from "../index";
import { triggerConfetti } from "./createConfetti";
const SpeechRecognition = () => {
    const easterEggConfig = {
        trigger: "reveal you secrets",
        callback: () => {
            triggerConfetti();
            triggerConfetti();
            triggerConfetti();
        },
        type: "voiceCommand",
        // voicePhrase: "reveal you secrets",
        voicePhrase: "hello hello",
    };
    const { triggered, EasterEggWrapper, isListening } = useEasterEgg(easterEggConfig);
    /** You may give a voice feedback to the user */
    // const msg = new SpeechSynthesisUtterance();
    // msg.text = "As you command!";
    // msg.lang = "en-US";
    // msg.volume = 1;
    // msg.rate = 1;
    // msg.pitch = 1;
    // window.speechSynthesis.speak(msg);
    return (_jsxs("div", { children: [_jsx("h1", { children: "My Component" }), _jsx(EasterEggWrapper, { children: _jsxs("div", { style: {
                        width: 400,
                        height: 100,
                        border: "1px solid black",
                        borderRadius: 4,
                        padding: "10px",
                    }, children: [isListening
                            ? "👂🏼 Listening for voice command..."
                            : "👆🏼 Click to start listenings", _jsx("br", {}), _jsx("br", {}), "Say \"Hello hello\" to trigger the Easter egg!"] }) }), triggered && _jsx("p", { children: "Easter \uD83E\uDD5A found! \u2705" })] }));
};
export default SpeechRecognition;
