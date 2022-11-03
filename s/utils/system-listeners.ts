
import {calculateDeadzone} from "./calculate-deadzone.js"
import {calculateSwipeMovement} from "./calculate-swipe-movement.js"
import {State} from "./initialize-state.js"

export function prepareSystemListeners(system: HTMLElement, state: State) {
	return {

		mousedown(event: MouseEvent) {
			// init mouse position
			state.startX = event.pageX - system.offsetLeft
			state.scrollLeft = system.scrollLeft

			state.isDown = true
			system.setAttribute("data-grabbed", "")
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
			event.preventDefault()
			if (!state.isDown) return
			calculateDeadzone(system, event, state)
			calculateSwipeMovement(system, event, state)
		},

		touchmove(event: TouchEvent) {
			event.preventDefault()
			if (state.touchUp) return
			calculateDeadzone(system, event, state)
			calculateSwipeMovement(system, event, state)
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
