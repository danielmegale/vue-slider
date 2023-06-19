console.log('JS OK')

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
})