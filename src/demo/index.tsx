import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import MouseAndKeyCombination from "./MouseAndKeyCombination.js";
import SpeechRecognition from "./Speech.js";

import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <main className="main-container">
      <section className="section mouse-key">
        <MouseAndKeyCombination />
      </section>
      <section className="section speech">
        <SpeechRecognition />
      </section>
    </main>
  </StrictMode>
);
