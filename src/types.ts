// Add these type declarations at the top of the file
export interface SpeechRecognition extends EventTarget {
  // Add necessary properties and methods
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

export type EasterEggConfig = {
  trigger: string | ClickPattern;
  callback: () => void;
  type: "keyCombo" | "mouseRegion" | "voiceCommand";
  voicePhrase?: string;
};
