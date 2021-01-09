import React from 'react';

import './App.css';

import ArrayManage from './ArrayManage';


import earth from './earth.png';
import atmosphere from './atmosphere.png';
import planisphere from './planisphere.png';
import ocean from './ocean.jpg';
import island from './island.jpg';
import continent from './continent.png';
import countries from './countries.png';
import peninsula from './Peninsula.png';
import packIce from './packIce.jpg';
import valley from './valley.jpg';
import northPole from './northPole.jpg';
import flood from './flood.png';
import galaxy from './galaxy.png';
import star from './star.jpg';
import magma from './magma.jpg';
import tornado from './tornado.jpg';
import tsunami from './tsunami.jpg';
import drought from './drought.jpg';
import heatWave from './heatWave.jpg';
import asteroid from './Asteroid.jpg';


import sorry from './sorry.png';

function ButtonEarth() {

    var array =[
        {title:"Earth",
        description:"The Earth is a planet. Imagine a big ball in constant movement. People, plants, and animals can live on it, because it is warm and lighted by the sun, covered with water,and surrounded by oxygen- all necessary for supporting life as we know it!",
        imageUrl:earth},

        {title:"Atmosphere",
        description:"The atmosphere is the layer of air that surrounds the Earth. The clouds are part of this layer. because of the atmosphere we can breathe. In addition, it holds in the heat from the sun's rays. Without it, the earth would be very, very cold!",
        imageUrl:atmosphere},

        {title:"Planisphere",
        description:"Our planet, the Earth, is round. So how can we show it in a book or in a computer screen? We use planisphere: a map that shows the Earth flattend out!",
        imageUrl:planisphere},
        
        {title:"Continent",
        description:"The Earth is covered with water (oceans and seas) and land (continent). There are six continents where people live. Find them on the planisphere below. They are Europe, Africa, Asia, North and South America, and Oceania",
        imageUrl:continent},

        {title:"Country",
        description:"Every continent is divided up into countries. Earth country is different in terms of its size, its culture, its languge, and by whome it is governed. But all countries have one thing in common: people live there! ",
        imageUrl:countries},

        {title:"Ocean",
        description:"The Earth is nicknamed the 'blue planet' because most of it is covered with water. The oceans are the very large bodies of saltwater that cover the Earth. Seas also are big large bodies of saltwater, but they are smaller and shallower than the oceans.",
        imageUrl:ocean},

        
        {title:"Island",
        description:"An island is a land area that is surrounded by water on all sides! It may be tiny or huge, inhabited or uninhabited and connected to continent by bridge or accessible only by boat or plane. Australia, Japan, and Corsica are examples of islands.",
        imageUrl:island},

        {title:"Peninsula",
        description:"A peninsula is almost an island! But it is connected to a continent by a narrow band. So it is not entirely surrounded by water, as island are.",
        imageUrl:peninsula},


        {title:"L",
        description:"Sorry! there is no information under this letter",
        imageUrl:sorry},

        {title:"Pack Ice",
        description:"Pack Ice is a layer of frozen sea that can reach a thickness of  almost 10 feet (3 M): this is more than height of the ceiling in most kitchens! The North and South Poles are coverd with pack ice.",
        imageUrl:packIce},


        {title:"Valley",
        description:"This is a long low area between two mountains or between two groups of mountains. Most people who live in the mountains really live in valleys because the climate and living conditions are not as harsh there as they are at higher altitudes.",
        imageUrl:valley},

        {title:"Flood",
        description:"When it rains very hard for a long time. rivers and lakes flow over their banks. The water moves onto land, turning into a flood! Houses and roads are submerged under water, and this often causes major property damage.",
        imageUrl:flood},

        {title:"North Pole",
        description:"The North Pole is the place on Earth that is farthest to the north. It is mostly coverd by the Artic Ocean, which is completely frozen, and by a few streches of land that make up Greenland. The temperature goes down as low as -58°F(-50°C)! The Inuit (or Eskimos) have learned to adapt to this amazing cold.",
        imageUrl:northPole},

        {title:"Star",
        description:"Stars are balls of gas that produce lots of heat and light. Visible at night, they look very tiny to us, because they are far away. However, some of them are far bigger than our sun!",
        imageUrl:star},

        {title:"B",
        description:"Sorry! there is no information under this letter",
        imageUrl:sorry},

        {title:"Magma",
        description:"Magma is a very hot liquid that forms inside the earth. When a volcano erupts, gas pushes the magma to the surface of the earth. Magma flows down the sides of a volcano As magma cools off, it forms lava and volcanic rock.",
        imageUrl:magma},

        {title:"Drought",
         description:"A drought is a lack of water. In certain regions, such as deserts, droughts are permanent, because they are part of the climate. But sometimes other regions experience unexpected droughts, when it stops raining for a long time.",
         imageUrl:drought},

         {title:"Galaxy",
         description:"A galaxy is a huge collection of stars. The Sun is part of the Milky Way galaxy. On summer night, the Milky Way is particulary visible: it looks like a streak of milk, and that's where the name comes from!",
         imageUrl:galaxy},

         {title:"Heat wave",
         description:"A heat wave is a period of very hot weather. It's very hot both day and night. People have to drink lots of water and take showers (or keep rubbing a towel moistened with cold water over their faces and bodies).",
         imageUrl:heatWave},

         {title:"Asteroid",
         description:"An asteroid is a rock, a kind of mini-planet that travels through space. Asteroids come in very different sizes: some are the size of grains of sand, but others are larger than islands!",
         imageUrl:asteroid},


         {title:"J",
         description:"Sorry! there is no information under this letter",
         imageUrl:sorry},

         {title:"K",
         description:"Sorry! there is no information under this letter",
         imageUrl:sorry},

         {title:"R",
         description:"Sorry! there is no information under this letter",
         imageUrl:sorry},

         {title:"Q",
         description:"Sorry! there is no information under this letter",
         imageUrl:sorry},

         {title:"Tsunami",
         description:"Tsunami is the Japanese word for a huge wave that crashes down on the coast. destroying land and people. This kind of wave often forms after a strong earthquake at sea or the eruption of an underwater volcano. ",
         imageUrl:tsunami},

         {title:"Tornado",
         description:"During a storm, the wind sometimes starts to whirl around like a toy top spinning at high speed. This kind of violent storm is called a tornado. These are especially frequent in the United States, where they rip up and destroy everything in their paths.  ",
         imageUrl:tornado},


         {title:"U",
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
                        mainTitle="Earth"/>
        
        </div>
    )};

    export default ButtonEarth;    