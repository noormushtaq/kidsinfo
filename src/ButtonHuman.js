import React from 'react';

import './App.css';

import ArrayManage from './ArrayManage';


import antibiotic from './Antibiotic.jpg';

import sorry from './sorry.png';


function ButtonHuman() {

    var array =[

        {title:"Antibiotic",
        description:"This is a type of medication. but be careful! It destroys bacteria, not viruses. So, the doctor perscribes it for you once the sickness has been identified properly. To get well, you have to stick to the quantity and the length of the treatment!",
        imageUrl:antibiotic},

        {title:"B",
        description:"Sorry! there is no information under this letter",
        imageUrl:sorry},

        {title:"C",
        description:"Sorry! there is no information under this letter",
        imageUrl:sorry},

        {title:"D",
        description:"Sorry! there is no information under this letter",
        imageUrl:sorry},

        {title:"E",
        description:"Sorry! there is no information under this letter",
        imageUrl:sorry},

        {title:"F",
        description:"Sorry! there is no information under this letter",
        imageUrl:sorry},

        {title:"G",
        description:"Sorry! there is no information under this letter",
        imageUrl:sorry},

        {title:"H",
        description:"Sorry! there is no information under this letter",
        imageUrl:sorry},

        {title:"I",
        description:"Sorry! there is no information under this letter",
        imageUrl:sorry},

        {title:"J",
        description:"Sorry! there is no information under this letter",
        imageUrl:sorry},

        {title:"K",
        description:"Sorry! there is no information under this letter",
        imageUrl:sorry},

        {title:"L",
        description:"Sorry! there is no information under this letter",
        imageUrl:sorry},

        {title:"M",
        description:"Sorry! there is no information under this letter",
        imageUrl:sorry},

        {title:"N",
        description:"Sorry! there is no information under this letter",
        imageUrl:sorry},

        {title:"O",
        description:"Sorry! there is no information under this letter",
        imageUrl:sorry},

        {title:"U",
        description:"Sorry! there is no information under this letter",
        imageUrl:sorry},

        {title:"P",
        description:"Sorry! there is no information under this letter",
        imageUrl:sorry},

        {title:"Q",
        description:"Sorry! there is no information under this letter",
        imageUrl:sorry},

        {title:"R",
        description:"Sorry! there is no information under this letter",
        imageUrl:sorry},

        {title:"S",
        description:"Sorry! there is no information under this letter",
        imageUrl:sorry},

        {title:"T",
        description:"Sorry! there is no information under this letter",
        imageUrl:sorry},

        {title:"V",
        description:"Sorry! there is no information under this letter",
        imageUrl:sorry},

        {title:"W",
        description:"Sorry! there is no information under this letter",
        imageUrl:sorry},

        {title:"X",
        description:"Sorry! there is no information under this letter",
        imageUrl:sorry},

        {title:"Y",
        description:"Sorry! there is no information under this letter",
        imageUrl:sorry},

        {title:"Z",
        description:"Sorry! there is no information under this letter",
        imageUrl:sorry},
]


    return(
        <div>
           
          <ArrayManage myarray={array}
                       mainTitle="Human"/>
 
        </div>
    )};

    export default ButtonHuman;