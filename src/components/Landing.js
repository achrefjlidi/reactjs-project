import React from 'react';
import {getImagePath} from "../tools/toolbox";

const Landing = ({setScreen}) => {

  const handleCLick = () => {
    window.alert('Click');
  }

  return (
    <>
    <div className="right">
      <button onClick={handleCLick}>Je me connecte</button>
    </div>
      {/*
  Here add a your popup component
   */}
    </>
  )
}

export default Landing;