function classSwitcher (){
    slides.forEach(slide=> slide.classList.remove("active"))
    points.forEach(point=> point.classList.remove("active"))
    slides[active].classList.add("active")
    points[active].classList.add("active")
}

// variables
let active = 0
let timer = 3000

let goNext = () => {
    active = (active == slides.length - 1) ? 0 : active + 1
    classSwitcher ()
}
let goPrev = () => {
    active = (active == 0) ? slides.length - 1 : active - 1
    classSwitcher ()
}

let slideshow = document.querySelector(".slideshow")
let slides = document.querySelectorAll(".slide")
let points = document.querySelectorAll(".points > span")
let prev = document.querySelector(".prev")
let next = document.querySelector(".next")

// setInterval
let interval = setInterval(goNext, timer)

// points event
points.forEach((point, index)=>{
    point.addEventListener("click", e=>{
        active = index
        classSwitcher ()
    })
})

// next Event
next.addEventListener("click", e => goNext())

// prev Event
prev.addEventListener("click", e => goPrev())

// mouseover
slideshow.addEventListener("mouseover", e=>
    clearInterval(interval)
)

// mouseleave
slideshow.addEventListener("mouseleave", e=>
    interval = setInterval(goNext, timer)
)