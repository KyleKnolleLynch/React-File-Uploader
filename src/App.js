import React from "react";
import "./App.css";
import FileUpload from './components/FileUpload';

const App = () => <div className="container mt-5">
  <h4 className="text-center mb-4 display-4">
    <i className="fab fa-react"></i>React File Upload
  </h4>
  <FileUpload />
  </div>;

export default App;

