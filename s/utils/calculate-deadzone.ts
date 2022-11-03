import {State} from "./initialize-state.js"

export function calculateDeadzone(system: HTMLElement, event: MouseEvent | TouchEvent, state: State) {
	if (event.type == "mousemove" && 'clientX' in event) {
		if (state.isDown) {
			if (Math.abs(state.startX - event.clientX) >= 30) {
				if (!system.hasAttribute("data-swipable")) {
					system.setAttribute("data-swipable", "")
				}
			}
		}
	}
	if (event.type == "touchmove" && 'touches' in event) {
		if (state.isDown) {
			if (Math.abs(state.startX - event.touches[0].clientX) >= 30) {
				if (!system.hasAttribute("data-swipable")) {
					system.setAttribute("data-swipable", "")
				}
			}
		}
	}
}
