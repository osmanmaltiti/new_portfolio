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
        demo: 'https://quil-overhaul.netlify.app',
        repo: 'https://github.com/osmanmaltiti/project-one.git',
    },
    {
        name: 'ImageSlider',
        desc: `This is a mini image carousel I built with React and Tailwind. It is a responsive component that can be used in any project. HTML version of this Component is also available in my repos`,
        stack: ['ReactJS', 'Tailwind'],
        snapshot: './assets/images/imageSlider.png',
        demo: '#',
        repo: 'https://github.com/osmanmaltiti/react-image-slider.git',
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
        demo: 'https://malfolio.gatsby.io',
        repo: 'https://github.com/osmanmaltiti/project_portfolio.git',
    }
];
let state = false;
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
    }),
    toggleTheme: document.getElementById('toggle').addEventListener('click', () => {
        state = !state;
        console.log(state)
        if(state == true){
            const elements = ['main', 'navbar', 'projects', 'contact', 'form'];
            const buttons = ['open', 'send'];

            elements.forEach(item => {
                if(item === 'main' || item === 'form'){
                    document.getElementById(item)
                        .setAttribute('style', 'color: black; background-color: #d7d7d7; font-weight: bold');
                } else {
                    document.getElementById(item)
                        .setAttribute('style', 'background-color: #b1b1b1');
                }
            });
            project.forEach(item => {
                document.getElementById(item.name)
                    .setAttribute('style', 'background-color: #d7d7d7');
            });
            document.querySelectorAll('#button')
                    .forEach(item => item.setAttribute('style', 'color: white; border-color: black'));
            buttons.forEach(item => {
                document.getElementById(item).setAttribute('style', 'color: white; border-color: black')
            });
            document.getElementById('logo').setAttribute('style', 'fill: black');
                     
        } else {
            const elements = ['main', 'navbar', 'projects', 'contact', 'form'];
            const buttons = ['open', 'send'];
            elements.forEach(item => document.getElementById(item).removeAttribute('style'));
            project.forEach(item => {
                document.getElementById(item.name)
                    .removeAttribute('style', 'background-color: #d7d7d7');
            });
            document.querySelectorAll('#button')
                    .forEach(item => item.removeAttribute('style', 'color: white; border-color: black'));
            buttons.forEach(item => {
                document.getElementById(item).removeAttribute('style', 'color: white; border-color: black')
            });
            document.getElementById('logo').setAttribute('style', 'fill: white');
        }
    })
};

const { projects } = getHTML;


projects.innerHTML = project.map(item => 
            `<div id=${item.name} class=" bg-medium p-4 flex flex-col md:grid md:grid-cols-2 w-full md:justify-self-center md:place-self-center md:rounded-md">
                <span class="w-full">
                    <h2 class="text-xl font-semibold text-red-500">${item.name}</h2>
                    <h3 class="my-2 text-base text-black w-fit px-2 bg-red-200 font-bold">Description</h3>
                    <p>${item.desc}</p>
                    <h3 class="my-2 text-base text-black w-fit px-2 bg-red-300 font-bold">Stack used</h3>
                    <ul class="grid grid-cols-4 md:flex w-full md:flex-row  gap-2">
                        ${ item.stack.map(item => `<li>${item}</li>`).join(' ') }
                    </ul>
                    <span class="flex flex-row w-full justify-evenly md:justify-start md:gap-4 my-4">
                        <a href=${item.demo} id='button' class="bg-red-600 shadow-light shadow py-2 font-bold px-4 rounded">Live Demo</a>
                        <a href=${item.repo} id='button' class="bg-black py-2 px-4 shadow-light shadow font-bold rounded">Go To Repo</a>
                    </span>
                </span>
            </div>`).join(' ')

project.forEach((item) => {
    let img = new Image();
    let url = item.snapshot;
    let container = document.getElementById(item.name);
    
    img.onload = () => container.appendChild(img);
    img.src = url
    img.setAttribute('class', 'md:w-1/2 rounded-lg md:justify-self-end md:place-self-center shadow')
});