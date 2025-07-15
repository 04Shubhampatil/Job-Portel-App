import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Toaster } from "sonner";
import { Provider } from "react-redux";
import store from "./redux/store.js";
createRoot(document.getElementById("root")).render(
  <>
    <Toaster />
    <Provider store={store}>
      <App />
    </Provider>
  </>
);
