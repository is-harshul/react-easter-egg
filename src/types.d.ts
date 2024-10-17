export interface SpeechRecognition extends EventTarget {
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
    trigger: string;
    callback: () => void;
    type: "keyCombo" | "mouseRegion" | "voiceCommand";
    voicePhrase?: string;
};
export type ConfettiOptions = {
    angle: number;
    spread: number;
    particleCount: number;
    origin: {
        y: number;
    };
};
