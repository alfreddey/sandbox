const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d', {willReadFrequently: true})
const color = document.getElementById('color')
const changeBtn = document.getElementById('btn')
const cardContainer = document.getElementById('color-cards')

function populateCardContainer(limit) {
    const text = 'populateCardContainer>>:: Choose a limit less than 8'
    if(limit > 13) {
        const card = document.createElement('div')
        card.textContent = text
        cardContainer.append(card)
        console.log(text)
        return
    }

    for(let i = 0; i < limit; i++) {
        const card = document.createElement('div')
        card.classList.add('card')
        cardContainer.appendChild(card)
    }
}

populateCardContainer(8)

function addLinearGradient(type, colorStops) {
    try {

    let gradient = null
    let purity = 20 // increases the saturated region
    if(type === "x") gradient = ctx.createLinearGradient(0,0,canvas.width-purity,0)
    else if(type === "y") gradient = ctx.createLinearGradient(0,0,0,canvas.height)
    else console.log('Linear gradient type is unknown. Provide "x" or "y"')

    gradient.addColorStop(0, colorStops.from)
    gradient.addColorStop(1, colorStops.to)

    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    }
    catch(err) {
        alert("Invalid hue, try another one")
    }
}

let activeCard = prevSelectedCard = cardContainer.firstElementChild
prevSelectedCard.classList.add('active')

addLinearGradient("x", {from: "white", to: color.value})
addLinearGradient("y", {from: "transparent", to: "black"})


color.addEventListener('keyup', (e) => {
    if(e.key === "Enter") {
        addLinearGradient("x", {from: "white", to: color.value})
        addLinearGradient("y", {from: "transparent", to: "black"})
        color.value = ''
    }
})

changeBtn.addEventListener('click', () => {
    addLinearGradient("x", {from: "white", to: color.value})
    addLinearGradient("y", {from: "transparent", to: "black"})
    color.value = ''
})

canvas.addEventListener('click', (e) => {
    // getBoundingClientRect() returns size and pos data about canvas.
    // Used the left and top property to get positional data
    let rgbData = []
    let x = e.clientX - canvas.getBoundingClientRect().left
    let y = e.clientY - canvas.getBoundingClientRect().top

    // x and y must be relative to the canvas
    // hence the x and y calculations
    rgbData = ctx.getImageData(x,y,1,1).data
    console.log(rgbData)

    // Use the rgbData to fill the color cards
    activeCard.style.background = `rgb(${rgbData[0]}, ${rgbData[1]}, ${rgbData[2]})`
})

// Toggle active elem
cardContainer.addEventListener('click', (e) => {
    prevSelectedCard.classList.remove('active')
    activeCard = e.target
    activeCard.classList.add('active')
    prevSelectedCard = activeCard
})