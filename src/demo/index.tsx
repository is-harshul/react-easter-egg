import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import MouseAndKeyCombination from "./MouseAndKeyCombination.tsx";
import SpeechRecognition from "./Speech.tsx";

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
