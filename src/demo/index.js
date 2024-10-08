import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import MouseAndKeyCombination from "./MouseAndKeyCombination.js";
import SpeechRecognition from "./Speech.js";
import "./index.css";
createRoot(document.getElementById("root")).render(_jsx(StrictMode, { children: _jsxs("main", { className: "main-container", children: [_jsx("section", { className: "section mouse-key", children: _jsx(MouseAndKeyCombination, {}) }), _jsx("section", { className: "section speech", children: _jsx(SpeechRecognition, {}) })] }) }));
