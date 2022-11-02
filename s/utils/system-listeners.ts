
import {State} from "./initialize-state.js"

export function prepareSystemListeners(system: HTMLElement, state: State) {
	return {

		mousedown(event: MouseEvent) {
			let pageX = event.pageX
			state.isDown = true
			system.setAttribute("data-grabbed", "")
			state.startX = pageX - system.offsetLeft
			state.scrollLeft = system.scrollLeft
		},

		mouseleave(event: MouseEvent) {
			state.isDown = false
			system.removeAttribute("data-grabbed")
		},

		mouseup(event: MouseEvent) {
			const observedSection = document.querySelector("[data-observed]")
			observedSection?.scrollIntoView({
				behavior: "smooth"
			})
			state.isDown = false
			state.startSwiping = false
			system.style.overflowX = "hidden"
			system.removeAttribute("data-grabbed")
		},

		mousemove(event: MouseEvent) {
			if (state.isDown) {
				if (Math.abs(state.startX - event.clientX) >= 30) {
					if (!state.startSwiping) {
						state.startSwiping = true
						system.style.overflowX = "scroll"
					}
				}
			}
			if (!state.isDown) return
	
			event.preventDefault() //stop any weird stuff
	
			const x = event.pageX - system.offsetLeft
			const deviation = x - state.startX
			if (state.startSwiping) {
				system.scrollLeft = state.scrollLeft - deviation
			}
		},

		touchmove(event: TouchEvent) {
			if (!state.touchUp) {
				if (Math.abs(state.startX - event.touches[0].clientX) >= 30) {
					if (!state.startSwiping) {
						system.style.overflowX = "scroll"
						state.startSwiping = true
					}
					
				}
			}
			if (state.touchUp) return
	
			event.preventDefault() //stop any weird stuff
	
			const x = event.touches[0].pageX - system.offsetLeft
			const deviation = x - state.startX
			if (state.startSwiping) {
				system.scrollLeft = state.scrollLeft - deviation
			}
		},

		touchend(event: TouchEvent) {
			const observedSection = document.querySelector("[data-observed]")!
			const coordinates = observedSection.getBoundingClientRect().x
			state.touchUp = true
			if (!state.isScrolling) {
				system.scrollBy({
				top: 0,
				left: coordinates,
				behavior: 'smooth'
				})
			}
			system.style.overflowX = "hidden"
			state.startSwiping = false	
			system.removeAttribute("data-grabbed")
		},

		touchstart(event: TouchEvent) {
			system.setAttribute("data-grabbed", "")
			state.touchUp = false
		},

		// after scroll event (swiping) ends, scroll into observed view
		// this thing is needed for mobiles where scrolling works differently to avoid
		// weird stuff happening before the scroll event ends
		scroll(event: Event) {

			// Clear our timeout throughout the scroll
			window.clearTimeout(state.isScrolling)

			// Set a timeout to run after scrolling ends
			state.isScrolling = setTimeout(() => {
				if (state.touchUp && !state.isDown) {
					const observedSection = document.querySelector("[data-observed]")
					observedSection?.scrollIntoView({
						behavior: "smooth",
					})
				}
				state.isScrolling = false
				system.style.overflowX = "hidden"
			}, 66)
		},
	}
}
