import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));
const todoTitle = "Call Family";
const todoDec = "My name is ...I live in...I'm from...My favourit player is Messi...He Won the World Cup 18/10/22.";
const date = new Date();
const currentDate = date.getDate();
const currentMonth = date.getMonth();
const currentYear = date.getFullYear();
// const headingStyle = {
//   backgroundColor : "purple",
//   color : "white",
//   textAlign : "center",
//   fontSize : "3rem"
// }

root.render(
  <div> 
    {/* <h1 style={headingStyle}>Todo app</h1> */}
    <h1 className='headingStyle'>Todo app</h1>
    <div className='card'>
    <h3 className='cardTitle'>{todoTitle}</h3>
    <p className='cardDesc'>{todoDec}</p>
    <p className='cardFooter'>{currentDate + "/" + currentMonth + "/" + currentYear}</p>
    </div>
  </div>
);
