const data = {
    user_name: '',
    user_email: '',
    message: ''
};
const project = [
    {
        name: 'Zozys'
    },
    {
        name: 'Quil'
    },
    {
        name: 'ImageSlider'
    },
    {
        name: 'IotControl'
    },
    {
        name: 'Malfolio'
    }
];
let state = false;
const getHTML = {
    name: document.getElementById('name').addEventListener('change', (e)=>data.user_name = e.target.value
    ),
    email: document.getElementById('email').addEventListener('change', (e)=>data.user_email = e.target.value
    ),
    message: document.getElementById('message').addEventListener('change', (e)=>data.message = e.target.value
    ),
    send: document.getElementById('send').addEventListener('click', (e)=>{
        e.preventDefault();
        emailjs.init("user_1HKhtSNRkpv8KCKZ897VC");
        emailjs.send('service_ov4t30n', 'template_keekrvx', data, 'user_1HKhtSNRkpv8KCKZ897VC').then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
        }, function(error) {
            console.log('FAILED...', error);
        });
        getHTML.name.value = '';
        getHTML.email.value = '';
        getHTML.message.value = '';
    }),
    openResume: document.getElementById('open').addEventListener('click', ()=>{
        let open = document.getElementById('resume');
        open.setAttribute('class', 'fixed top-0 w-screen h-screen flex flex-col justify-center');
    }),
    closeResume: document.getElementById('close').addEventListener('click', ()=>{
        let close = document.getElementById('resume');
        close.setAttribute('class', 'hidden');
    }),
    toggleTheme: document.getElementById('toggle').addEventListener('click', ()=>{
        state = !state;
        console.log(state);
        if (state == true) {
            const elements = [
                'main',
                'navbar',
                'projects',
                'contact',
                'form'
            ];
            const buttons = [
                'open',
                'send'
            ];
            elements.forEach((item)=>{
                if (item === 'main' || item === 'form') document.getElementById(item).setAttribute('style', 'color: black; background-color: #d7d7d7;');
                else document.getElementById(item).setAttribute('style', 'background-color: #b1b1b1');
            });
            project.forEach((item)=>{
                document.getElementById(item.name).setAttribute('style', 'background-color: #d7d7d7');
            });
            document.querySelectorAll('#button').forEach((item)=>item.setAttribute('style', 'color: white; border-color: black')
            );
            buttons.forEach((item)=>{
                document.getElementById(item).setAttribute('style', 'color: white; border-color: black');
            });
            document.getElementById('logo').setAttribute('style', 'fill: black');
        } else {
            const elements = [
                'main',
                'navbar',
                'projects',
                'contact',
                'form'
            ];
            const buttons = [
                'open',
                'send'
            ];
            elements.forEach((item)=>document.getElementById(item).removeAttribute('style')
            );
            project.forEach((item)=>{
                document.getElementById(item.name).removeAttribute('style', 'background-color: #d7d7d7');
            });
            document.querySelectorAll('#button').forEach((item)=>item.removeAttribute('style', 'color: white; border-color: black')
            );
            buttons.forEach((item)=>{
                document.getElementById(item).removeAttribute('style', 'color: white; border-color: black');
            });
            document.getElementById('logo').setAttribute('style', 'fill: white');
        }
    })
};

//# sourceMappingURL=index.579125c3.js.map
