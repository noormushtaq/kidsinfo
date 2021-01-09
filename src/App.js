import React from 'react';

import './App.css';

import ButtonPlant from './ButtonPlant';

import ButtonAnimal from './ButtonAnimal';

import ButtonEarth from './ButtonEarth';

import ButtonHuman from './ButtonHuman';

import child from './8.png';

import greenArrow from './greenArrow.jpg'


function App() {

  let [isHidden1,setisHidden1]=React.useState(true);
  let [isHidden2,setisHidden2]=React.useState(true);
  let [isHidden3,setisHidden3]=React.useState(true);
  let [isHidden4,setisHidden4]=React.useState(true);
  

  function toggleHidden(myid){

   console.log(myid);
    
   switch (myid) {
    case 'P':
      setisHidden1(!isHidden1);

      setisHidden2(true);
      setisHidden3(true);
      setisHidden4(true);
     
      break;

    case 'A':
      setisHidden2(!isHidden2);

      setisHidden1(true);
      setisHidden3(true);
      setisHidden4(true);
      
      break;

    case 'E':
      setisHidden3(!isHidden3);

      setisHidden1(true);
      setisHidden2(true);
      setisHidden4(true);
     
      break;

    case 'H':
      setisHidden4(!isHidden4);
       
      setisHidden1(true);
      setisHidden2(true);
      setisHidden3(true);
     
      break;

    default:
     break;
  }
}

  

  return (
    <div className="main_class" >
       
      
           
       <div class="dictionaryTitle"><h2 className="sub_title">Choose one of the categories</h2>       <div class="dictionary"> <h1><span>S</span>cience <span>D</span>ictionary for Kids</h1></div> </div>
          <div class="greenArrowClass"><img  src={greenArrow}/></div>
           <div className="categary">

            <div className="categary_Button">
           
                <button onClick={() => toggleHidden('P')}>Plant</button>
                <button onClick={() => toggleHidden('A')}>Animal</button>
                <button onClick={() => toggleHidden('E')}>Earth</button>
                <button onClick={() => toggleHidden('H')}>Human</button>
            </div>

           <div className="categary_Info">
           
                {!isHidden1 &&
                <div>
                <ButtonPlant /> 
                </div>}

                {!isHidden2 &&
                <div >
                <ButtonAnimal /> 
                </div>}
                
                {!isHidden3 &&
                <div >
                <ButtonEarth />
                </div>}
                
                {!isHidden4 &&
                <div>
                <ButtonHuman />
                </div> }

           </div>

           <div class="example">
            <div class="img-container ">
              <img class="mix-blend-mode" src={child}/>
            </div>
         </div>  
       
        
     </div>
     
    
      
    </div>
  );
}

export default App;
