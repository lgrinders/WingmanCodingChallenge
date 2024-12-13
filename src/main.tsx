import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
// lets you connect redux store to react
import { Provider } from "react-redux";
import { store } from "./states/store/store.ts";
import { BrowserRouter } from "react-router";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter basename="/WingmanCodingChallenge/">
      {/* gives entire application access to store */}
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </StrictMode>
);
