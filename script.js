console.log('vue',Vue)
const app = Vue.createApp({
    name: 'Careousel',
    data() {
        return{
            interval:null,
            currentIndex:0,
            images:[
                {
                    image: 'img/01.webp',
                    title: 'Marvel\'s Spiderman Miles Morale',
                    text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
                },
                {
                    image: 'img/02.webp',
                    title: 'Ratchet & Clank: Rift Apart',
                    text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
                },
                {
                    image: 'img/03.webp',
                    title: 'Fortnite',
                    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
                },
                {
                    image: 'img/04.webp',
                    title: 'Stray',
                    text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
                },
                {
                    image: 'img/05.webp',
                    title: "Marvel's Avengers",
                    text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
                }
            ]
        };
    },
    computed:{
        islast(){
            return this.currentIndex===this.images.length -1;
        },
        inFirst(){
            return this.currentIndex===0;
        }
    },
    methods:{
        goNext(){
            if(this.islast){
                this.currentIndex=0;
            }else{
                this.currentIndex++;
            }
        },
        goBack(){
            if(this.inFirst){
                this.currentIndex=this.images.length -1
            }else{
                this.currentIndex--;
            }
        },
        setImg(targetImg){
            this.currentIndex = targetImg
        },
        stop(){
            clearInterval(this.interval);
        },
        start(){
            this.interval =setInterval(this.goNext,2000)
        }
    },
    mounted(){
    this.interval =setInterval(this.goNext,2000)
    }
});

app.mount('#root'); 



















/*console.log('JS OK')

//Recupero prev e next
const prevButton =document.getElementById('prev');
const nextButton =document.getElementById('next');

//Recupero le gallery
const gallery=document.querySelector('.gallery');
const thGallery=document.querySelector('.th-gallery');
//Prepariamo le immagini
const sources=['img/01.webp','img/02.webp','img/03.webp','img/04.webp','img/05.webp']

let imageElements='';

//Per ogni source creo un tag img
for(let i=0; i< sources.length; i++){
    imageElements += `<img src="${sources[i]}" >`;
}
//Inserisco le immagini nel DOM
gallery.innerHTML = imageElements;
thGallery.innerHTML=imageElements;

//Recupero tutte le imaggini
const images =document.querySelectorAll('#carousel img');
const thImages=document.querySelectorAll('#thumbnails img',);
//Preparo la gestione dell'index
let currentIndex=0;

//imposto la prima immagine come quella attiva
images[currentIndex].classList.add('active');
thImages[currentIndex].classList.add('opacity')

//Metto in ascolto il next
nextButton.addEventListener('click',function(){

    //Rimuovo la classe active dall' immagine corrispondente al currentIndex
    images[currentIndex].classList.remove('active');
    thImages[currentIndex].classList.remove('opacity');
    
    //! Controllo
    if(currentIndex === images.length -1){
        currentIndex=0
    }else{
        currentIndex++
    }
        //Aggiungo la classe active all'immagine corrispondente al nuovo currentindex
        images[currentIndex].classList.add('active');
        thImages[currentIndex].classList.add('opacity');
})

//Metto in ascolto il prev
prevButton.addEventListener('click',function(){
    //Rimuovo la classe active dall'immagine corrispondente al currentIndex
    images[currentIndex].classList.remove('active');
    thImages[currentIndex].classList.remove('opacity');
    //!Controllo
    if(!currentIndex){
        currentIndex= images.length-1
    }else{
        currentIndex--;
    }

    //Aggiungo la classe active all'immagine corrispondete al nuovo currentindex
    images[currentIndex].classList.add('active');
    thImages[currentIndex].classList.add('opacity');
})*/
