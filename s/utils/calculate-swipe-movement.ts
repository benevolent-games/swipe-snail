import {State} from "./initialize-state.js"

export function calculateSwipeMovement(system: HTMLElement, event: MouseEvent | TouchEvent, state: State) {
	if (event.type == "mousemove" && 'pageX' in event) {
		const x = event.pageX - system.offsetLeft
		const deviation = x - state.startX
			if (state.startSwiping) {
				system.scrollLeft = state.scrollLeft - deviation
			}
	}
	if (event.type == "touchmove" && 'touches' in event) {
		const x = event.touches[0].pageX - system.offsetLeft
		const deviation = x - state.startX
			if (state.startSwiping) {
				system.scrollLeft = state.scrollLeft - deviation
			}
	}
}
