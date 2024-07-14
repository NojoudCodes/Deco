let nav = document.querySelector('.navbar');

window.onscroll = () => {
    this.scrollY > 20 ? nav.classList.add('bg-body-tertiary') : nav.classList.remove('bg-body-tertiary');
};

addEventListener('resize', () => {
    if(innerWidth < 992 ) {
        nav.classList.remove('fixed-top');
        nav.classList.add('bg-body-tertiary');
    }else {
        nav.classList.add('fixed-top');
        nav.classList.remove('bg-body-tertiary');
    }
});

let list = document.querySelectorAll('.list');
let itemBox = document.querySelectorAll('.itemBox');

for(let i = 0; i<list.length; i++){
    list[i].addEventListener('click', function(){
        for(let j = 0; j<list.length; j++){
            list[j].classList.remove('active');
        }
        this.classList.add('active');

        let dataFilter = this.getAttribute('data-filter');

        for(let k = 0; k<itemBox.length; k++){
            itemBox[k].classList.remove('active');
            itemBox[k].classList.add('hide');
        
        if(itemBox[k].getAttribute('data-item') == dataFilter || dataFilter == "all"){
            itemBox[k].classList.remove('hide');
            itemBox[k].classList.add('active');
        }
    }
    })
}
