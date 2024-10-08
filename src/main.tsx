import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import MouseAndKeyCombination from "./demo/MouseAndKeyCombination.tsx";
import SpeechRecognition from "./demo/Speech.tsx";

import "./demo/index.css";

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
