const html = document.querySelector('html');
const translateElements = document.querySelectorAll('[data-ca]');
let currentLang = 'ca'; 

function changeToSpanish() {
    html.setAttribute('lang', 'es');
    html.setAttribute('data-lang', 'spanish');

    translateElements.forEach(element => {
        element.textContent = element.getAttribute('data-es');
    });
}

function changeToEnglish() {
    html.setAttribute('lang', 'en');
    html.setAttribute('data-lang', 'english');

    translateElements.forEach(element => {
        element.textContent = element.getAttribute('data-en');
    });
}

function changeToCatalan() {
    html.setAttribute('lang', 'ca');
    html.setAttribute('data-lang', 'catalan');

    translateElements.forEach(element => {
        element.textContent = element.getAttribute('data-ca');
    });
}

let flag = document.querySelector('#flag-icon');

function toggleLanguage() {
    event.preventDefault();
    if (currentLang === 'en') {
        changeToSpanish();
        flag.classList.remove('fi-gb');
        flag.classList.add('fi-es');
        currentLang = 'es';
    } else if (currentLang === 'es') {
        changeToCatalan();
        flag.classList.remove('fi-es');
        flag.classList.add('fi-es-ct');
        currentLang = 'ca';
    } else {
        changeToEnglish();
        flag.classList.remove('fi-es-ct');
        flag.classList.add('fi-gb');
        currentLang = 'en';
    }

    localStorage.setItem('language', currentLang);
    localStorage.setItem('flag', flag.classList.value);
}

const storedLanguage = localStorage.getItem('language');

// Establecer el idioma en función del valor almacenado
if (storedLanguage === 'es') {
    changeToSpanish();
    flag.classList.remove('fi-gb', 'fi-es-ct');
    flag.classList.add('fi-es');
    currentLang = 'es';
} else if (storedLanguage === 'ca') {
    changeToCatalan();
    flag.classList.remove('fi-gb', 'fi-es');
    flag.classList.add('fi-es-ct');
    currentLang = 'ca';
} else {
    changeToEnglish();
    flag.classList.remove('fi-es', 'fi-es-ct');
    flag.classList.add('fi-gb');
    currentLang = 'en';
}


let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');
let language = document.querySelector('.language');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
}

language.onclick = () => {
    toggleLanguage();
}

const sr = ScrollReveal({
    distance: '65px',
    duration: 2600,
    delay: 450,
    reset: true
});


sr.reveal('.hero-text', {delay:200, origin:'top'});
sr.reveal('.hero-img', { delay: 450, origin: 'top' });
sr.reveal('.icons', { delay: 500, origin: 'left' });
sr.reveal('.scroll-down', { delay: 200, origin: 'right' });


let list = document.querySelectorAll('.list');
let card = document.querySelectorAll('.card');

for(let i = 0; i < list.length; i++){
    list[i].addEventListener('click', function(){
        for(let j = 0; j < list.length; j++){
            list[j].classList.remove('active');
        }
        this.classList.add('active');

        let dataFilter = this.getAttribute('data-filter');

        for(let k = 0; k < card.length; k++){
            card[k].classList.remove('active');
            card[k].classList.add('hide');

            if(card[k].getAttribute('data-item') == dataFilter || dataFilter == "all"){
                card[k].classList.remove('hide');
                card[k].classList.add('active');
            }
        }
    });
}



// document.addEventListener('DOMContentLoaded', () => {
//     const canvas = document.getElementById('canvas');
//     const ctx = canvas.getContext('2d');
//     const waveHeight = 50; // Ajusta la altura de la onda
//     const waveSpeed = 0.01; // Ajusta la velocidad de la onda (valor más bajo para movimiento más lento)
//     let mouseX = 0;
//     let isMouseOverCanvas = false;

//     canvas.addEventListener('mouseenter', () => {
//         isMouseOverCanvas = true;
//         requestAnimationFrame(animateWave);
//     });

//     canvas.addEventListener('mouseleave', () => {
//         isMouseOverCanvas = false;
//         clearCanvas();
//     });

//     canvas.addEventListener('mousemove', (event) => {
//         if (isMouseOverCanvas) {
//             mouseX = event.clientX - canvas.getBoundingClientRect().left;
//         }
//     });

//     function clearCanvas() {
//         ctx.clearRect(0, 0, canvas.width, canvas.height);
//     }

//     function drawWave() {
//         ctx.fillStyle = 'linear-gradient(245.59deg, #20682c 0%, #38703d, #133917 85.52%)';
// ;
//         ctx.fillRect(0, canvas.height - waveHeight, canvas.width, waveHeight);

//         ctx.fillStyle = 'white';
//         ctx.beginPath();
//         ctx.moveTo(0, canvas.height - waveHeight);

//         for (let x = 0; x <= canvas.width; x += 10) {
//             const y = canvas.height - waveHeight - Math.sin((x - mouseX) * waveSpeed) * waveHeight;

//             ctx.lineTo(x, y);
//         }

//         ctx.lineTo(canvas.width, canvas.height);
//         ctx.lineTo(0, canvas.height);
//         ctx.closePath();
//         ctx.fill();
//     }

//     function animateWave() {
//         clearCanvas();
//         drawWave();

//         if (isMouseOverCanvas) {
//             requestAnimationFrame(animateWave);
//         }
//     }

//     drawWave(); // Llamamos a la función para dibujar la onda cuando se carga la página
// });












