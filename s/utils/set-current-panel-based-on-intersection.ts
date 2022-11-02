import {State} from "./initialize-state.js"

export function setCurrentPanelBasedOnIntersection(
		entry: IntersectionObserverEntry,
		state: State,
		onPanelChange: (panel: HTMLElement) => void,
	) {

	const panel = <HTMLElement>entry.target

	if (entry.intersectionRatio >= 0.5) {
		const isChanged = panel !== state.currentPanel
		state.currentPanel = <HTMLElement>panel
		panel.setAttribute("data-observed", "")
		if (isChanged)
			onPanelChange(panel)
	}

	else
		panel.removeAttribute("data-observed")
}
