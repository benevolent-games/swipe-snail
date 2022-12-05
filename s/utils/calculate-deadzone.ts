import {State} from "./initialize-state.js"

export function calculateDeadzone(system: HTMLElement, event: PointerEvent, state: State) {
	if (event.type == "pointermove" && 'clientX' in event) {
		if (state.isDown) {
			if (Math.abs(state.startX - event.clientX) >= 30) {
				if (!system.hasAttribute("data-swipable")) {
					system.setAttribute("data-swipable", "")
				}
			}
		}
	}
}
