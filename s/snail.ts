
import {swipeSystem} from "./swipe-system.js"
import {SnailOptions} from "./types.js"

export function swipeSnail(options: SnailOptions) {
	const {system, onPanelChange} = options
	const panels = Array.from(options.panels)
	swipeSystem(system, panels)
	console.log("swipe snail!", {system, onPanelChange, panels})

	return {
		async go(panel: HTMLElement) {},
	}
}
