import React from 'react';
import './App.css';
import Car from './Car';
import logo from './logo.svg';
import pm from './BMW.jpeg'
import tes from './tesla.jpg'
import ben from './bently.jpeg'
import mer from './mercedes.jpeg' 
function App() {
    return (
        <div class="App">
        <div class ="left-items">
            <div class="item">
            <Car 
                brand="BMW" 
                model="1998" 
                color="blue"
                image= {pm}
                borderColor ="#00269F  "
            

            />
            </div>
            <div class="item">
            <Car 
                brand="Mercedes" 
                model="2021" 
                color="#000000"
                image={mer}
                borderColor ="black"
                
                
            />
                </div>
          </div>
          <div class="right-items">
          <div class="item">
            <Car 
                brand="Tesla" 
                model="2022" 
                color="#494949  "
                image={tes}
                borderColor = "grey"
               
            />
            </div>
            <div class="item">
            <Car 
                brand="Bently" 
                model="2020" 
                color="B6B6B6  "
                image={ben}
                borderColor ="silver"
                
               
            />
            </div>
            </div>
        </div>
    );
}

export default App;


