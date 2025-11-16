import { createRoot } from "react-dom/client";
import "./index.css";

const rootEl = document.getElementById("root");

(async () => {
  try {
    const { default: App } = await import("./App.tsx");
    createRoot(rootEl!).render(<App />);
  } catch (err) {
    // Log and show runtime errors in the page to help debugging a blank screen.
    // This is a temporary helper — remove after debugging.
    // eslint-disable-next-line no-console
    console.error(err);
    if (rootEl) {
      rootEl.innerHTML = `<pre style="white-space:pre-wrap;color:#b91c1c;padding:1rem">${String(
        err
      )}</pre>`;
    }
  }
})();
