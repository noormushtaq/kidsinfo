import React from 'react';

import './App.css';

import ArrayManage from './ArrayManage';

import plant from './plant.png';
import algae from './algae.png';
import moss from './moss.png';
import flower from './flower.png';
import flower2 from './flower2.png';
import fern from './fern.png';
import fruit from './fruit.png';
import vein from './vein.png';
import leaf from './leaf.png';
import root from './root.png';
import sap from './sap.png';
import berry from './berry.png';
import pollination from './pollination.png';
import nectar from './nectar.png';
import seed from './seed.png';
import pip from './pip.png';
import pit from './pit.png';
import citrus from './citrus.png';
import chlorophyll from './chlorophyll.png';
import conifer from './conifer.png';

import sorry from './sorry.png';

function ButtonPlant() {

  var array =[
              {title:"Plant",
              description:"A Plant is a living entity that is often green! In contrast to animals, which are also living beings, plants do not move around and they make their own food",
              imageUrl:plant},

              {title:"Flowering Plant",
              description:"In classifying plants, we look at them to determine whether they have roots, and flowers. The largest group of plants is called the flowering plants: they have roots, leaves, and flowers! This group includes nearly all trees, grasses, and decorative  flowers.",
              imageUrl:flower},

              {title:"Algae",
              description:"Algae are plants,even though they live in the water, either fresh or salt. They have leaves, but no roots or flowers. They need light, so they develop in waters that are neither too deep nor too dark. ",
              imageUrl:algae},

              {title:"Moss",
              description:"Mosses make up a third group of plants. Like  algae, they have neither roots nor flowers but rather many little leaves. Mosses in particular need moisture to grow. Look! Some of them grow directly on rocks! ",
              imageUrl:moss},
              
              {title:"Fern",
              description:"This is a peculiar plant that has roots and leaves, but never any flowers. Ferns often grow in damp, shady locations and unfurl their growing  leaves little by little. ",
              imageUrl:fern},

              {title:"Conifer",
              description:"Conifers make up the last group of plants. Their leaves are needles, or scales, and their fruits are cones ( hence, their name! ). Pines, firs, and cedars-they don't lose their neddles in the winter. One exception: the larch, which loses them, just like a deciduous tree loses its leaves!",
              imageUrl:conifer},

              {title:"Root",
              description:"This is the hidden part of plants that attaches them to the ground. By using their roots plants get water and mineral salts that they need to live from the ground. Rabbits and badgers often dig their burrowes among the roots of trees!",
              imageUrl:root},

              {title:"Sap",
              description:"A little like the blood in our bodies, sap is a liquid that flows all through plants. It carries water and mineral salts absorbed from the ground by roots, and it distributes them through the whole plants.",
              imageUrl:sap},

              {title:"Leaf",
              description:"Palmated for maple, serrated for the cherry tree, saw-toothed for the chestnut-the shape doesn't matter! A leaf is a light catcher. Thanks to energy from the sun, water and mineral salts absorbed by the roots turn into food for the plant, right on the spot!",
              imageUrl:leaf},

              {title:"Chlorophyll",
              description:"Chlorophyll is the pigment that colors plants green. Chlorophyll is what enables leaves to absorb sunlight, just as a sponge absorbs water!",
              imageUrl:chlorophyll},

              {title:"Vein",
              description:"Veins, which are like tiny pipes, take care of distriting sap in leaves. Look closely and you will see that veins vary in size and shape from one plant to another!",
              imageUrl:vein},

              {title:"Flower",
              description:"Like animals, plants need male and female opens in order to reproduce. With their petals, flower shelter these organs: the pistal (the feminine part) and covered with pollen (the male part). In order for a new plant to be born. the pollen from one flower must meet the pistil of a flower of the same species.",
              imageUrl:flower2},

              {title:"Pollination",
              description:"It is the process of coming together just described. It results when the wind blows pollen around. It also happens when insects such as bees, move from flower to flower. thus transporting pollen",
              imageUrl:pollination},

              {title:"Nectar",
              description:"This sugary liquid made by flowers is used by bees in making honey. It's a trick of nature. When bees collect nectar, pollen sticks to their legs. They then deposit pollen on other flower, allowing flower to reproduce themselves ",
              imageUrl:nectar},

              {title:"Seed",
              description:"A seed is an essential part of fruit. It contains a baby plant that was born as a result of meeting between the pistil of the plant and pollen from another plant",
              imageUrl:seed},

              {title:"Fruit",
              description:"A fruit  is that part of the plant that contains seeds and protects them. For us, it's food that is often sweet and rich in vitamins!",
              imageUrl:fruit},

              {title:"Pip",
              description:"Cut an apple, a pear, a tomato, or a grape in two. Inside each one, you will discover several seeds. These are pips. Planted in the ground, each pip can sprout and grow into a new plant.",
              imageUrl:pip},

              {title:"Pit",
              description:"Eat a peach, a cherry, a plum, an apricot, or an olive. In the center , you will find a pit. The pit is a hard container with a kernel inside. The kernel  is the seed, which can produce a new plant when it sprouts.",
              imageUrl:pit},

              {title:"Berry",
              description:"Blueberries, carrots, grapes, and even tomatoes, melons, kiwis, and green peppers are berries. This term refers to all fruits whose seeds are pips",
              imageUrl:berry},

              {title:"Citrus fruit",
              description:"Oranges, tangerines, lemons, and grapefruits are citrus fruits. These fruits are covered with thick, slightly grainy skin referred to as a zest. Inside, the pulp is filled with juice! The seeds, or pips, are enclosed in the sections of the fruit.",
              imageUrl:citrus},

              {title:"Arboretum",
               description:"An arboretum is a park planted with many kinds of trees. Its a little like a collection! Some trees are common, but others are rare or  sometimes in danger ",
               imageUrl:sorry},


              {title:"D",
               description:"Sorry! there is no information under this letter",
               imageUrl:sorry},

               {title:"E",
               description:"Sorry! there is no information under this letter",
               imageUrl:sorry},

               {title:"G",
               description:"Sorry! there is no information under this letter",
               imageUrl:sorry},

               {title:"Herbarium",
               description:"A herbarium is a collection of dried plants. You can make one yourself! Gather some leaves or flowers. Let them dry out between sheets of newspaper. Then glue them into a notebook and write down their names and where you found them.",
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

               {title:"O",
               description:"Sorry! there is no information under this letter",
               imageUrl:sorry},

               {title:"Q",
               description:"Sorry! there is no information under this letter",
               imageUrl:sorry},

               {title:"T",
               description:"Sorry! there is no information under this letter",
               imageUrl:sorry},

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
                       mainTitle="Plant"/>

        </div>
    )};

    export default ButtonPlant;