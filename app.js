/*-------------- Constants -------------*/
const scenes = [
    {
        id: "start",
        description: "Deep in the mountains of ancient Mexico, you discover a large archway adorned with ancient symbols. Your mission is to find the Altar of Coatepex hidden within these ruins. Once accompanied by a team, you now venture alone, as they were lost to the spirits haunting this range... Instructions: Traverse through the Ancient Temple of Mexico, making choices on which path to take, and properly find the treasured Altar on the final decision!",
        choices: [
            { text: "Observe the Area", nextScene: "look_around"},
            { text: "Investigate the Symbols", nextScene: "investigate_symbols" },
            {text: "Venture the Ruins", nextScene: "ancient_tunnel"}
        ],
        art: "https://i.pinimg.com/originals/49/32/ea/4932ea1ede694b11c5d2d6ab401e45a0.jpg"
    },
    {
        id: "ancient_tunnel",
        description: "You venture forth into an ancient tunnel, the air growing colder with each step. Dim light shinning in from the cracks in the walls. The farther in you get, you notice the wind howling from deeper within.",
        choices: [
            { text: "Continue Forward", nextScene: "ancient_door" },
            { text: "Turn back", nextScene: "start"}
        ],
        art: "https://img1.cgtrader.com/items/2839955/f53d3423f4/large/tunnel-ruins-scene-3d-model-obj-fbx-stl-blend-dae.jpg"
    },
    {
        id: "investigate_symbols",
        description: "As you investigate the archway closer, you notice the symbols upon it in a syconized pattern. A Chained Cross, an X, and a Sun.",
        choices: [
            { text: "Move on", nextScene: "start" }
        ],
        art: "https://st.depositphotos.com/1734628/2125/i/950/depositphotos_21252477-stock-photo-ancient-mexican-designs-and-symbols.jpg"
    },
    {
        id: "look_around",
        description: "You look around the area, noticing the remains of what was once a bustling city.",
        choices: [
            { text:"Look over the edge", nextScene:"Fall_off" },
            { text:"Return to Archway", nextScene: "start" }
        ],
        art: "https://s3-cdn.designerjourneys.com/blog/wp-content/uploads/2019/09/matthew-essman-Kswnnx95_YU-unsplash-1024x681.jpg"
    },
    {

        id: "Fall_off",
        description: "YOU FALL OFF THE EDGE AND DIE!",
        choices: [
            {text: "Return to start", nextScene: "start"}
        ],
        art: "https://raw.githubusercontent.com/MartyV33/Choose-Adventure-Ruins-of-Mexico/main/istockphoto-537691532-612x612.jpg"
    },
    {
        id: "ancient_door",
        description: "As you venture down the tunnel, you approach an ancient door. Upon the door lies symbols which look as though can be rotated. Between a set of three, it seems as if you could turn them in a pattern. No other handle or opening can be seen.",
        choices: [
            {text:"A Sun, Chained Cross, an X", nextScene:"Death"},
            {text:"An X, A sun, Chained Cross", nextScene:"escape"},
            {text:"Chained Cross, an X, A Sun", nextScene:"altar_room"}
        ],
        art:"https://th.bing.com/th/id/OIP.nc75146zhawseEiO4XLBVgHaEP?rs=1&pid=ImgDetMain"
    },
    {
        id: "Death",
        description: "As you turn the symbols in a Sun, Cross, X pattern, the mouth in the center of the door opens wide! A light shining bright as a fireball spits out right at you! DEATH!",
        choices: [
            {text:"You died... Restart?", nextScene: "start"}
        ],
        art:"https://t4.ftcdn.net/jpg/02/30/96/13/360_F_230961305_nJHsuZUSfJgqj6FLXQeyJfadk2PfyTmb.jpg"
    },
    {
        id:"escape",
        description: "Turning the symbols in the X, Sun, and Cross pattern. You see the eyes start to glow on the door, a beam shines towards the exit. As if they are telling me to leave peacfully?",
        choices: [
            {text: "follow the light to the exit?", nextScene:"ancient_tunnel"}
        ],
        art:"https://raw.githubusercontent.com/MartyV33/Choose-Adventure-Ruins-of-Mexico/main/1000_F_319123075_yqDQGeMObfla1X8umu83M2FXrjoC2q8q.jpg"
    },
    {
        id:"altar_room",
        description: "Turning in the Cross, X, and Sun pattern. The symbols sink in, as the door reveals a large altar standing above a set of stairs. Light shinning in on the altar itself.",
        choices: [
            {text: "Approach the altar", nextScene:"altar"}
        ],
        art:"https://i.pinimg.com/736x/a3/d4/ae/a3d4aefed753528194e3e7e716403631.jpg"
    },
    {
        id:"altar",
        description: "As you appraoch the Altar of Coatepex, The light on the top shines gold with a large gem sitting in middle for grabs! CONGRATS YOU WIN! Or so you thought...",
        choices: [
            {text: "Run to the entrence!", nextScene: "start"},
            {text: "Search for Hidden Rooms", nextScene: "hidden_room_1"}
        ],
        art:"https://raw.githubusercontent.com/MartyV33/Choose-Adventure-Ruins-of-Mexico/main/1000_F_530809962_N7vprTapt58qKrY9eb4UTHgTgr8kvK15.jpg"
    },
        {
        id:"hidden_room_1",
        description: "After reaching the final Altar, You look around to see a hidden crevas in the wall, narrow enough to squeese through. Inside you find a hidden room. Dark, Dusty, and Dirty.",
        choices: [
            {text: "Read the scripture on the wall", nextScene: "Wall_Scripture"},
            {text: " Scream, 'WHY ME?!?' and punch the wall", nextScene: "hole_in_wall"},
            {text: " Try and find your way back", nextScene: "altar_room"}
        ],
        art: "https://t4.ftcdn.net/jpg/06/78/05/13/360_F_678051375_1XW505XnOdq6i1cluzeupVsAPx8qioZo.jpg" // put a dark hidden cave room image.
    },
    {
        id:"Wall_Scripture",
        description: "Reading the scripture, you cant identify what all of it said. However you did manage to gather this, ' With all that remains of this deep cavern, none shall be saved unless proven worthy!'",
        choices: [
            {text: "Read Aloud", nextScene: "Wall_scripture_fight"},
            {text: "Read Quietly", nextScene: "Wall_Scripture_death"},
            {text: "Don't Read", nextScene: "altar"}
        ],
        art:"https://images.nightcafe.studio/jobs/hMkO7DXeVjJmHKLfsSnH/hMkO7DXeVjJmHKLfsSnH--1--s59d2.jpg?tr=w-1600,c-at_max" // put a picutre of a wall scripture on a cave wall.
    },
    {
        id: "hole_in_wall",
        description: " After crying out,'WHY ME?!?' you strike the wall with full aggression. As the hole quickly sucks in all the dust and air like a vaccume taking the breath right out of you. It opens up to a compacted room filled with giant sculptures in forms of different creatures all circled around the center...",
        choices: [
            {text: "Search the room", nextScene: "hidden_gem"},
            {text: "Observe the Sculptures", nextScene: "sculptures"},
            {text: "Try and destroy sculptures", nextScene: "broken_down_sculptures"}
        ],
        art: "https://3.bp.blogspot.com/_G96gxvrHqrE/SmUB4j5JmBI/AAAAAAAAHFw/FJAnxi_doO8/s400/RyanChurchArtTombOfthePrimes.jpg" // put a pic of a hole in a cave wall, Egypt ("ALIENS did that, yup") hole in wall.
    },
    {
        id:"Wall_scripture_fight",
        description: "With nowhere left to run, You take a good look around and notice the room start to fill with strange 4 legged creatures. Defenseless with no weapons, whats your first choice?",
        choices: [
            {text:"Find a weapon nearby and give it your all?", nextScene:"fight_death"},
            {text:"Let the creatures come to you", nextScene: "fight_nutural"},
            {text:"Try and run", nextScene: "fight_win"}
        ],
        art: "https://tombraiderhorizons.com/wp-content/uploads/2017/01/tomb-raider-underworld-naga.jpg?w=560" // put a pic of a fight inside of a cavern.
    },
    {
        id: "Wall_Scripture_death",
        description: "After reading the scripture quietly, you finish and stand quietly still awaiting a response. You look up and notice a giant concrete ball sitting right above you. As you go to step away... the ground beneath your feet feel a preasure plate release from the ground... And it drops... ",
        choices: [
            {text:"You died... Damn", nextScene: "start"}
        ],
        art: "https://i.redd.it/86cm1hd0d0wa1.jpg"
    },
    {
        id: "hidden_gem",
        description: "Aproaching the center of the giant sculptures, you notice a mound of sand in the hands of one of the sculptures. Drifting the sand away carefully, you notice a sparkling gem sitting right in middle of the large hand! Looks to be quite the discovery!",
        choices: [
            {text: "keep searching the tomb", nextScene:"hole_in_wall"}
        ],
        art: "https://img.freepik.com/premium-photo/gem-sits-cave-with-word-gems-it_363412-432.jpg"
    },
    {
        id:"sculptures",
        description: "After observing the sculptures for quite some time, you notice how they're standing in a formation which seems to be pointing a certain way?",
        choices: [
            {text:"Follow pointed direction", nextScene:"hidden_room_2"},
            {text:"leave the hidden tomb back to the main ruins", nextScene:"hidden_room_1"}
        ],
        art: "https://static.wikia.nocookie.net/transformers/images/4/4a/Rotf-tomboftheprimes-film-entrance.jpg/revision/latest?cb=20091207222607"
    },
    {
        id:"broken_down_sculptures",
        description: "After observing the ancient statues for quite some time, something inside of you told you to start destroying the statues? They start to crumble down easier than you expected? They crumble down as well as any treasure taken or located in this room!",
        choices: [
            {text: "leave the room empty handed", nextScene: "hidden_room_1"}
        ],
        art:"https://t4.ftcdn.net/jpg/04/20/93/65/360_F_420936591_474BVzxhwjGBObbbZvrnuonfWXQBQOML.jpg"
    },

];

/*---------- Variables (state) ---------*/
let currentScene = 'start';
let playerChoices;

/*----- Cached Element References  -----*/
const startButton = document.getElementById('start-button');
const startGameButton = document.getElementById('start-game-button');
const choiceButtons = document.querySelectorAll('.choice-button');
const storyText = document.getElementById('story-text');
const artImage = document.getElementById('art-image');
const initialBackground = document.getElementById('initial-background');
const storySection = document.getElementById('story-section');
const choicesSection = document.getElementById('choices-section');
const choicesContainer = document.getElementById('choices-container');
const gameTitle = document.getElementById('game-title');
const backgroundImage = document.getElementById('background-image');
const instructions = document.getElementById('instructions');

/*-------------- Functions -------------*/
function initialize() {
    currentScene = "start";
    playerChoices = [];
    initialBackground.style.display = 'none';
    storySection.style.display = 'block';
    choicesSection.style.display = 'block';
    displayScene(currentScene);
    addEventListeners();
    render();
}

function render() {
    displayScene(currentScene)
}

function displayScene(sceneId) {
    const scene = scenes.find(s => s.id === sceneId);
    if (!scene) {
        console.error(`Scene with ID "${sceneId}" not found.`);
        return;
    }
    storyText.textContent = scene.description;
    artImage.src = scene.art;
    artImage.alt = `Image for ${sceneId}`;
    artImage.style.display = 'block';
    choicesContainer.innerHTML = '';
    scene.choices.forEach(choice => {
        const button = document.createElement('button');
        button.textContent = choice.text;
        button.classList.add('choice-button');
        button.onclick = () => displayScene(choice.nextScene);
        choicesContainer.appendChild(button);
    });
    storySection.style.display = 'block';
    choicesSection.style.display = 'block';
    initialBackground.style.display = 'none';
    gameTitle.style.display = 'none';

    if (sceneId === 'Fall_off') {
        storySection.classList.add('special-layout');
    } else {
        storySection.classList.remove('special-layout');
    }
}


function handleChoice(nextScene) {
    currentScene = nextScene;
    displayScene(currentScene);
    render();
}

function addEventListeners() {
    choiceButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            handleChoice(e.target.dataset.nextScene);
        })
    })
}
/*----------- Event Listeners ----------*/
startButton.addEventListener('click', () => displayScene('start'));
startButton.addEventListener('click', initialize);
startGameButton.addEventListener('click', () => {
    instructions.style.display = 'none';
    displayScene('start');
});
startButton.addEventListener('click', () => {
    instructions.style.display = 'block';
    initialBackground.style.display = 'none';
    gameTitle.style.display = 'none';
});
