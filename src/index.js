import React from "react"
import ReactDOM from "react-dom"
//component file
import TodoContainer from "./funtionBased/components/TodoContainer"


//stylesheet
import "./funtionBased/components/App.css"

ReactDOM.render(
  <React.StrictMode>
    <TodoContainer />
  </React.StrictMode>,
  document.getElementById("root")
);