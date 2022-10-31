
import {SnailOptions} from "./types.js"

export function swipeSnail(options: SnailOptions) {
	const {system, onPanelChange} = options
	const panels = Array.from(options.panels)

	console.log("swipe snail!", {system, onPanelChange, panels})

	return {
		async go(panel: HTMLElement) {},
	}
}
