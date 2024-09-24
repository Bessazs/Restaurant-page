// index.js
import backgroundImg from "../img/BackgroundImg.svg"
import onionSrc from "../img/onion.svg"
import hambuguerSrc from "../img/hamburguer.svg"
import juiceSrc from "../img/juice.svg"
import transitionSrc from "../img/transition.svg"



function renderHome() {

    const buttons = document.querySelectorAll('button')
    buttons.forEach(button => {
        button.style = 'color: rgba(9,125,76,255);'        
    });

    const divContent = document.querySelector("#content")
    divContent.style = `background-image: url(${backgroundImg});`
    const divTittle = document.createElement("div")
    divTittle.classList.add("box-tittle")



    const tittle = document.createElement("h1")
    tittle.classList.add("tittle")
    tittle.textContent = "VEGAN"

    const subTittle = document.createElement("h1")
    subTittle.classList.add("subTittle")
    subTittle.textContent = "food"

    divTittle.appendChild(tittle)
    divTittle.appendChild(subTittle)
    divContent.appendChild(divTittle)


    const divFigs = document.createElement("div")
    divFigs.classList.add("box-figs")

    const onion = document.createElement("img")
    onion.src = onionSrc
    onion.classList.add("fig")
    onion.classList.add("onion")

    const hambuguer = document.createElement("img")
    hambuguer.src = hambuguerSrc
    hambuguer.classList.add("fig")
    hambuguer.classList.add("hambuguer")


    const juice = document.createElement("img")
    juice.src = juiceSrc
    juice.classList.add("fig")
    juice.classList.add("juice")


    divFigs.appendChild(onion)
    divFigs.appendChild(hambuguer)
    divFigs.appendChild(juice)
    divContent.appendChild(divFigs)


    const transition = document.createElement("img")
    transition.src = transitionSrc
    transition.classList.add("transition")

    divContent.appendChild(transition)

}

export {renderHome};






