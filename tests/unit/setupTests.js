import { beforeAll, afterAll, afterEach } from "vitest";

window.happyDOM.setURL("http://localhost");

// Global canvas mock (for charts)
HTMLCanvasElement.prototype.getContext = () => {};
