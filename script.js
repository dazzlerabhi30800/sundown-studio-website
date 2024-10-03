// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true,
//     vertical: true,
// });

const locomotiveScroll = new LocomotiveScroll();

const elemContainer = document.querySelector('#elem-container');
const fixedImg = document.querySelector('.fixed-img');
const footerLinks = document.querySelectorAll('.project-link');
const projectImg = document.querySelector('#project-img');
const swiperWrapper = document.querySelector('.swiper-wrapper');
const movingTextWrapper = document.querySelector('#moving-text');
const menuBtn = document.querySelector('#menuBtn');
const navbar = document.querySelector('#navbar');
const presentation = document.querySelector('#presentation');
const presentationText = presentation.querySelector('#presentation-text');

const elemData = [
    {
        name: "Play New Kidvision",
        text1: "nike",
        text2: "Environment",
        img: "https://images.unsplash.com/photo-1721332149069-a470150ef51c?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        name: "SOHO NYC",
        text1: "ARC'TERYX",
        text2: "Environment",
        img: "https://images.unsplash.com/photo-1727409492354-dc440e11eb7e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },

    {
        name: "Makers Studio HOI",
        text1: "nike",
        text2: "Experiencial",
        img: "https://images.unsplash.com/photo-1720048169694-615ed8b2af21?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },

    {
        name: "SOHO 2023",
        text1: "converse",
        text2: "Environment",
        img: "https://images.unsplash.com/photo-1727532308661-111c80476815?q=80&w=1952&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        name: "NYFW Popup",
        text1: "afterpay",
        text2: "Experiencial",

        img: "https://images.unsplash.com/photo-1725489891146-490f7962e499?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        name: "Air Force 1 2021",
        text1: "nike",
        text2: "Environment",
        img: "https://images.unsplash.com/photo-1709828238489-4829af4c28c9?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        name: "50th Anniversary",
        text1: "nike",
        text2: "Environment",
        img: "https://images.unsplash.com/photo-1726756882806-cad5dcac46f2?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
]
elemContainer.innerHTML = elemData?.map((data) => {
    let { name, text1, text2, img } = data;
    return (
        `
            <div
            data-img=${img}
            class="elem flex flex-col md:flex-row md:justify-between md:items-center gap-3 p-7 md:p-10"
          >
          <img src=${img} alt=${name} class="w-full h-[300px] rounded-2xl  md:hidden object-cover" />
            <h2 class="text-[1.9em] md:text-[3vw]">${name}</h2>
            <div class="flex flex-col gap-1 mt-3">
            <p class="uppercase text-[1.5em]">${text1}</p>
            <p class="text-[1.5em] text-gray-400 font-light">${text2}</p>
            </div>
          </div>
        `
    )
}).join("");


elemContainer.addEventListener("mouseenter", (e) => {
    if (window.innerWidth < 780) return;
    fixedImg.classList.remove('hidden');
    fixedImg.classList.add('flex');
})


elemContainer.addEventListener("mouseleave", () => {
    fixedImg.classList.add('hidden');
    fixedImg.classList.remove('flex');
})

document.addEventListener('DOMContentLoaded', () => {
    const elems = Array.from(elemContainer.children);
    elems.forEach((elem) => {
        elem.addEventListener('mouseenter', () => {
            if (window.innerWidth < 780) return;
            fixedImg.style.backgroundImage = `url("")`;
            const imgUrl = elem.getAttribute('data-img');
            fixedImg.style.backgroundImage = `url(${imgUrl})`;
        })
    })
})

footerLinks.forEach((link) => {
    link.addEventListener('click', () => {
        footerLinks.forEach((link) => link.classList.remove('active'));
        const imgUrl = link.getAttribute('data-img');
        projectImg.src = imgUrl;
        link.classList.add('active')
    })
})



const swiperData = [
    {
        img: "https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b15ff_Nike.svg",
        text: "Retained Production support across retail and events in NY, CHI, LA. Creative Design, Design Management, Production/Project Management, and execution of work from concept to installation across the Country."
    },
    {
        img: "https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b1600_Converse.svg",
        text: "Creative Concepting, Design, Design Management, Project Management, and execution of work from concept to installation across the Country. Cross functional communication and management of third party partners."
    },
    {
        img: "https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b15fd_Arc%E2%80%99teryx.svg",
        text: "Production and design along with install oversight and execution support for the SoHo store opening on Broadway St, New York. Also working on creative and production work for a new store opening in Glendale, California."
    },
    {
        img: "https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b15fe_Hunter.svg",
        text: "Design and Production partner for Hunter Holiday 2022 Pop-in at Nordstrom 57th St, New York, including activations in Women’s, Men’s and Kid’s zones. Thirty-five (35) additional smaller take-downs in Nordstrom stores across the US. Concept design for Holiday boot customization events in stores across winter 2022."
    },
    {
        img: "https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b1601_MediaLink.svg",
        text: "Creative, Design, and Production Partner for 2023 CES. Scope Included creation of Branding Identity, Assets, and Digital Content, Design, Production design, Production oversight and Installation of client activations for IBM, Delta, Instacart, and more."
    },
    {
        img: "https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b1602_AfterPay.svg",
        text: "Creative, Design, and Production Partner for 2022 NY Fashion Week Pop-Up space. In Partnership with B-Reel scope including creation of Final Design, Design Assets, 3D Renders, Production design, Production/Partner oversight and creation of a two (2) story pop-up for Afterpay’s clients such as Crocs, JD Sports, Container Store, & Revolve."
    },
]


swiperWrapper.innerHTML = swiperData.map((data) => {
    let { img, text } = data;
    return (
        `
        <div class="swiper-slide border-l border-gray-300 ">
            <div class="flex w-fit h-full flex-col gap-5 border-l border-gray-200 p-5">
                <img src=${img} class="w-fit h-full object-cover" />
                <p class="text-sm">${text}</p>
            </div>
        </div>
        `
    )
}).join('');



const swiper = new Swiper('.mySwiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1024: {
            slidesPerView: 3.5,
            spaceBetween: 40,
        },
    }

})


movingTextWrapper.innerHTML = [...Array(3)].map((_, index) => (
    `
            <div class="con">
            <h1>experience</h1>
            <div
              class="inline-block circle w-3 h-3 sm:w-5 sm:h-5 md:w-10 md:h-10 lg:w-14 lg:h-14 rounded-[50%] bg-orange-600"
            ></div>
            <h1>content</h1>
            <div
              class="inline-block circle w-3 h-3 sm:w-5 sm:h-5 md:w-10 md:h-10 lg:w-14 lg:h-14 rounded-[50%] bg-orange-600"
            ></div>
            <h1>environments</h1>

            <div
              class="inline-block circle w-3 h-3 sm:w-5 sm:h-5 md:w-10 md:h-10 lg:w-14 lg:h-14 rounded-[50%] bg-orange-600"
            ></div>
          </div>
    `
))

let showNav = false;


menuBtn.addEventListener('click', () => {
    const icon = menuBtn.querySelector('i');
    if (showNav) {
        icon.classList.remove('fa-times');
        navbar.classList.remove('translate-y-0');
        showNav = false;
        document.body.classList.add('removeOverflow');
    }
    else {
        icon.classList.add('fa-times');
        navbar.classList.add('translate-y-0');
        showNav = true;
        document.body.classList.remove('removeOverflow');
    }
})


function startPresentation() {
    const texts = ['Environment', 'Experiences', 'Content'];
    let i = 0;
    let interval = setInterval(() => {
        if (i >= texts.length) {
            clearInterval(interval);
            presentation.classList.add('-translate-y-[100%]');
            document.body.classList.add('removeOverflow');
            return;
        }
        presentationText.textContent = texts[i];
        i++;
    }, 2000)
}

startPresentation();