import ReactDOM from "react-dom/client";

import AppA from "./components/a/AppA";
import AppB from "./components/b/AppB";

ReactDOM.createRoot(document.getElementById("root")).render(
  __APP_ID__ === "a" ? <AppA /> : <AppB />,
);
