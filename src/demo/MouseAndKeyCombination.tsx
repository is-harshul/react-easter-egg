import React, { useEffect } from "react";
import { useEasterEgg } from "..";
import { EasterEggConfig } from "../types";
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

const MouseAndKeyCombination: React.FC = () => {
  const easterEggConfig: EasterEggConfig = {
    trigger: "3", // Trigger on triple-click
    callback: () => alert("Easter egg activated!"),
    type: "mouseRegion",
  };

  const anotherEgg: EasterEggConfig = {
    trigger: "Try me", // Trigger on type
    callback: () => alert("Another easter egg activated!"),
    type: "keyCombo",
  };

  const { triggered: mouseEggTriggered, EasterEggWrapper } =
    useEasterEgg(easterEggConfig);
  const { triggered: keebEggTriggered } = useEasterEgg(anotherEgg);

  useEffect(() => {
    if (mouseEggTriggered || keebEggTriggered) {
      triggerConfetti();
    }
  }, [keebEggTriggered, mouseEggTriggered]);

  return (
    <div>
      <h1>My Component</h1>
      <EasterEggWrapper>
        <div
          style={{
            width: 100,
            height: 100,
            background: "grey",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          Click me!
        </div>
      </EasterEggWrapper>
      {mouseEggTriggered && <p>Mouse tap Easter 🥚 found!</p>}
      {keebEggTriggered && <p>Keeb Easter 🥚 found!</p>}
    </div>
  );
};

export default MouseAndKeyCombination;
