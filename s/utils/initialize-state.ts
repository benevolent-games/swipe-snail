
export type State = ReturnType<typeof initializeState>

export function initializeState() {

	const state = {
		currentPanel: <HTMLElement | undefined>undefined,
		isDown: false,
		startX: 0,
		scrollLeft: 0,
		isScrolling: <any>undefined,
	}
	const stateActions = {
		initMousePostion(system: HTMLElement, event: MouseEvent) {
			state.startX = event.pageX - system.offsetLeft
			state.scrollLeft = system.scrollLeft
		},
		// stopSwiping(system: HTMLElement) {
		// 	state.startSwiping = false
		// 	system.style.overflowX = "hidden"
		// 	system.removeAttribute("data-grabbed")
		// },
		// onTouchUp(system: HTMLElement) {
		// 	system.style.overflowX = "hidden"
		// 	state.startSwiping = false	
		// 	system.removeAttribute("data-grabbed")
		// }
	}
	return state
}
