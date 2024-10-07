const arrowLeft = document.querySelector('.arrow-left')
const arrowRight = document.querySelector('.arrow-right')
const arrows = document.querySelectorAll('.arrow')
const heroImage = document.querySelector('.hero-image')
const heroText = document.querySelector('.hero-text')
const heroHeader = document.querySelector('.hero-text h1')
const heroDescription = document.querySelector('.hero-text p')
const triggers = document.querySelectorAll('.main-menu li')
const underline = document.querySelector('.underline')
const nav = document.querySelector('.nav')
const main = document.getElementById('main-container')

const text = [
	{
		h1: 'Discover innovative ways to decorate',
		p: 'We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.',
	},
	{
		h1: 'We are available all across the globe',
		p: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
	},
	{
		h1: 'Manufactured with the best materials',
		p: 'Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.',
	},
]

let heroPosition = 1

function changeHero(e) {
	let mainWidth = main.getBoundingClientRect().width
	heroText.classList.remove('show')

	const button = e.target.classList[1]
	button === 'arrow-left' ? heroPosition-- : heroPosition++
	heroPosition === 0 ? (heroPosition = 3) : heroPosition
	heroPosition === 4 ? (heroPosition = 1) : heroPosition
	if (mainWidth > 400) {
		heroImage.style.backgroundImage = `url('images/desktop-image-hero-${heroPosition}.jpg')`
	} else {
		heroImage.style.backgroundImage = `url('images/mobile-image-hero-${heroPosition}.jpg')`
	}
	setTimeout(() => {
		heroHeader.innerText = text[heroPosition - 1].h1
		heroDescription.innerText = text[heroPosition - 1].p
		heroText.classList.add('show')
	}, 240)
}

arrows.forEach((arrow) => {
	arrow.addEventListener('click', changeHero)
})

// heroPosition++
// heroImage.style.background = `
//   url('images/desktop-image-hero-${heroPosition}.jpg') center center/cover
// no-repeat;
// `

function handleEnter() {
	this.classList.add('trigger-enter')
	underline.classList.add('open')
	setTimeout(() => {
		this.classList.contains('trigger-enter') &&
			this.classList.add('trigger-enter-active')
	}, 150)
	const navCoords = nav.getBoundingClientRect()
	console.log(navCoords)
	const navHeight = navCoords.top
	console.log({ navHeight })
	const navX = navCoords.x - 6
	let width = this.getBoundingClientRect().width * 0.8
	const itemCoords = this.getBoundingClientRect()
	console.log(itemCoords)
	console.log({ width })
	const top = this.getBoundingClientRect().top
	const left = this.getBoundingClientRect().left
	const thisHeight = this.getBoundingClientRect().height
	console.log({ top })
	console.log({ left })
	console.log('minus', top - navHeight)
	underline.style.width = `${width * 0.6}px`
	underline.style.transform = `translate(${left - navX + width / 5}px,${
		top - thisHeight + 5
	}px)`
	// underline.style.transform = `translate(${left - navX}px,${top - navHeight})`
}

function handleLeave() {
	this.classList.remove('trigger-enter', 'trigger-enter-active')
	underline.classList.remove('open')
}

triggers.forEach((trigger) => {
	trigger.addEventListener('mouseenter', handleEnter)
})
triggers.forEach((trigger) => {
	trigger.addEventListener('mouseleave', handleLeave)
})

window.addEventListener('resize', () => {
	console.log(window.innerWidth)
	if (window.innerWidth > 686) {
		heroImage.style.backgroundImage = `url('images/desktop-image-hero-${heroPosition}.jpg')`
	} else {
		heroImage.style.backgroundImage = `url('images/mobile-image-hero-${heroPosition}.jpg')`
	}
})

window.addEventListener('DOMContentLoaded', () => {
	heroHeader.innerText = text[heroPosition - 1].h1
	heroText.classList.add('show')
})
