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