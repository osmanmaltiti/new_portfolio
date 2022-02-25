const data = {
    user_name: '',
    user_email: '',
    message: ''
};
const project = [
    {
        name: 'Zozys',
        desc: `Zozys is a web app i built for my Father's sawmill company. 
               It's basically and e-commerce app where clients can buy raw and processed wood, doors, bed frames among others and also place custom orders. 
               It's soon go into production. Its is responsive and renders good on all devices. 
               The frontend was built with React, Tailwind and Redux, Node/ExpressJS and JWT for the backend and MongoDB for the database.`,
        stack: ['ReactJS', 'Redux', 'Tailwind', 'ExpressJS', 'MongoDB', 'JWT'],
        snapshot: './assets/images/zozys.png',
        demo: '#',
        repo: 'https://github.com/osmanmaltiti/project-zero.git',
    },
    {
        name: 'Quil',
        desc: `Quil is a twitter inspired web app. 
               It is the first major app i built with React.
               I didn't know much about media queries.
               As a result it does render well on small screens.
               But fixing that won't be an issue and I intend to make time for that. 
               The frontend was built with React, Redux and SASS,
               The backend was built mainly with Express and MongoDB and Firebase for Cloud Storage and Authentication`,
        stack: ['React', 'Redux', 'SASS', 'ExpressJS', 'MongoDB', 'Firebase'],
        snapshot: './assets/images/quil.png',
        demo: '#',
        repo: 'https://github.com/osmanmaltiti/project-one.git',
    },
    {
        name: 'ImageSlider',
        desc: `This is a mini image carousel I built with React and Tailwind. It is a responsive component that can be used in any project. HTML version of this Component is also available in my repos`,
        stack: ['ReactJS', 'Tailwind'],
        snapshot: './assets/images/spiderman-avi.jpg',
        demo: '#',
        repo: '#',
    },
    {
        name: 'IotControl',
        desc: `This android app was built to contol and monitor the interior conditions of an egg incubator.
               The app interacted with a nodeMCU which read instructions and fed data to the firebase RTDB. 
               It was built with Flutter as the frontend and Firebase as the backend.`,
        stack: ['Flutter', 'Firebase'],
        snapshot: './assets/images/iotControl.png',
        demo: '#',
        repo: 'https://github.com/osmanmaltiti/iotcontrol_flutterApp.git',
    },
    {
        name: 'Malfolio',
        desc: `This is the first version of my portfolio app. 
               It was built with GastbyJS and styled with the SASS preprocessor and finally hosted on Gatsby Cloud.
               It is responsive and renders decently on all devices.
               For this current version, I decided to develop the portfolio app without any javascript libraries.`,
        stack: ['GatsbyJS', 'SASS'],
        snapshot: './assets/images/portfolio.png',
        demo: '#',
        repo: 'https://github.com/osmanmaltiti/project_portfolio.git',
    }
];
const getHTML = {
    name: document.getElementById('name').addEventListener('change', (e) => data.user_name = e.target.value),
    email: document.getElementById('email').addEventListener('change', (e) => data.user_email = e.target.value),
    message: document.getElementById('message').addEventListener('change', (e) => data.message = e.target.value),
    send: document.getElementById('send').addEventListener('click', (e) => {
            e.preventDefault()
            emailjs.init("user_1HKhtSNRkpv8KCKZ897VC");
            emailjs.send('service_ov4t30n', 'template_keekrvx', data, 'user_1HKhtSNRkpv8KCKZ897VC')
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
            }, function(error) {
                console.log('FAILED...', error);
            });
            getHTML.name.value = '';
            getHTML.email.value = '';
            getHTML.message.value = '';
        }),
    projects: document.getElementById('project-map'),
    openResume: document.getElementById('open').addEventListener('click', () => {
        let open = document.getElementById('resume');
        open.setAttribute('class', 'fixed top-0 w-screen h-screen flex flex-col justify-center')
    }),
    closeResume: document.getElementById('close').addEventListener('click', () => {
        let close = document.getElementById('resume');
        close.setAttribute('class', 'hidden')
    })
};

const { projects } = getHTML;


projects.innerHTML = project.flatMap(item => 
            `<div id=${item.name} class=" bg-medium p-4 flex flex-col md:grid md:grid-cols-2 w-full md:justify-self-center md:place-self-center md:rounded-md">
                <span class="w-full">
                    <h2 class="text-xl font-semibold text-red-400">${item.name}</h2>
                    <h3 class="my-2 text-base text-black w-fit px-2 bg-red-200 font-bold">Description</h3>
                    <p>${item.desc}</p>
                    <h3 class="my-2 text-base text-black w-fit px-2 bg-red-200 font-bold">Stack used</h3>
                    <ul class="grid grid-cols-4 md:flex w-full md:flex-row  gap-2">
                        ${ item.stack.map(item => item !== ',' ? `<li>${item}</li>`: null) }
                    </ul>
                    <span class="flex flex-row w-full justify-evenly md:justify-start md:gap-4 my-4">
                        <a href=${item.demo} class="bg-red-500 py-2 font-bold px-4 rounded border-2 border-white">Live Demo</a>
                        <a href=${item.repo} class="bg-black py-2 px-4 font-bold rounded border-2 border-white">Go To Repo</a>
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