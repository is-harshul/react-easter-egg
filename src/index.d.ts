import React from "react";
import type { EasterEggConfig } from "./types";
declare const useEasterEgg: (config: EasterEggConfig) => {
    triggered: boolean;
    EasterEggWrapper: React.ForwardRefExoticComponent<{
        children: React.ReactNode;
    } & React.RefAttributes<HTMLDivElement>>;
    isListening: boolean;
};
export { useEasterEgg };
export type { EasterEggConfig };
