
import {SnailOptions} from "./types.js"
import {getHomePanel} from "./utils/get-home-panel.js"
import {observePanels} from "./utils/observe-panels.js"
import {applyListeners} from "./utils/apply-listeners.js"
import {initializeState} from "./utils/initialize-state.js"
import {prepareSystemListeners} from "./utils/system-listeners.js"
import {setCurrentPanelBasedOnIntersection} from "./utils/set-current-panel-based-on-intersection.js"
import {animatePanelsOpacity} from "./utils/animate-panels-opacity.js"

export function swipeSnail(options: SnailOptions) {
	const {system, onPanelChange} = options
	const panels = Array.from(options.panels)

	const state = initializeState()
	// const home = getHomePanel(panels)

	// if (home)
	// 	home.scrollIntoView()

	observePanels(
		system,
		panels,
		entry => setCurrentPanelBasedOnIntersection(entry, state, onPanelChange),
	)

	animatePanelsOpacity(system, panels)

	const listeners = prepareSystemListeners(system, state)
	const stopListeners = applyListeners(system, listeners)

	return {
		async go(panel: HTMLElement) {
			panel.scrollIntoView({behavior: "smooth"})
		},
		dispose() {
			stopListeners()
		},
	}
}
