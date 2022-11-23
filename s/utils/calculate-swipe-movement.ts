import {State} from "./initialize-state.js"

export function calculateSwipeMovement(system: HTMLElement, event: PointerEvent, state: State) {
	if (event.type == "pointermove" && 'pageX' in event) {
		const x = event.pageX - system.offsetLeft
		const deviation = x - state.startX
			if (system.hasAttribute("data-swipable")) {
				system.scrollLeft = state.scrollLeft - deviation
			}
	}
}
