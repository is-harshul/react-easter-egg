interface ConfettiOptions {
  angle?: number;
  spread?: number;
  particleCount?: number;
  origin?: {
    x?: number;
    y?: number;
  };
  // Add other options as needed
}

declare global {
  function confetti(options?: ConfettiOptions): Promise<null>;

  interface Window {
    confetti: typeof confetti;
  }
}

// This empty export is necessary to make this a module file
export {};
