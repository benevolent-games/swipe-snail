import {State} from "./initialize-state.js"

export function calculateDeadzone(system: HTMLElement, event: MouseEvent | TouchEvent, state: State) {
	if (event.type == "mousemove" && 'clientX' in event) {
		if (state.isDown) {
			if (Math.abs(state.startX - event.clientX) >= 30) {
				if (!state.startSwiping) {
					state.startSwiping = true
					system.style.overflowX = "scroll"
				}
			}
		}
	}
	if (event.type == "touchmove" && 'touches' in event) {
		if (!state.touchUp) {
			if (Math.abs(state.startX - event.touches[0].clientX) >= 30) {
				if (!state.startSwiping) {
					state.startSwiping = true
					system.style.overflowX = "scroll"
				}
			}
		}
	}
}
