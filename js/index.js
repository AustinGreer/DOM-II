// CREATE EVENT LISTENERS OF AT LEAST TEN DIFFERENT TYPES
// 1. Click event
//create a new dark mode link and set it to when user clicks, it creates a darkmode
//(a.) Create darkModeLink and append it to dom
const darkModeLink = document.createElement("a")
darkModeLink.classList.add("nav-link")
darkModeLink.setAttribute("href", "#")
darkModeLink.textContent = "Dark Mode"
document.querySelector(".nav").appendChild(darkModeLink)

//(b.) create event listener for dark mode button
const body = document.querySelector("body")
const anchorTags = document.querySelectorAll("a")
const switchDarkMode = (event) => {
    body.classList.toggle("darkMode")    
}

darkModeLink.addEventListener("click", switchDarkMode)

// 2. mouseenter 3. mouseleave
// Use these events on the anchor tags to grow the selected tag and change color.
const anchorEnter = (event) => {
    event.target.classList.add("anchorHover")
    event.target.style.color = "gold"
}

const anchorLeave = (event) => {
    event.target.classList.remove("anchorHover")
    event.target.style.color = "#212529"
}

anchorTags.forEach(anchor => {
    anchor.addEventListener('mouseenter', anchorEnter)
    anchor.addEventListener('mouseleave', anchorLeave)
})

// 4. dbl click
//when user double clicks anywhere, the background changes to beige
const backgroundChange = (event) => {
    body.style.background = "beige"
}

document.addEventListener('dblclick', backgroundChange)



// 5. Keydown
// Browser to inform user when a key is pressed

const keyPress = (event) => {
    alert(`This ${event.key} was pressed`)
}

document.addEventListener('keypress', keyPress)

// 6. load event
//sends user a welcome message on load
const welcomeMessage = (event) => {
    //alert("Welcome to Fun Bus! Please take a seat.")
}

window.addEventListener("load", welcomeMessage)

// 7. focus 8. blur
//orange background over anchor links
anchorTags.forEach(anchor => {
    anchor.addEventListener("focus", (event) => {
        event.target.style.background = "orange"
    })
    anchor.addEventListener('blur', (event) => {
        event.target.style.background = "white"
    })
})

// 9. copy
// highlight paragraph that is copied
const paragraph = document.querySelectorAll("p")
paragraph.forEach(p => {
    p.addEventListener('copy', (event) => {
        event.target.style.background = 'yellow'
    })
})

// 10. resize
// When user changes size, img changes
const headImg = document.querySelector("img")

window.addEventListener('resize', (event) => {
    headImg.src = "https://mpng.subpng.com/20190519/ue/kisspng-party-bus-clip-art-image-5ce13775a60fb4.3328934615582636696802.jpg"
})