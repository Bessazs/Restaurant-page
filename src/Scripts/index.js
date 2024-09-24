import "../Styles/styles.css";
import { renderHome } from "./Home.js";
import { renderMenu } from "./Menu.js";


function cleanPage() {
    const divContent = document.querySelector("#content")
    while (divContent.firstChild) {
        divContent.removeChild(divContent.firstChild)
    }   
}




renderHome()
const homeBtn = document.querySelector(".homeBtn")
homeBtn.addEventListener('click', () => {
    cleanPage()
    renderHome()
})


const menuBtn = document.querySelector(".menuBtn")
menuBtn.addEventListener('click', () =>{
    cleanPage()
    renderMenu()
})
const aboutBtn = document.querySelector(".aboutBtn")
