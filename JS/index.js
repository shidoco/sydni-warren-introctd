//Footer

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
};

