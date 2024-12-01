const toggleTheme = document.getElementById("toggleTheme");
const rootHtml = document.documentElement
const accordionsHeaders = document.querySelectorAll(".accordion_header");
const menuLinks = document.querySelectorAll(".menu_link");

const themeSystem = localStorage.getItem("theme") || "dark"

toggleTheme.addEventListener("click", () => {
    let oldTheme = localStorage.getItem("theme") || "dark"
    let currentTheme  = oldTheme === "dark" ? "light" : "dark"

    localStorage.setItem("theme", currentTheme)
    changeTheme(currentTheme)
})

function changeTheme(theme) {
    rootHtml.setAttribute("data-theme", theme)
    if(theme == "dark") {
        toggleTheme.classList.add("bi-brightness-low-fill")
        toggleTheme.classList.remove("bi-moon-fill")
    } else {
        toggleTheme.classList.remove("bi-brightness-low-fill")
        toggleTheme.classList.add("bi-moon-fill")
    }
}

changeTheme(themeSystem)