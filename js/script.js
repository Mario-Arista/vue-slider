const { createApp } = Vue

createApp({
    data() {
        return {

            // variabile per la slide attiva
            slideCounter: 0,

            // valore flag per stop e autoplay
            autoPlay: 0,

            // Array 
            slides: [
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
            ],

        }
    },
    
    // Avvio autoplay
    mounted() {

        this.autoPlay()

    },
    
    methods: {
        
        autoplay() {
            this.autoPlay = setInterval(this.nextArrow, 3000);
        },

        stopAutoplay() {
            clearInterval(this.autoPlay);
        },

        // Cambio slide su freccia rivolta verso giù
        nextArrow() {
            this.slideCounter++;

           // controllo che l'indice non vada oltre lo zero 
           if (this.slideCounter >= this.slides.length) {
            this.slideCounter = 0;
        }
 
        },

        // Cambio slide su freccia rivolta verso sù
        prevArrow() {

            this.slideCounter--;

            // Controllo che l'indice non vada oltre l'ultima immagine
            if (this.slideCounter < 0) {
                this.slideCounter = this.slides.length - 1;
            }
 

        },

        activeSlide(index) {
            this.slideCounter = index;
            
        },


    }

}).mount('#app');