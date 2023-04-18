$('.responsive').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1441,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 769,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});



const product_list = ["product1", "product2", "product3", "product4", "product5", "product6", "product7", "product8"]

function check_submit(a) {
    var value = document.getElementsByClassName("number")[a].value
    function checkInput(value) {

        if (isNaN(value)) {
            alert("Vui lòng nhập số")
            return false
        } else if (value <= 0) {
            alert("Vui lòng nhập giá trị dương")
            return false
        }
        return true
    }

    if (checkInput(value)) {
        alert("Bạn vui lòng nhập thêm 1 vài thông tin để order nhé 😉")



        sessionStorage.name = product_list[a]
        console.log(sessionStorage.name)

        sessionStorage.number = value
        console.log(sessionStorage.number)
    }
}

const swiper = new Swiper('#testimonials .swiper', {
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: '#testimonials .swiper-pagination',
        clickable: true
    },
});

// Products slider

const productsSlider = new Swiper(".products__slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    freeMode: true,
    pagination: {
        el: ".products__slider-pagination",
        clickable: true,
    },
    breakpoints: {
        640: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
    }
});

// Mobile menu
document.querySelector('.mobile-menu__btn').addEventListener('click', function () {
    document.querySelector('.mobile-menu').classList.add('active');
})
document.querySelector('.mobile-menu__cross').addEventListener('click', function () {
    document.querySelector('.mobile-menu').classList.remove('active');
})

//  TIMER 
let date = new Date('Sep 1 2023 00:00:00');

function counts() {
    let now = new Date();
    gap = date - now;

    let days = Math.floor(gap / 1000 / 60 / 60 / 24);
    let hours = Math.floor(gap / 1000 / 60 / 60) % 24;
    let minutes = Math.floor(gap / 1000 / 60) % 60;
    let seconds = Math.floor(gap / 1000) % 60;

    document.getElementById('d').innerText = days;
    document.getElementById('h').innerText = hours;
    document.getElementById('m').innerText = minutes;
    document.getElementById('s').innerText = seconds;
}
counts();

setInterval(counts, 1000);