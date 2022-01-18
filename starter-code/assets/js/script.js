let btComander = document.getElementById('comander');
let btEnginer = document.getElementById('enginer');
let btPilot = document.getElementById('pilot');
let btSpecialist = document.getElementById('specialist');

let name = document.getElementById('name')
let title = document.getElementById('title')
let description = document.getElementById('description')
let img = document.getElementById('img');


btComander.addEventListener('click', ()=>{
    btEnginer.classList.remove('btn--active');
    btPilot.classList.remove('btn--active');
    btSpecialist.classList.remove('btn--active');
    btComander.classList.add('btn--active');

    name.innerHTML = 'Douglas Hurley';
    title.innerHTML = 'Commander';
    description.innerHTML = `Douglas Gerald Hurley is an American engineer, former Marine Corps pilot 
    and former NASA astronaut. He launched into space for the third time as 
    commander of Crew Dragon Demo-2.`;

    img.setAttribute('src', '/starter-code/assets/crew/image-douglas-hurley.png')

})
btEnginer.addEventListener('click', ()=>{
    btComander.classList.remove('btn--active');
    btPilot.classList.remove('btn--active');
    btSpecialist.classList.remove('btn--active');
    btEnginer.classList.add('btn--active');

    name.innerHTML = 'Anousheh Ansari';
    title.innerHTML = 'Flight Engineer';
    description.innerHTML = `Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. 
    Ansari was the fourth self-funded space tourist, the first self-funded woman to 
    fly to the ISS, and the first Iranian in space.`;

    img.setAttribute('src', '/starter-code/assets/crew/image-anousheh-ansari.png')

})
btPilot.addEventListener('click', ()=>{
    btComander.classList.remove('btn--active');
    btEnginer.classList.remove('btn--active');
    btSpecialist.classList.remove('btn--active');
    btPilot.classList.add('btn--active');

    name.innerHTML = 'Victor Glover';
    title.innerHTML = 'Pilot';
    description.innerHTML = `Pilot on the first operational flight of the SpaceX Crew Dragon to the 
    International Space Station. Glover is a commander in the U.S. Navy where 
    he pilots an F/A-18.He was a crew member of Expedition 64, and served as a 
    station systems flight engineer.`;

    img.setAttribute('src', '/starter-code/assets/crew/image-victor-glover.png')

})
btSpecialist.addEventListener('click', ()=>{
    btComander.classList.remove('btn--active');
    btEnginer.classList.remove('btn--active');
    btPilot.classList.remove('btn--active');
    btSpecialist.classList.add('btn--active');


    name.innerHTML = 'Mark Shuttleworth';
    title.innerHTML = 'Mission Specialist';
    description.innerHTML = `Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind 
    the Linux-based Ubuntu operating system. Shuttleworth became the first South 
    African to travel to space as a space tourist.`;

    img.setAttribute('src', '/starter-code/assets/crew/image-mark-shuttleworth.png')

})



