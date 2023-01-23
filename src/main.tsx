import ReactDOM from "react-dom/client";
import App from "./App";
import FiltersContextProvider from "./context/FiltersContext";
import HotelDataContextProvider from "./context/HotelDataContext";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <FiltersContextProvider>
    <HotelDataContextProvider>
      <App />
    </HotelDataContextProvider>
  </FiltersContextProvider>
);
