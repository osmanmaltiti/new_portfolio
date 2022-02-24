const data = {
    name: '',
    email: '',
    message: ''
};

const getHTML = {
    name: document.getElementById('name').addEventListener('change', (e) => data.name = e.target.value),
    email: document.getElementById('email').addEventListener('change', (e) => data.email = e.target.value),
    message: document.getElementById('message').addEventListener('change', (e) => data.message = e.target.value),
    send: document.getElementById('send').addEventListener('click', (e) => {
        e.preventDefault();
        console.log(data);
    }),
    projects: document.getElementById('projects')
};

const { projects } = getHTML;
console.log(getHTML.projects)