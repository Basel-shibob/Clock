const scondHand = document.querySelector('.scond-hand')
const minHand = document.querySelector('.min-hand')
const hourHand = document.querySelector('.hour-hand')

function setDate() {
    const now = new Date()
    const hour = now.getHours()
    const minutes = now.getMinutes()
    const sconds = now.getSeconds()
    const scondsDgrees = ((sconds / 60) * 360) + 90
    const hourDgrees = ((hour / 12) * 360) + 90
    const minDgrees = ((minutes / 60) * 360) + 90
    scondHand.style.transform = `rotate(${scondsDgrees}deg)`
    minHand.style.transform = `rotate(${minDgrees}deg)`
    hourHand.style.transform = `rotate(${hourDgrees}deg)`

}

setInterval(setDate,1000)