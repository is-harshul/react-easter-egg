import React from "react";
import { useEasterEgg } from ".";
import { EasterEggConfig } from "./types";

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

const MyComponent: React.FC = () => {
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

  const { triggered, EasterEggWrapper } = useEasterEgg(easterEggConfig);
  const { triggered: keebEggTriggered } = useEasterEgg(anotherEgg);

  return (
    <div>
      <h1>My Component</h1>
      <EasterEggWrapper>
        <div style={{ width: 100, height: 100, background: "red" }}>
          Click me!
        </div>
      </EasterEggWrapper>
      {triggered && <p>Easter egg found!</p>}
      {keebEggTriggered && <p>Keeb Easter egg found!</p>}
    </div>
  );
};

export default MyComponent;
