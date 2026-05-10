# react-secret-easter-egg

> A tiny React hook for hiding **easter eggs** behind key combos, click patterns, or voice commands.

[![npm version](https://img.shields.io/npm/v/react-secret-easter-egg.svg?style=flat-square)](https://www.npmjs.com/package/react-secret-easter-egg)
[![bundle size](https://img.shields.io/bundlephobia/minzip/react-secret-easter-egg?style=flat-square)](https://bundlephobia.com/package/react-secret-easter-egg)
[![license](https://img.shields.io/npm/l/react-secret-easter-egg.svg?style=flat-square)](./LICENSE)
[![downloads](https://img.shields.io/npm/dm/react-secret-easter-egg.svg?style=flat-square)](https://www.npmjs.com/package/react-secret-easter-egg)

🎮 **[Live Playground →](https://stackblitz.com/edit/react-hidden-easter-egg?file=src%2FApp.js,src%2Fdemo%2Findex.tsx)**

---

## Features

- 🎹 **Key combos** — secret typed sequences (Konami, cheat codes)
- 🖱️ **Click patterns** — N consecutive clicks inside a region
- 🎙️ **Voice commands** — speak a phrase to trigger (Web Speech API)
- 🔌 Plug-and-play — one hook, one wrapper, done
- 📦 TypeScript-first, zero runtime deps
- ⚛️ React 18+

## Install

```bash
npm install react-secret-easter-egg
# or
pnpm add react-secret-easter-egg
# or
yarn add react-secret-easter-egg
```

## Quick Start

```tsx
import { useEasterEgg } from "react-secret-easter-egg";

export default function App() {
  const { triggered, EasterEggWrapper } = useEasterEgg({
    type: "keyCombo",
    trigger: "konami",
    callback: () => alert("🎉 You found it!"),
  });

  return (
    <EasterEggWrapper>
      <h1>Try typing "konami"…</h1>
      {triggered && <p>Egg found!</p>}
    </EasterEggWrapper>
  );
}
```

---

## API

### `useEasterEgg(config) → { triggered, EasterEggWrapper, isListening }`

#### Config

| Field | Type | Required | Default | Used by | Description |
|---|---|---|---|---|---|
| `type` | `"keyCombo" \| "mouseRegion" \| "voiceCommand"` | ✅ | — | all | Trigger source |
| `trigger` | `string` | ✅ | — | keyCombo / mouseRegion | Sequence string (keyCombo) or click-count-as-string (mouseRegion, e.g. `"5"`) |
| `callback` | `() => void` | ✅ | — | all | Fires when the egg activates |
| `voicePhrase` | `string` | voiceCommand only | — | voiceCommand | Phrase to match (case-insensitive) |
| `consecutiveClickGap` | `number` (ms) | no | `300` | mouseRegion | Max gap between clicks to count as consecutive |

#### Return

| Field | Type | Description |
|---|---|---|
| `triggered` | `boolean` | Latches to `true` once the egg fires |
| `EasterEggWrapper` | React component | Wraps the click target. **Required for `mouseRegion`** — clicks outside its bounding rect are ignored. For `keyCombo` / `voiceCommand` it's a passthrough `<div>`. |
| `isListening` | `boolean` | `voiceCommand` only — `true` while the mic is active |

---

## Examples

All examples are self-contained — copy, paste, run. Drop any file into your `src/` and import it.

### 1. Key Combo (typed sequence)

```tsx
// KeyComboEgg.tsx
import { useEasterEgg } from "react-secret-easter-egg";

export default function KeyComboEgg() {
  const { triggered, EasterEggWrapper } = useEasterEgg({
    type: "keyCombo",
    trigger: "goku",
    callback: () => console.log("⚡ Kamehameha!"),
  });

  return (
    <EasterEggWrapper>
      <p>
        Type <code>goku</code> anywhere on this page.
      </p>
      {triggered && <p>🐉 Power level over 9000!</p>}
    </EasterEggWrapper>
  );
}
```

> 💡 The hook listens on `window`, so the user can be focused anywhere — they don't need to click the wrapper first.

---

### 2. Mouse Region (N clicks inside an area)

```tsx
// ClickPatternEgg.tsx
import { useEasterEgg } from "react-secret-easter-egg";

export default function ClickPatternEgg() {
  const { triggered, EasterEggWrapper } = useEasterEgg({
    type: "mouseRegion",
    trigger: "5",              // 5 consecutive clicks
    consecutiveClickGap: 400,  // within 400ms of each other
    callback: () => alert("🥚 Found me!"),
  });

  return (
    <EasterEggWrapper>
      <button
        style={{
          padding: "1rem 2rem",
          background: triggered ? "gold" : "tomato",
          color: "white",
          border: 0,
          borderRadius: 12,
          cursor: "pointer",
        }}
      >
        {triggered ? "Cracked!" : "Click me 5× fast"}
      </button>
    </EasterEggWrapper>
  );
}
```

> ⚠️ The wrapper renders a `<div>`. Clicks are tracked **inside its bounding rect**, so style the wrapper (or its child) to fill the clickable area.

---

### 3. Voice Command

```tsx
// VoiceEgg.tsx
import { useEasterEgg } from "react-secret-easter-egg";

export default function VoiceEgg() {
  const { triggered, isListening, EasterEggWrapper } = useEasterEgg({
    type: "voiceCommand",
    trigger: "voice",            // required by types but unused for voice
    voicePhrase: "open sesame",
    callback: () => console.log("🪄 Door opens"),
  });

  return (
    <EasterEggWrapper>
      <p>{isListening ? "🎙️ Listening…" : "🔇 Mic idle"}</p>
      <p>
        Say <strong>"open sesame"</strong>
      </p>
      {triggered && <p>✨ Welcome.</p>}
    </EasterEggWrapper>
  );
}
```

> ⚠️ Requires a Chromium-based browser (Chrome / Edge) and mic permission. Safari / Firefox have partial or no `SpeechRecognition` support.

---

### 4. Multiple Eggs in One Component

```tsx
import { useEasterEgg } from "react-secret-easter-egg";

export default function ManyEggs() {
  useEasterEgg({ type: "keyCombo", trigger: "up",     callback: () => console.log("↑") });
  useEasterEgg({ type: "keyCombo", trigger: "down",   callback: () => console.log("↓") });
  useEasterEgg({ type: "keyCombo", trigger: "konami", callback: () => alert("🎮") });

  return <p>Try typing: up / down / konami</p>;
}
```

---

## Gotchas

- **SSR / Next.js / Astro**: the hook touches `window`. Render client-only — `next/dynamic` with `{ ssr: false }`, or Astro's `client:only="react"`.
- **Wrapper is only required for `mouseRegion`.** For `keyCombo` / `voiceCommand` it's a passthrough `<div>` — you can omit it entirely.
- **Stable config**: `useEffect` re-runs on every `config` change. Memoize inline objects/callbacks so listeners don't churn each render:
  ```tsx
  const callback = useCallback(() => alert("hi"), []);
  const config = useMemo(
    () => ({ type: "keyCombo" as const, trigger: "hi", callback }),
    [callback],
  );
  useEasterEgg(config);
  ```
- **`triggered` latches** — it stays `true` once fired. Reset by remounting the component, or track your own state inside `callback`.

---

## Compatibility

- React **18+** (peer dependency)
- TypeScript **4.7+** (optional)
- Modern browsers for `keyCombo` / `mouseRegion`
- Chromium-based for `voiceCommand` (Web Speech API)

## Contributing

Issues and PRs welcome — see the [tracker](https://github.com/is-harshul/react-easter-egg/issues).

## License

[MIT](./LICENSE) © [is-harshul](https://github.com/is-harshul)
