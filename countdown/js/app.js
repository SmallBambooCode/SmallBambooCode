const fireworkContainer = document.querySelector('.fireworks-container')
const daysSpan = document.querySelector('#days')
const hoursSpan = document.querySelector('#hours')
const minutesSpan = document.querySelector('#minutes')
const secondsSpan = document.querySelector('#seconds')
const newYear = document.querySelector('#new-year')

const now = new Date()

newYear.innerHTML = 2026 // 直接设定为2025年

// 目标日期为2025年1月29日
const countToDate = new Date(2026, 1, 1).getTime()

const countdown = () => {
    const now = new Date().getTime()

    const distance = countToDate - now

    const days = Math.floor(distance / (1000 * 60 * 60 * 24))
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((distance % (1000 * 60)) / 1000)

    daysSpan.innerHTML = days
    hoursSpan.innerHTML = hours
    minutesSpan.innerHTML = minutes
    secondsSpan.innerHTML = seconds

    if (distance < 0) {
        clearInterval(countdownInterval)
    }
}

countdown()

const countdownInterval = setInterval(countdown, 1000)

const fireworks = new Fireworks(fireworkContainer, {
    speed: 1,
    acceleration: 1.01,
    friction: 1,
    gravity: 4,
    particles: 100,
    explosion: 2
})

fireworks.start()
