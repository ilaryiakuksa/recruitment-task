import React from "react";
import "./App.css";
import DishFormContainer from "./views/FormView";
import Preview from "./components/Preview";

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Dish Form</h1>
      <DishFormContainer />
      <Preview />
    </div>
  );
};

export default App;
