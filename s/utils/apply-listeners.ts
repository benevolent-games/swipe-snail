
export function applyListeners(
		system: HTMLElement,
		listeners: {
			[eventName: string]: (event: Event & any) => void
		},
	) {

	const unlisteners = new Set<() => void>()

	for (const [eventName, listener] of Object.entries(listeners)) {
		system.addEventListener(eventName, <any>listener)
		unlisteners.add(() => {
			system.removeEventListener(eventName, <any>listener)
		})
	}

	return () => {
		for (const unlistener of unlisteners)
			unlistener()

		unlisteners.clear()
	}
}
