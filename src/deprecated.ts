// File: src/index.ts

// import React, { useEffect, useState, useRef } from "react";

// type EasterEggConfig = {
//   trigger: string;
//   callback: () => void;
//   type: "keyCombo" | "mouseRegion";
//   region?: { x: number; y: number; width: number; height: number };
//   component?: React.ReactElement;
// };

// const useEasterEgg = (config: EasterEggConfig) => {
//   const [triggered, setTriggered] = useState(false);
//   const componentRef = useRef<HTMLElement | null>(null);

//   useEffect(() => {
//     let currentSequence = "";
//     let clickCount = 0;
//     let lastClickTime = 0;

//     const handleKeyPress = (event: KeyboardEvent) => {
//       if (config.type === "keyCombo") {
//         currentSequence += event.key;
//         if (currentSequence.includes(config.trigger)) {
//           setTriggered(true);
//           config.callback();
//           currentSequence = "";
//         }
//       }
//     };

//     const handleMouseClick = (event: MouseEvent) => {
//       if (config.type === "mouseRegion") {
//         let isInRegion = false;

//         if (config.component && componentRef.current) {
//           const rect = componentRef.current.getBoundingClientRect();
//           isInRegion =
//             event.clientX >= rect.left &&
//             event.clientX <= rect.right &&
//             event.clientY >= rect.top &&
//             event.clientY <= rect.bottom;
//         } else if (config.region) {
//           const { x, y, width, height } = config.region;
//           isInRegion =
//             event.clientX >= x &&
//             event.clientX <= x + width &&
//             event.clientY >= y &&
//             event.clientY <= y + height;
//         }

//         if (isInRegion) {
//           const currentTime = new Date().getTime();
//           if (currentTime - lastClickTime < 300) {
//             clickCount++;
//           } else {
//             clickCount = 1;
//           }
//           lastClickTime = currentTime;

//           if (clickCount === parseInt(config.trigger)) {
//             setTriggered(true);
//             config.callback();
//             clickCount = 0;
//           }
//         }
//       }
//     };

//     window.addEventListener("keydown", handleKeyPress);
//     window.addEventListener("click", handleMouseClick);

//     return () => {
//       window.removeEventListener("keydown", handleKeyPress);
//       window.removeEventListener("click", handleMouseClick);
//     };
//   }, [config]);

//   const EasterEggWrapper: React.FC<{ children: React.ReactNode }> = ({
//     children,
//   }) => {
//     return React.cloneElement(children as React.ReactElement, {
//       ref: componentRef,
//     });
//   };

//   return { triggered, EasterEggWrapper };
// };

// export { useEasterEgg };
// export type { EasterEggConfig };

// File: src/index.ts

// import React, { useEffect, useState, useRef } from 'react';

// type EasterEggConfig = {
//   trigger: string;
//   callback: () => void;
//   type: 'keyCombo' | 'mouseRegion';
// };

// const useEasterEgg = (config: EasterEggConfig) => {
//   const [triggered, setTriggered] = useState(false);
//   const componentRef = useRef<HTMLElement | null>(null);

//   useEffect(() => {
//     let currentSequence = '';
//     let clickCount = 0;
//     let lastClickTime = 0;

//     const handleKeyPress = (event: KeyboardEvent) => {
//       if (config.type === 'keyCombo') {
//         currentSequence += event.key;
//         if (currentSequence.includes(config.trigger)) {
//           setTriggered(true);
//           config.callback();
//           currentSequence = '';
//         }
//       }
//     };

//     const handleMouseClick = (event: MouseEvent) => {
//       if (config.type === 'mouseRegion' && componentRef.current) {
//         const rect = componentRef.current.getBoundingClientRect();
//         const isInRegion = (
//           event.clientX >= rect.left &&
//           event.clientX <= rect.right &&
//           event.clientY >= rect.top &&
//           event.clientY <= rect.bottom
//         );

//         if (isInRegion) {
//           const currentTime = new Date().getTime();
//           if (currentTime - lastClickTime < 300) {
//             clickCount++;
//           } else {
//             clickCount = 1;
//           }
//           lastClickTime = currentTime;

//           if (clickCount === parseInt(config.trigger)) {
//             setTriggered(true);
//             config.callback();
//             clickCount = 0;
//           }
//         }
//       }
//     };

//     window.addEventListener('keydown', handleKeyPress);
//     window.addEventListener('click', handleMouseClick);

//     return () => {
//       window.removeEventListener('keydown', handleKeyPress);
//       window.removeEventListener('click', handleMouseClick);
//     };
//   }, [config]);

//   const EasterEggWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//     return (
//       <div ref={componentRef as React.RefObject<HTMLDivElement>}>
//         {children}
//       </div>
//     );
//   };

//   return { triggered, EasterEggWrapper };
// };

// export { useEasterEgg };
// export type { EasterEggConfig };

// File: src/index.ts
// File: src/index.ts

// import React, { useEffect, useState, useRef, forwardRef } from "react";

// type EasterEggConfig = {
//   trigger: string;
//   callback: () => void;
//   type: "keyCombo" | "mouseRegion";
// };

// const useEasterEgg = (config: EasterEggConfig) => {
//   const [triggered, setTriggered] = useState(false);
//   const componentRef = useRef<HTMLElement | null>(null);

//   useEffect(() => {
//     let currentSequence = "";
//     let clickCount = 0;
//     let lastClickTime = 0;

//     const handleKeyPress = (event: KeyboardEvent) => {
//       if (config.type === "keyCombo") {
//         currentSequence += event.key;
//         if (currentSequence.includes(config.trigger)) {
//           setTriggered(true);
//           config.callback();
//           currentSequence = "";
//         }
//       }
//     };

//     const handleMouseClick = (event: MouseEvent) => {
//       if (config.type === "mouseRegion" && componentRef.current) {
//         const rect = componentRef.current.getBoundingClientRect();
//         const isInRegion =
//           event.clientX >= rect.left &&
//           event.clientX <= rect.right &&
//           event.clientY >= rect.top &&
//           event.clientY <= rect.bottom;

//         if (isInRegion) {
//           const currentTime = new Date().getTime();
//           if (currentTime - lastClickTime < 300) {
//             clickCount++;
//           } else {
//             clickCount = 1;
//           }
//           lastClickTime = currentTime;

//           if (clickCount === parseInt(config.trigger)) {
//             setTriggered(true);
//             config.callback();
//             clickCount = 0;
//           }
//         }
//       }
//     };

//     window.addEventListener("keydown", handleKeyPress);
//     window.addEventListener("click", handleMouseClick);

//     return () => {
//       window.removeEventListener("keydown", handleKeyPress);
//       window.removeEventListener("click", handleMouseClick);
//     };
//   }, [config]);

//   const EasterEggWrapper = forwardRef<
//     HTMLDivElement,
//     { children: React.ReactNode }
//   >((props, ref) => {
//     const combinedRef = (node: HTMLDivElement | null) => {
//       componentRef.current = node;
//       if (typeof ref === "function") {
//         ref(node);
//       } else if (ref) {
//         ref.current = node;
//       }
//     };

//     return React.createElement("div", { ref: combinedRef }, props.children);
//   });

//   EasterEggWrapper.displayName = "EasterEggWrapper";

//   return { triggered, EasterEggWrapper };
// };

// export { useEasterEgg };
// export type { EasterEggConfig };
