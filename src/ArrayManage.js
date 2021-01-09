import React from 'react';

import './App.css';

import back from './back.png';
import next from './next.png';

import letterSound from './letterSound.mp3';




function ArrayManage(props) {

    let [letter,setletter]=React.useState('a');

   
    var newArray=props.myarray.filter(function(item){
        return item.title.charAt(0).toLowerCase() === letter;
                               })
        console.log(newArray);


        let [counter, setCounter] = React.useState(0);   

        var newObject=newArray[counter];
       
        function nextButton(){
            if(counter<newArray.length-1){
               setCounter(counter + 1);
               }
             else{ setCounter(newArray.length-1);}
             }
       
       
        function backButton(){
            if(newArray.length !== counter && counter !==0){
                setCounter(counter-1);
               }
            else{ setCounter(0);}
              }

            

    return(
        <div className="information_div">

                <audio id="audio"><source src={letterSound} ></source></audio>

               

                <div className="letter_button">
                    <div className="aaaa">

                    <button  onClick={() => {setletter('a');   setCounter(0); document.getElementById('audio').play();}}>A</button>

                    <button onClick={() => {setletter('b');   setCounter(0); document.getElementById('audio').play();}}>B</button>

                    <button onClick={() => {setletter('c');   setCounter(0); document.getElementById('audio').play();}}>C</button>

                    <button onClick={() => {setletter('d');   setCounter(0); document.getElementById('audio').play();}}>D</button>

                    <button onClick={() => {setletter('e');   setCounter(0); document.getElementById('audio').play();}}>E</button>

                    <button onClick={() => {setletter('f');   setCounter(0); document.getElementById('audio').play();}}>F</button>

                    <button onClick={() => {setletter('g');   setCounter(0); document.getElementById('audio').play();}}>G</button>

                    <button onClick={() => {setletter('h');   setCounter(0); document.getElementById('audio').play();}}>H</button>

                    <button onClick={() => {setletter('i');   setCounter(0); document.getElementById('audio').play();}}>I</button>

                    <button onClick={() => {setletter('j');   setCounter(0); document.getElementById('audio').play();}}>J</button>

                    <button onClick={() => {setletter('k');   setCounter(0); document.getElementById('audio').play();}}>K</button>

                    <button onClick={() => {setletter('l');   setCounter(0); document.getElementById('audio').play();}}>L</button>

                    <button onClick={() => {setletter('m');   setCounter(0); document.getElementById('audio').play();}}>M</button>
                     
                    <button onClick={() => {setletter('n');   setCounter(0); document.getElementById('audio').play();}}>N</button>

                    <button onClick={() => {setletter('o');   setCounter(0); document.getElementById('audio').play();}}>O</button>

                    <button onClick={() => {setletter('p');   setCounter(0); document.getElementById('audio').play();}}>P</button>

                    <button onClick={() => {setletter('q');   setCounter(0); document.getElementById('audio').play();}}>Q</button>

                    <button onClick={() => {setletter('r');   setCounter(0); document.getElementById('audio').play();}}>R</button>

                    <button onClick={() => {setletter('s');   setCounter(0); document.getElementById('audio').play();}}>S</button>

                    <button onClick={() => {setletter('t');   setCounter(0); document.getElementById('audio').play();}}>T</button>

                    <button onClick={() => {setletter('u');   setCounter(0); document.getElementById('audio').play();}}>U</button>

                    <button onClick={() => {setletter('v');   setCounter(0); document.getElementById('audio').play();}}>V</button>

                    <button onClick={() => {setletter('w');   setCounter(0); document.getElementById('audio').play();}}>W</button>

                    <button onClick={() => {setletter('x');   setCounter(0); document.getElementById('audio').play();}}>X</button>

                    <button onClick={() => {setletter('y');   setCounter(0); document.getElementById('audio').play();}}>Y</button>

                    <button onClick={() => {setletter('z');   setCounter(0); document.getElementById('audio').play();}}>Z</button>
                   
                   
                    </div>
                    
                        <h2>{props.mainTitle}</h2> 
                </div>
   
       

       <div className="InformationAndButton">

        <div className="list_button">
            {newArray.map((item ,index) => <div>  
                     <button onClick={() => setCounter(index)}>{item.title}</button>
                                           </div>)}
         </div> 

         <div className="Information_area">
            <h2 className="CenterTheTitle">{newObject.title} </h2>                     
            <p>{newObject.description} </p>
           
         </div> 

         <div className="next_back_button">
                
                <p className="hoverme"></p>

                <img src={back}  onClick={backButton}/>
                
                <img  src={newObject.imageUrl} />
               
                <img src={next}  onClick={nextButton}/>

                <p className="hoverme"></p>
         </div> 
         
      </div>
    
            
      
          
 </div>
   )};

   export default ArrayManage;