// VUE INSTANCE
const app = new Vue({
    el: '#root',
    data:{
        images: [
            'https://images.pexels.com/photos/371633/pexels-photo-371633.jpeg?cs=srgb&amp;dl=clouds-country-daylight-371633.jpg&amp;fm=jpg',
            'https://static.photocdn.pt/images/articles/2017/04/28/iStock-646511634.jpg',
            'https://cdn.mos.cms.futurecdn.net/FUE7XiFApEqWZQ85wYcAfM.jpg',
            'https://static.photocdn.pt/images/articles/2017/04/28/iStock-546424192.jpg',
        ],
        indexImg: 0,
        intervalID: 0,
    },
    created(){
        this.startSlide();
    },
    methods:{
        prevImg(){
            this.indexImg--;
            if(this.indexImg < 0){
                this.indexImg = this.images.length - 1;
            }
        },
        nextImg(){
            this.indexImg++;
            if(this.indexImg > this.images.length - 1){
                this.indexImg = 0;
            }
        },
        dotNav(index){
            this.indexImg = index;
        },
        startSlide(){
            this.intervalID = setInterval(() => {
                this.nextImg();
            }, 1500);
        },
        stopSlide(){
            clearInterval(this.intervalID);
        },
    }
});