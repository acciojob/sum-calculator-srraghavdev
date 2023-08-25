import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import Globalcontextproivder from "./context/Globalcontextprovider";



ReactDOM.render(<Globalcontextproivder><App/></Globalcontextproivder>, document.getElementById("root"));
