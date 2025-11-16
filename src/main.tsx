import { createRoot } from "react-dom/client";
import "./index.css";

const rootEl = document.getElementById("root");

(async () => {
  try {
    console.log("Loading App...");
    const { default: App } = await import("./App.tsx");

    createRoot(rootEl!).render(<App />);
  } catch (err: any) {
    console.error("Runtime error:", err);

    if (rootEl) {
      rootEl.innerHTML = `
        <pre style="white-space:pre-wrap;color:#ff4d4d;padding:1rem;font-size:1.1rem">
🚨 ERROR IN APP 🚨

${err?.message ?? err}
${err?.stack ?? ""}
        </pre>
      `;
    }
  }
})();
