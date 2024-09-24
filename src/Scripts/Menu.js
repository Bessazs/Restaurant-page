import backgroundImgSrc from "../img/BackgroundImg2.svg"
import tomatoImgSrc from "../img/tomato.svg"
import transitionSrc from "../img/transition2.svg"


function renderMenu() {

    const buttons = document.querySelectorAll('button')
    buttons.forEach(button => {
        button.style = 'color: rgba(241,234,209,255);'        
    });
    const divContent = document.querySelector("#content")

    divContent.style = `background-image: url(${backgroundImgSrc}); color: rgba(241,234,209,255);`


    const tittle = document.createElement("h2")
    tittle.textContent = "Menu"
    tittle.classList.add("tittleMenu")
    const divTittle = document.createElement("div")
    divTittle.classList.add("box-tittleMenu")
    divTittle.appendChild(tittle)

    const meal1 = document.createElement("h3")
    meal1.textContent = "Hambúrguer GG"
    meal1.classList.add("tittleMeal")
    const description1 = document.createElement("p")
    description1.textContent = "Made with a juicy 100% plant-based burger patty"
    description1.classList.add("descriptionMeal")
    const divMeal1 = document.createElement("div")
    divMeal1.classList.add("divMeal")
    divMeal1.appendChild(meal1)
    divMeal1.appendChild(description1)


    const meal2= document.createElement("h3")
    meal2.textContent = "Pizza vegana clássica"
    meal2.classList.add("tittleMeal")
    const description2 = document.createElement("p")
    description2.textContent = "Our plant-based take on the"
    description2.classList.add("descriptionMeal")
    const divMeal2 = document.createElement("div")
    divMeal2.classList.add("divMeal")
    divMeal2.appendChild(meal2)
    divMeal2.appendChild(description2)

    const meal3 = document.createElement("h3")
    meal3.textContent = "Hambúrguer especial"
    meal3.classList.add("tittleMeal")
    const description3 = document.createElement("p")
    description3.textContent = "Served with our secret house sauce"
    description3.classList.add("descriptionMeal")
    const divMeal3 = document.createElement("div")
    divMeal3.classList.add("divMeal")
    divMeal3.appendChild(meal3)
    divMeal3.appendChild(description3)

    const meal4 = document.createElement("h3")
    meal4.textContent = "Salada Ceasar"
    meal4.classList.add("tittleMeal")
    const description4 = document.createElement("p")
    description4.textContent = "Greens served with plant-based chicken strips"
    description4.classList.add("descriptionMeal")
    const divMeal4 = document.createElement("div")
    divMeal4.classList.add("divMeal")
    divMeal4.appendChild(meal4)
    divMeal4.appendChild(description4)
    
    const divMenu = document.createElement("div")
    divMenu.classList.add("boxMeals")
    divMenu.appendChild(divMeal1)
    divMenu.appendChild(divMeal2)
    divMenu.appendChild(divMeal3)
    divMenu.appendChild(divMeal4)

    const tomatoImg = document.createElement("img")
    tomatoImg.classList.add("tomatoImg")
    tomatoImg.src = tomatoImgSrc

    const divContainerMenu = document.createElement("div")
    divContainerMenu.classList.add("containerMenu")
    divContainerMenu.appendChild(divTittle)
    divContainerMenu.appendChild(divMenu)

    const divContainer = document.createElement("div")
    divContainer.classList.add("container")
    divContainer.appendChild(tomatoImg)
    divContainer.appendChild(divContainerMenu)
    


    const transition = document.createElement("img")
    transition.src = transitionSrc

    divContent.appendChild(divContainer)
    divContent.appendChild(transition)

}



export {renderMenu};