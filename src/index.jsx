import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import "./index.css";

const entryPoint = document.getElementById("root");
ReactDOM.createRoot(entryPoint).render(<App />);
//下面这个与上面的是相同的，只是没有使用jsx写法
// ReactDOM.createRoot(entryPoint).render(React.createElement(App));
