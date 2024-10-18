## Easter Egg Hook for React

This project provides a custom React hook for easily adding and managing Easter eggs in your React applications. The hook supports various types of Easter eggs, including key combinations, mouse click patterns, and voice commands.

### [Demo Playground](https://stackblitz.com/edit/react-hidden-easter-egg?file=src%2FApp.js,src%2Fdemo%2Findex.tsx)

### Features

- Supports multiple types of Easter eggs:
  - Key combinations
  - Mouse click patterns
  - Voice commands
- Easy to integrate with existing React components
- Customizable triggers and callbacks
- TypeScript support for type safety

### Installation

To use this Easter egg hook in your project, simply copy the `useEasterEgg` hook from `src/index.ts` into your project.

### Usage

Here's a basic example of how to use the `useEasterEgg` hook:

1. Key Combination Easter Egg:

   a. Import the necessary components:
      ```typescript
      import React from "react";
      import { EasterEggConfig, useEasterEgg } from "./path-to-your-hook";
      ```

   b. Create a component and define the Easter egg configuration:
      ```typescript
      const MyComponent: React.FC = () => {
        const easterEggConfig: EasterEggConfig = {
          trigger: "secretcode",
          callback: () => alert("Easter egg activated!"),
          type: "keyCombo",
        };

        const { triggered, EasterEggWrapper } = useEasterEgg(easterEggConfig);

        return (
          <div>
            <h1>My Component</h1>
            <EasterEggWrapper>
              <div>Type the secret code!</div>
            </EasterEggWrapper>
            {triggered && <p>Easter egg found!</p>}
          </div>
        );
      };
      ```

   c. Use the component in your application:
      ```typescript
      import MyComponent from "./MyComponent";

      function App() {
        return (
          <div>
            <MyComponent />
          </div>
        );
      }
      ```

   d. Customize the trigger and callback:
      - You can change the `trigger` to any string you want. For example, "goku" for the Goku code.
      - Modify the `callback` function to perform any action when the Easter egg is triggered.

   e. Handle multiple key combinations:
      - To support multiple key combinations, you can use multiple `useEasterEgg` hooks in the same component.

   f. Add visual feedback:
      - Use the `triggered` state to show or hide elements when the Easter egg is activated.

   g. Debugging:
      - If the Easter egg isn't working, check the browser console for any errors.
      - Ensure that the `type` is set to "keyCombo" for key combination Easter eggs.

   h. Performance considerations:
      - The hook uses event listeners, so be mindful of using too many Easter eggs on a single page.
