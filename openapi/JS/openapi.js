//RESET HEADERS FOR TEMP

const maxHeader = document.getElementById('Header1');
const minHeader = document.getElementById('Header2');
maxHeader.style.display = "none"
minHeader.style.display = "none"

//EMPTY LISTS

const weeklyMaxs = document.getElementById('maxs-chances');
const weeklyMins = document.getElementById('mins');

//BUTTONS

const tempButton = document.getElementById('Temperature');
const precipButton = document.getElementById('Precipitation');

//GET + DISPLAY TEMP API DATA

tempButton.addEventListener('click', function() {
fetch('https://api.open-meteo.com/v1/forecast?latitude=41.85&longitude=-87.65&daily=temperature_2m_max,temperature_2m_min&models=gfs_seamless&current=temperature_2m&timezone=America%2FChicago&temperature_unit=fahrenheit')
.then(response => { 
    return response.json();
})
.then(data => {
    maxHeader.style.display = "inline-block"
    minHeader.style.display = "inline-block"
    weeklyMaxs.innerHTML = '';
    weeklyMins.innerHTML = '';
    for (let i = 0; i < data.daily.temperature_2m_max.length; i++) {
        const item = document.createElement('li');
        item.textContent = data.daily.temperature_2m_max[i] + '\u00B0F';
        item.style.display = 'inline-block';
        item.style.marginRight = '10px';
        weeklyMaxs.appendChild(item);
    }
    for (let i = 0; i < data.daily.temperature_2m_min.length; i++) {
        const item = document.createElement('li');
        item.textContent = data.daily.temperature_2m_min[i] + '\u00B0F';
        item.style.display = 'inline-block';
        item.style.marginRight = '10px';
        weeklyMins.appendChild(item);
    }
})
.catch(error => console.error('Weather fetch error:', error));
});

//GET + DISPLAY PRECIPITATION API DATA

precipButton.addEventListener('click', function() {
fetch('https://api.open-meteo.com/v1/forecast?latitude=41.85&longitude=-87.65&daily=precipitation_probability_max&models=gfs_seamless&timezone=America%2FChicago&temperature_unit=fahrenheit')
.then(response => { 
    return response.json();
})
.then(data => {
    maxHeader.style.display = "none"
    minHeader.style.display = "none"
    weeklyMaxs.innerHTML = '';
    weeklyMins.innerHTML = '';
    for (let i = 0; i < data.daily.precipitation_probability_max.length; i++) {
        const item = document.createElement('li');
        item.textContent = data.daily.precipitation_probability_max[i] + '%';
        item.style.display = 'inline-block';
        item.style.marginRight = '10px';
        weeklyMaxs.appendChild(item);
    }
})
.catch(error => console.error('Weather fetch error:', error));
});

//FOOTER

const newFooter = document.createElement('footer');
newFooter.className = 'footer';
newFooter.innerHTML = "<footer> <p></p> </footer>"

document.body.append(newFooter);

//Date + Copyright

const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector('footer');
const copyright = document.createElement('p');

//MAKE COPYRIGHT FOOTER

copyright.innerHTML = "Sydni Warren " + thisYear + " \u00A9"
newFooter.appendChild(copyright);