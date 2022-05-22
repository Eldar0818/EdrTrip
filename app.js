let navbar = document.querySelector('.navbar')
let logo = document.querySelector('.logo')
let logoEnd = document.querySelector('.logo-end')
let navlink = document.querySelectorAll('.navlink')
let menuIcon = document.querySelector('.menu-icon')

function chnageNavBackground () {
    let scrollValue = window.scrollY
    if(scrollValue < 100){
        navbar.classList.remove('active')
        logo.classList.remove('active')
        logoEnd.classList.remove('active')
        menuIcon.classList.remove('active')
        navlink.forEach(link=> link.classList.remove('active'))
    }else{
        navbar.classList.add('active')
        logo.classList.add('active')
        logoEnd.classList.add('active')
        menuIcon.classList.add('active')
        navlink.forEach(link=> link.classList.add('active'))
    }
}

window.addEventListener('scroll', ()=> {
    chnageNavBackground()
})

let closeBtn = document.getElementById('close-btn')
let menuBtn = document.getElementById('menu-btn')
let menuCard = document.getElementById('menu-card')

menuBtn.addEventListener('click', ()=> {
    menuCard.classList.toggle('active')
})

closeBtn.addEventListener('click', ()=> {
    menuCard.classList.remove('active')
})

function menuCardInWidth () {

    let widthValue = window.innerWidth

    if(widthValue > 625){
        menuCard.classList.remove('active')
    }
}

window.addEventListener('resize', menuCardInWidth)


/* ============================================================================ */

const travelData = [
    {
        id: 1,
        location: "London, United Kingdom",
        desc: "London is one of the most popular cities in the world. It’s home to charming pubs, world-class museums, tons of history, some of the best theater in the world, a diverse population, incredible food, and a wild nightlife.",
        poster: "./img/london.jpg"
    },
    {
        id: 2,
        location: "Lisbon, Portugal",
        desc: "Lisbon is having a moment. glossy tiled facades and red roofs feature on many an Instagram feed. The food surprises, with a depth far beyond the famous pastéis de nata (custard tarts) that are so known and loved.",
        poster: "./img/lisbon.jpg"
    },
    {
        id: 3,
        location: "Paris, France",
        desc: "The uniform sandstone of the Haussmann buildings, the abundance of gilded historic monuments, and the glimmering Seine and its elegant bridges have arguably made Paris the most recognisable and romanticised cityscape in the world. ",
        poster: "./img/paris.jpg"
    },
    {
        id: 4,
        location: "New York, United States",
        desc: "The City that Never Sleeps is in constant motion  at 3am – and while the surface may be always transforming, its heart never really changes. Spend a day seeing the sites in Manhattan and another day global hipsterism in Brooklyn.",
        poster: "./img/newyork.jpg"
    },
    {
        id: 5,
        location: "Rome, Italy",
        desc: "Rome has been around for almost three thousand years and yet carries all that weight of history with a dolce vita lightness of heart. It’s a city that combines the intimacy and human scale of a village. ",
        poster: "./img/Rome.jpg"
    },
    {
        id: 6,
        location: "Athens, Greece",
        desc: "For a city with so much mythical and cultural baggage, Athens is surprisingly modern. There are Byzantine churches tucked among the tightly knit apartments and the Parthenon looms into view around nearly every corner. ",
        poster: "./img/athens.jpg"
    }
]

let feautredContainer = document.querySelector('.featured-container')

function displayFaeturedTravels() {

    let result = ""

    travelData.map(travel=> {
        result += `
        <article class="featured-travel">
            <img src="${travel.poster}" alt="travel">
            <div class="featured-info">

                <div class="featured-location">
                    <i class="fa-solid fa-location-dot"></i>
                    ${travel.location}
                </div>
                <div class="featured-desc">
                    <p>${travel.desc}</p>
                </div>

            </div>
        </article>
        `
        return result
    })

    feautredContainer.innerHTML = result
}

displayFaeturedTravels() 

let blogs = [
    {
        id: 1,
        customer: "Liam",
        avatar: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, error. Totam, excepturi modi. Molestias recusandae dolorem minus facilis modi ullam."
    },
    {
        id: 2,
        customer: "Olivia",
        avatar: "https://images.pexels.com/photos/2726111/pexels-photo-2726111.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, error. Totam, excepturi modi. Molestias recusandae dolorem minus facilis modi ullam."
    },
    {
        id: 3,
        customer: "Noah",
        avatar: "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, error. Totam, excepturi modi. Molestias recusandae dolorem minus facilis modi ullam."
    },
    {
        id: 4,
        customer: "Emma",
        avatar: "https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, error. Totam, excepturi modi. Molestias recusandae dolorem minus facilis modi ullam."
    },
]

let blogWrapper = document.querySelector('.blogs-wrapper')

function displayBlogs () {
    let output = ''
    blogs.map(blog=> {
        output += `
            <article class="blog">
                <div class="blog-header">
                    <img src="${blog.avatar}" alt="avatar" class="avatar">
                    <span class="client-name">${blog.customer}</span>
                </div>
                <div class="blog-text">${blog.content}</div>
                <div class="ranks">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star-half-stroke"></i>
                </div>
            </article>
        `
        return output
    })

    blogWrapper.innerHTML = output
}

displayBlogs()