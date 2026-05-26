//Footer

const { createElement } = require("react");

const newFooter = document.createElement('footer');
newFooter.className = 'footer';
newFooter.innerHTML = "<footer> <p></p> </footer>"

document.body.append(newFooter);

//Date + Copyright
const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector('footer');
const copyright = document.createElement('p');

copyright.innerHTML = "Sydni Warren " + thisYear + " \u00A9"
newFooter.appendChild(copyright);

// Skills

const techSkills = ["Javascript", "HTML", "CSS", "Adobe Photoshop", "Git/Github"]

const skillsSection = document.getElementById('Skills');

const skillsList = skillsSection.querySelector('ul');

for (let i = 0; i < techSkills.length; i++) {
    const skill = document.createElement('li');
    skill.innerHTML = techSkills[i];
    skillsList.appendChild(skill);
}
 
const messageForm = document.querySelector('form[name="leave_message"]');

messageForm.addEventListener('submit', (event) => {
    event.preventDefault();
    let inputName = event.target.usersName.value;
    let inputEmail = event.target.usersEmail.value;
    let inputMessage = event.target.usersMessage.value;
    console.log(inputName, inputEmail, inputMessage);
    const messageSection = document.getElementById('messages')
    const messageList = messageSection.querySelector('ul')
    const newMessage = document.createElement('li')
    newMessage.innerHTML = "<a href='mailto:${inputEmail}'>${inputName}</a> <span>${inputMessage}</span>"
    const removeButton = document.createElement('button');
    removeButton.textContent = 'remove';
    removeButton.type = 'button'
    removeButton.addEventListener('click', () => {
        const entry = removeButton.parentNode;
        entry.remove();
    })
    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);
    event.target.reset();
});
