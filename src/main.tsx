import ReactDOM from "react-dom/client";
import App from "./App";
import FiltersContextProvider from "./context/FiltersContext";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <FiltersContextProvider>
    <App />
  </FiltersContextProvider>
);
