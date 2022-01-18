
let btn1 = document.querySelector('#btnTechUm');
let btn2 = document.querySelector('#btnTechDois');
let btn3 = document.querySelector('#btnTechTres');


let peUm = document.querySelector('.upper');
let peDois = document.querySelector('.tec--text');
let h1 = document.getElementById('vehicle')

let img = document.querySelector('#img');

btn1.addEventListener('click', ()=>{
    btn2.classList.remove('tec--active');
    btn3.classList.remove('tec--active');
    btn1.classList.add('tec--active');

    
    peDois.innerHTML = `A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a 
    payload from Earth's surface to space, usually to Earth orbit or beyond. Our 
    WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, 
    it's quite an awe-inspiring sight on the launch pad!`;
    h1.innerHTML = `launch vehicle`;

    img.setAttribute('src', '/starter-code/assets/technology/image-launch-vehicle-portrait.jpg')
    
})
btn2.addEventListener('click', ()=>{
    btn3.classList.remove('tec--active');
    btn1.classList.remove('tec--active');
    btn2.classList.add('tec--active');

    peDois.innerHTML = `A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, 
    by analogy to the seaport for ships or airport for aircraft. Based in the 
    famous Cape Canaveral, our spaceport is ideally situated to take advantage 
    of the Earth’s rotation for launch.`;
    h1.innerHTML = `Spaceport`;
    

    img.setAttribute('src', '/starter-code/assets/technology/image-spaceport-portrait.jpg')
})
btn3.addEventListener('click', ()=>{
    btn2.classList.remove('tec--active');
    btn1.classList.remove('tec--active');
    btn3.classList.add('tec--active');

    peDois.innerHTML = `A space capsule is an often-crewed spacecraft that uses a blunt-body reentry 
    capsule to reenter the Earth's atmosphere without wings. Our capsule is where 
    you'll spend your time during the flight. It includes a space gym, cinema, 
    and plenty of other activities to keep you entertained.`;
    h1.innerHTML = `Space capsule`;
    

    img.setAttribute('src', '/starter-code/assets/technology/image-space-capsule-portrait.jpg')
})