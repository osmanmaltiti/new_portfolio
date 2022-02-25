const data = {
    name: '',
    email: '',
    message: ''
};
const project = [
    {
        name: 'Zozys',
        desc: 'Dolore deserunt occaecat anim et commodo sint magna commodo sit Lorem reprehenderit eiusmod non.',
        stack: ['ReactJS', 'Redux', 'ExpressJS'],
        snapshot: './assets/images/kellen-riggin-R1NJgMKPj7Q-unsplash.jpg',
        demo: '#',
        repo: '#',
    },
    {
        name: 'Quil',
        desc: 'Elit ea anim irure officia fugiat excepteur cillum incididunt commodo aliqua proident do. Irure sunt laboris laboris cupidatat duis ea commodo et nostrud pariatur tempor ipsum minim deserunt. Veniam sint consequat ipsum enim.',
        stack: ['HTML', 'CSS', 'Javascript'],
        snapshot: './assets/images/kellen-riggin-Nh5MCtx58jo-unsplash.jpg',
        demo: '#',
        repo: '#',
    },
    {
        name: 'ImageSlider',
        desc: 'Consequat velit excepteur incididunt deserunt. Laboris laborum id aliquip consequat reprehenderit est consequat veniam. Laboris excepteur velit in sunt elit do sunt minim officia. Excepteur deserunt ex velit Lorem mollit nisi irure sit. Est pariatur eu duis velit aliqua Lorem laborum tempor irure dolore. Officia elit aliqua aliquip ad nisi minim tempor ad voluptate in non labore adipisicing. Cillum ex do amet non Lorem officia exercitation esse elit ullamco aute pariatur.',
        stack: ['GatsbyJS', 'CSS', 'Redux'],
        snapshot: './assets/images/spiderman-avi.jpg',
        demo: '#',
        repo: '#',
    }
];
const getHTML = {
    name: document.getElementById('name').addEventListener('change', (e) => data.name = e.target.value),
    email: document.getElementById('email').addEventListener('change', (e) => data.email = e.target.value),
    message: document.getElementById('message').addEventListener('change', (e) => data.message = e.target.value),
    send: document.getElementById('send').addEventListener('click', (e) => {
        e.preventDefault();
        console.log(data);
    }),
    projects: document.getElementById('project-map')
};

const { projects } = getHTML;


projects.innerHTML = project.flatMap(item => 
            `<div id=${item.name} class=" bg-medium p-4 flex flex-col md:grid md:grid-cols-2 w-full md:justify-self-center md:place-self-center md:rounded-md">
                <span>
                    <h2 class="text-xl font-semibold text-red-400">${item.name}</h2>
                    <h3 class="my-2 text-base text-black w-fit px-2 bg-red-200 font-bold">Description</h3>
                    <p>${item.desc}</p>
                    <h3 class="my-2 text-base text-black w-fit px-2 bg-red-200 font-bold">Stack used</h3>
                    <ul class="flex flex-row gap-2">
                        ${ item.stack.map(item => `<li>${item}</li>`) }
                    </ul>
                    <span class="flex flex-row w-full justify-evenly md:justify-start md:gap-4 my-4">
                        <a href=${item.demo} class="bg-red-500 py-2 px-8 rounded border-2 border-white">Live Demo</a>
                        <a href=${item.repo} class="bg-black py-2 px-8 rounded border-2 border-white">Go To Repo</a>
                    </span>
                </span>
            </div>`)

project.forEach((item) => {
    let img = new Image();
    let url = item.snapshot;
    let container = document.getElementById(item.name);
    
    img.onload = () => container.appendChild(img);
    img.src = url
    img.setAttribute('class', 'md:w-1/2 rounded-lg md:justify-self-end md:place-self-center')
});