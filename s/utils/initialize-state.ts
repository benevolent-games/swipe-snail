
export type State = ReturnType<typeof initializeState>

export function initializeState() {

	const state = {
		currentPanel: <HTMLElement | undefined>undefined,
		isDown: false,
		touchUp: false,
		startX: 0,
		scrollLeft: 0,
		startSwiping: false,
		isScrolling: <any>undefined,
	}

	return state
}
