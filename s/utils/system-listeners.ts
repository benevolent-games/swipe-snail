
import {calculateDeadzone} from "./calculate-deadzone.js"
import {calculateSwipeMovement} from "./calculate-swipe-movement.js"
import {State} from "./initialize-state.js"
import {scrollIntoViewAfterScrollEventEnds} from "./scrollintoview-after-scroll-event-ends.js"

export function prepareSystemListeners(system: HTMLElement, state: State) {

	return {

		pointerdown(event: PointerEvent) {
			// init pointer position
			state.startX = event.pageX - system.offsetLeft
			state.scrollLeft = system.scrollLeft

			state.isDown = true
			system.setAttribute("data-grabbed", "")
		},

		pointerleave(event: PointerEvent) {
			state.isDown = false
			system.removeAttribute("data-grabbed")
		},

		pointerup(event: PointerEvent) {
			const observedSection = document.querySelector("[data-observed]")
			observedSection?.scrollIntoView({
				behavior: "smooth"
			})
			state.isDown = false
			system.removeAttribute("data-swipable")
			system.removeAttribute("data-grabbed")
		},

		pointermove(event: PointerEvent) {
			event.preventDefault()
			if (!state.isDown) return
			calculateDeadzone(system, event, state)
			calculateSwipeMovement(system, event, state)
		},

		scroll(event: Event) {
			window.clearTimeout(state.isScrolling)
			state.isScrolling = scrollIntoViewAfterScrollEventEnds(system, state)
		},
	}
}
