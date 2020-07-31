import React from 'react';
import './App.css';
import  Cardmovie  from "./components/Cardmovie";
import  NavigationBar  from "./components/NavigationBar";


function App() {
  return (
    <React.Fragment>
      <NavigationBar/>
       <Cardmovie/>
    </React.Fragment>
  );
}

export default App;
