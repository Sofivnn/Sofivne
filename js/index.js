window.onload = () => {
    const transition_el = document.querySelector('.transition');
    const anchors = document.querySelectorAll('a');

    setTimeout(() => {
        transition_el.classList.remove('is-active')
    }, 500);

    for (let index = 0; index < anchors.length; index++) {
        const element = anchors[index];

        element.addEventListener('click', (e) => {
            e.preventDefault();
            let targ = e.target.href;
            console.log(targ)

            transition_el.classList.add('is-active');

            setInterval(() => {
                window.location.href = targ;
            }, 500);
        })



    }
}



let back_btn = document.querySelector('.btn_back');

back_btn.addEventListener('click', function () {
    window.history.back();
})



/************************************************************/

let projects = [

    {
        "id": 1,
        "name": "Cinéphile",
        "brand":"fas fa-film",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam dignissimos dolores suscipit.",
        "languages": "ReactJS API SCSS"
    },
    {
        "id": 2,
        "name": "EDT_bot",
        "brand":"fab fa-discord",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam dignissimos dolores suscipit.",
        "languages": "ReactJS API SCSS"
    },
    {
        "id": 3,
        "name": "DiskAnalyzer",
        "brand":"fa-solid fa-hard-drive",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam dignissimos dolores suscipit.",
        "languages": "ReactJS API SCSS"
    },
    {
        "id": 4,
        "name": "SeleniumAut.",
        "brand":"fa-sharp fa-solid fa-table-list",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam dignissimos dolores suscipit.",
        "languages": "ReactJS API SCSS"
    },
    {
        "id": 5,
        "name": "Cryptonite.",
        "brand":"fa-brands fa-bitcoin",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam dignissimos dolores suscipit.",
        "languages": "ReactJS API SCSS"
    },
    {
        "id": 6,
        "brand":"fa-solid fa-bell",
        "name": "ENTNotifier.",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam dignissimos dolores suscipit.",
        "languages": "ReactJS API SCSS"
    },
    
]

console.log(projects);

function Projects_Display() {
    for (let i = 0; i < projects.length; i++) {
        const element = projects[i];
        const card = document.createElement('div');
        const container = document.querySelector('.list_projects').appendChild(card);
        card.classList.add('card');
        card.innerHTML =
            ` 
        <div class="top">
            <i class="${element.brand}"></i>
            <h2>${element.name}</h2>
        </div>
        <div class="middle">
            <p>${element.description}</p>
        </div>
        <div class="bottom">
            <span>${element.languages}</span>

        </div>
              `
    }
}


Projects_Display();