import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./HomeFunc";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(<Home message="Hello Max!" />);
