import { afterAll, afterEach, beforeAll } from "vitest";

window.happyDOM.setURL("http://localhost");

// Global canvas mock (for charts)
HTMLCanvasElement.prototype.getContext = () => {};
