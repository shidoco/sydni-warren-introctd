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

techSkills = ["Javascript", "HTML", "CSS", "Adobe Photoshop", "Git/Github"]

skillsSection = document.getElementById('Skills');

skillsList = skillsSection.querySelector('ul');

for (i = 0; i < techSkills.length; i++) {
    skill = document.createElement('ul');
    skill.innerHTML = techSkills[i];
    skillsList.appendChild(skill);
};

