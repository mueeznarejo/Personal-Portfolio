import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { installCloudflareAnalytics } from "./lib/cloudflareAnalytics";

installCloudflareAnalytics();

createRoot(document.getElementById("root")!).render(<App />);
