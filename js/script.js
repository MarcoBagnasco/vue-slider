// VUE INSTANCE
const app = new Vue({
    el: '#root',
    data:{
        images: [
            [
            'https://images.pexels.com/photos/371633/pexels-photo-371633.jpeg?cs=srgb&amp;dl=clouds-country-daylight-371633.jpg&amp;fm=jpg',
            'https://static.photocdn.pt/images/articles/2017/04/28/iStock-646511634.jpg',
            'https://cdn.mos.cms.futurecdn.net/FUE7XiFApEqWZQ85wYcAfM.jpg',
            'https://static.photocdn.pt/images/articles/2017/04/28/iStock-546424192.jpg'
            ],
            [
            'http://www.aresviaggi.com/wp-content/uploads/2018/11/panorami-infiniti-aresviaggi.jpg',
            'https://images.lonelyplanetitalia.it/uploads/shutterstock-185800496?q=80&p=slider&s=4d256dfd284af350d8605473326767f9',
            'https://lh3.googleusercontent.com/proxy/K5lQ2YPcC23GwvDtlYewjuf1CHCM8xpdafkopuYbPN-BJIFmpWXBDYd9Qb4uJq1tEiAMcCGwqJv6g6S1dn5EQLSQVy9-U8NNonaJLJT6X5Sk6IxeJtPnbg',
            'https://www.ritterhof.com/typo3temp/bnamic/panorama-a-360-_D-3.jpg'
            ],
        ],
        indexImg: 0,
        indexPhoto: 0,
        indexGroup: 0,
        intervalID: 0,
    },
    created(){
        this.startSlide();
    },
    methods:{
        prevImg(){
            this.indexPhoto--;

            if(this.indexPhoto < 0) {
                this.indexImg--;
                if(this.indexImg < 0){
                    this.indexImg = this.images.length - 1;
                }
                this.indexPhoto = this.images[this.indexImg].length - 1;
            }
        },
        nextImg(){
            this.indexPhoto++;

            if(this.indexPhoto > this.images[this.indexImg].length - 1){
                this.indexImg++;
                this.indexPhoto = 0;
            }
            if(this.indexImg > this.images.length - 1){
                this.indexImg = 0;
            }
        },
        dotNav(index){
            if(index > this.images[this.indexImg].length - 1){
                this.indexPhoto = index - this.images[this.indexImg].length;
                this.indexImg = 1;
                if(this.indexImg > this.images.length - 1){
                    this.indexImg = 0;
                }
            } else if (index < this.images[this.indexImg].length) {
                this.indexImg = 0;
                this.indexPhoto = index;
            }
        },
        prevGroup(){
            this.indexGroup--;
            if(this.indexGroup < 0){
                this.indexGroup = this.images.length - 1;
            }
        },
        nextGroup(){
            this.indexGroup++;
            if(this.indexGroup > this.images.length - 1){
                this.indexGroup = 0;
            }
        },
        dotActive(index){
            if(((index === this.indexPhoto) && (this.indexImg === 0)) || ((index === this.indexPhoto + this.images[this.indexImg].length) && (this.indexImg != 0))){
                return true;
            }
            return false;
        },
        chooseImg(index){
            console.log('ciao');
            this.indexImg = this.indexGroup;
            this.indexPhoto = index;
        },
        startSlide(){
            this.intervalID = setInterval(() => {
                this.nextImg();
            }, 2500);
        },
        stopSlide(){
            clearInterval(this.intervalID);
        },
    }
});