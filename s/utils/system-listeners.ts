
import {calculateDeadzone} from "./calculate-deadzone.js"
import {calculateSwipeMovement} from "./calculate-swipe-movement.js"
import {State} from "./initialize-state.js"
import {scrollIntoViewAfterScrollEventEnds} from "./scrollintoview-after-scroll-event-ends.js"

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
			system.removeAttribute("data-swipable")
			system.removeAttribute("data-grabbed")
		},

		mousemove(event: MouseEvent) {
			event.preventDefault()
			if (!state.isDown) return
			calculateDeadzone(system, event, state)
			calculateSwipeMovement(system, event, state)
		},

		touchmove(event: TouchEvent) {
			if (!state.isDown) return
			calculateDeadzone(system, event, state)
			calculateSwipeMovement(system, event, state)
		},

		touchend(event: TouchEvent) {
			const observedSection = document.querySelector("[data-observed]")!
			const coordinates = observedSection.getBoundingClientRect().x
			if (!state.isScrolling) {
				system.scrollBy({
				top: 0,
				left: coordinates,
				behavior: 'smooth'
				})
			}
			state.isDown = false
			system.removeAttribute("data-swipable")
			system.removeAttribute("data-grabbed")
		},

		touchstart(event: TouchEvent) {
			state.isDown = true
			system.setAttribute("data-grabbed", "")
		},

		scroll(event: Event) {
			window.clearTimeout(state.isScrolling)
			state.isScrolling = scrollIntoViewAfterScrollEventEnds(system, state)
		},
	}
}
