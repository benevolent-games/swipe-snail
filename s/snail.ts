
import {SnailOptions} from "./types.js"

export function swipeSnail(options: SnailOptions) {
	const {system, onPanelChange} = options
	const panels = Array.from(options.panels)
	let isDown = false
	let touchUp = false
	let startX: number
	let scrollLeft: number
	let isScrolling: any
	let startSwiping = false
	let ioOptions = {
		root: system,
		rootMargin: '0px',
		threshold: 0.50
	}
	// start at home view
	const home = document.querySelector("[data-home]")
	home?.scrollIntoView()

	const io = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			if (entry.intersectionRatio >= 0.50) {
				entry.target.setAttribute('data-observed', "");
			} else {
				entry.target.removeAttribute('data-observed')
			}
		})
	}, ioOptions)
		
	panels.forEach((el) => {
		io.observe(el)
	})

	system.addEventListener("mousedown", e => {
		let pageX = e.pageX
		isDown = true
		system.setAttribute("data-grabbed", "")
		startX = pageX - system.offsetLeft
		scrollLeft = system.scrollLeft
	})

	system.addEventListener("mouseleave", () => {
		isDown = false
		system.removeAttribute("data-grabbed")
	})

	system.addEventListener("mouseup", () => {
		const observedSection = document.querySelector("[data-observed]")
		observedSection?.scrollIntoView({
			behavior: "smooth"
		})
		isDown = false
		startSwiping = false
		system.style.overflowX = "hidden"
		system.removeAttribute("data-grabbed")
	})

	system.addEventListener("mousemove", e => {
		if (isDown) {
			if (Math.abs(startX - e.clientX) >= 30) {
				if (!startSwiping) {
					startSwiping = true
					system.style.overflowX = "scroll"
				}
				
			}
		}
		if (!isDown) return

		e.preventDefault() //stop any weird stuff

		const x = e.pageX - system.offsetLeft
		const deviation = x - startX
		if (startSwiping) {
			system.scrollLeft = scrollLeft - deviation
		}
	})

	system.addEventListener("touchmove", e => {
		if (!touchUp) {
			if (Math.abs(startX - e.touches[0].clientX) >= 30) {
				if (!startSwiping) {
					system.style.overflowX = "scroll"
					startSwiping = true
				}
				
			}
		}
		if (touchUp) return

		e.preventDefault() //stop any weird stuff

		const x = e.touches[0].pageX - system.offsetLeft
		const deviation = x - startX
		if (startSwiping) {
			system.scrollLeft = scrollLeft - deviation
		}
	})


	system.addEventListener("touchend", () => {
		const observedSection = document.querySelector("[data-observed]")!
		const coordinates = observedSection.getBoundingClientRect().x
		touchUp = true
		if (!isScrolling) {
			system.scrollBy({
			top: 0,
			left: coordinates,
			behavior: 'smooth'
			})
		}
		system.style.overflowX = "hidden"
		startSwiping = false	
		system.removeAttribute("data-grabbed")
	})

	system.addEventListener('touchstart', () => {
		system.setAttribute("data-grabbed", "")
		touchUp = false
	})
	// after scroll event (swiping) ends, scroll into observed view
	// this thing is needed for mobiles where scrolling works differently to avoid
	// weird stuff happening before the scroll event ends
	
	system.addEventListener('scroll', e  => {
		// Clear our timeout throughout the scroll
		window.clearTimeout( isScrolling )

		// Set a timeout to run after scrolling ends
		isScrolling = setTimeout(() => {
			if (touchUp && !isDown) {
			const observedSection = document.querySelector("[data-observed]")
			observedSection?.scrollIntoView({
				behavior: "smooth",
			})
			}
			isScrolling = false
			system.style.overflowX = "hidden"
		}, 66)

	}, false)
	console.log("swipe snail!", {system, onPanelChange, panels})

	return {
		async go(panel: HTMLElement) {
			panel.scrollIntoView({
			behavior: "smooth"
		})
		},
	}
}
