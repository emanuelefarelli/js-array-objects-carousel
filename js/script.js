const images = [
    {
        image: 'img/bf3.jpg',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/cod.jpg',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/diablo.jpg',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/stray.jpg',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/lol.jpg',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

const preBtn = document.querySelector('div.previous-button');
const nxtBtn = document.querySelector('div.next-button');
let i = 0;

preBtn.addEventListener('click',function(){
    i--;
    if(i < 0){
        i = images.length - 1;
    }
    console.log(i);
    renderSlide(images,i);
});

nxtBtn.addEventListener('click',function(){
    i++;
    if(i == images.length){
        i = 0;
    }
    console.log(i);
    renderSlide(images,i);
});

renderSlide(images,i);



function renderSlide(imgs,index){
    const myCarousel = document.querySelector('div.img-carousel');
    myCarousel.innerHTML = `
    <img src="${imgs[index].image}" alt="image of ${imgs[index].title}">
    <h2 class="img-title">
        ${imgs[index].title}
    </h2>
    <p class="img-description">
        ${imgs[index].text}
    </p> 
    `;
};