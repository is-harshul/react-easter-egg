import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from "react";
import { useEasterEgg } from "../index";
import { triggerConfetti } from "./createConfetti";
// const MyComponent: React.FC = () => {
//   const easterEggConfig: EasterEggConfig = {
//     trigger: "3", // Trigger on triple-click
//     callback: () => alert("Easter egg activated!"),
//     type: "mouseRegion",
//     component: (
//       <div style={{ width: 100, height: 100, background: "red" }}>
//         Click me!
//       </div>
//     ),
//   };
//   const { triggered, EasterEggWrapper } = useEasterEgg(easterEggConfig);
//   return (
//     <div>
//       <h1>My Component</h1>
//       <EasterEggWrapper>{easterEggConfig.component}</EasterEggWrapper>
//       {triggered && <p>Easter egg found!</p>}
//     </div>
//   );
// };
// interface ConfettiOptions {
//   angle?: number;
//   spread?: number;
//   particleCount?: number;
//   origin?: {
//     x?: number;
//     y?: number;
//   };
//   // Add other options as needed
// }
// declare function confetti(options?: ConfettiOptions): Promise<null>;
// declare global {
//   interface Window {
//     confetti: typeof confetti;
//   }
// }
const MouseAndKeyCombination = () => {
    const easterEggConfig = {
        type: "mouseRegion",
        trigger: "3", // Trigger on triple-click
        callback: () => alert("Easter egg activated!"),
    };
    const keebEgg = {
        trigger: "try me", // Trigger on type
        callback: () => alert("Keyboard easter egg activated!"),
        type: "keyCombo",
    };
    const { triggered: mouseEggTriggered, EasterEggWrapper } = useEasterEgg(easterEggConfig);
    const { triggered: keebEggTriggered } = useEasterEgg(keebEgg);
    useEffect(() => {
        if (mouseEggTriggered || keebEggTriggered) {
            triggerConfetti();
        }
    }, [keebEggTriggered, mouseEggTriggered]);
    return (_jsxs("div", { children: [_jsx("h1", { children: "Mouse and Keyboard" }), "Try tripple click on the container ", _jsx("br", {}), "OR", _jsx("br", {}), " Try typing `try me`", _jsx(EasterEggWrapper, { children: _jsx("div", { style: {
                        marginTop: 16,
                        width: 100,
                        height: 65,
                        background: "grey",
                        display: "flex",
                        borderRadius: 4,
                        justifyContent: "center",
                        alignItems: "center",
                        cursor: "pointer",
                    }, children: "Click me!" }) }), mouseEggTriggered && _jsx("p", { children: "Mouse tap Easter \uD83E\uDD5A found!" }), keebEggTriggered && _jsx("p", { children: "Keeb Easter \uD83E\uDD5A found!" })] }));
};
export default MouseAndKeyCombination;
