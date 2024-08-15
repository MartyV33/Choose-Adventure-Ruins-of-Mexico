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
        description: "As you appraoch the Altar of Coatepex, The light on the top shines gold with a large gem sitting in middle for grabs! CONGRATS YOU WIN!",
        choices: [
            {text: "Run to the entrence!", nextScene: "start"}
        ],
        art:"https://raw.githubusercontent.com/MartyV33/Choose-Adventure-Ruins-of-Mexico/main/1000_F_530809962_N7vprTapt58qKrY9eb4UTHgTgr8kvK15.jpg"
    }

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
