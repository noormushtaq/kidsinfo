import React from 'react';

import './App.css';

import ArrayManage from './ArrayManage';

import animal from './animal.png';

import sorry from './sorry.png';


function ButtonAnimal() {

    var array =[

        {title:"Animal",
        description:"An animal is a living creature that can move around. It needs to locate food in order to live. Animals that live free, without help from humans, are wild animals. Animals that live with humans are domesticated animals.",
        imageUrl:animal},

        {title:"B",
        description:"Sorry! there is no information under this letter",
        imageUrl:sorry},

        {title:"Courtship display",
        description:"In order to reproduce, animals have to form couples:a female must get together with a male. So, the male puts on a courtship display to attract a female: toads sing, some fish change color, and peacocks fan their tails.",
        imageUrl:sorry},

        {title:"Carnivore",
        description:"A carnivore eats other animals.In mammals, the teeth are adapted to cutting and grinding meat. Think of a lion's mouth! But, on a much smaller scale, a ladybug also a carnivore: it eat aphids!",
        imageUrl:sorry},

        {title:"D",
        description:"Sorry! there is no information under this letter",
        imageUrl:sorry},

        {title:"E",
        description:"Sorry! there is no information under this letter",
        imageUrl:sorry},

        {title:"Food chain",
        description:"A seed is eaten by a field mouse, which gets swallowed by an owl, which is eaten by a fox, which in turn will be eaten by a wolf! In nature, species survive by eating smaller ones. This process makes up a food chain. ",
        imageUrl:sorry},

        {title:"G",
        description:"Sorry! there is no information under this letter",
        imageUrl:sorry},

        {title:"Herbivore",
        description:"Whether small like june bugs or large like elephants, ainmals that eat only plants are herbivores. There are some that eat only one kind of plant-for example, pandas eat nothing but bamboo leaves!",
        imageUrl:sorry},

        {title:"Instinct",
        description:"Animals do things by instict-that is, they know how to do them without ever having been taught. For example, in some species, the babies know how to walk right after they are born! ",
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

        {title:"Molting",
        description:"As they grow, crustanceans (e.g. crabs and shrimp) and snakes find things too tight inside their shells or skins. So they exchange them for new ones! Litte, larger, more comfortable ones replace the originals. That molting",
        imageUrl:sorry},

        {title:"Metamorphosis",
        description:"A tiny caterpillar came out of this egg. As the days go by, the caterpiller changes  into a chrysalis, and then into a magnificent butterfly with brightly colored wings. This is metamorphosis, the changing of the caterpiller into a butterfly. ",
        imageUrl:sorry},


        {title:"N",
        description:"Sorry! there is no information under this letter",
        imageUrl:sorry},

        {title:"Oviparous animal",
        description:"An animal is Oviparous if it reproduces by laying eggs. When the egg hatches, the baby comes out. Birds, many reptiles, and fish are oviparous. ",
        imageUrl:sorry},

        {title:"U",
        description:"Sorry! there is no information under this letter",
        imageUrl:sorry},

        {title:"Prey animal",
        description:"In nature, an animal that is eaten by another animal is called prey. An earthworm is the prey of a crow, a crow falls prey to a fox, and the fox is the prey of an eagle. Each animal has its own prey. ",
        imageUrl:sorry},

        {title:"Predator",
        description:"An animal that hunts and kills another animal to eat is called predator. But the predator may also become prey if its encounters another animal that's even stronger!",
        imageUrl:sorry},

        {title:"Q",
        description:"Sorry! there is no information under this letter",
        imageUrl:sorry},

        {title:"Repeoduction",
        description:"Animals make babies so that their species continues to exist: this is reproduction. When an animalis born, it develops. Then, when it grown up, it takes a turn reproducing-and so on!",
        imageUrl:sorry},

        {title:"Scavenger",
        description:"Scavengers are carnivores because they eat meat. But they don't hunt for this meat. They wait until other predators have done the work for them! They have to be content with the leftovers",
        imageUrl:sorry},

        {title:"T",
        description:"Sorry! there is no information under this letter",
        imageUrl:sorry},

        {title:"Vertebrate",
        description:"Animals are classified into two major groups: vertebrates and invertebrates. The vertebrats, like humans, have a skeleton-in other words, bones that provide support for their bodies. Invertebrates are all other animals, the ones that don't have skeletons.",
        imageUrl:sorry},

        {title:"Viviparous animal",
        description:"An animal is viviparous when it directly gives birth to its babies. The little ones develop inside the mother's tummy before entering the world. Mammals, some reptiles,and some fish are viviparous",
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
                        mainTitle="Animal"/>
    
    
        </div>
    )};

    export default ButtonAnimal;