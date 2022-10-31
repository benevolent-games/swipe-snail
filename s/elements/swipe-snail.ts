
import {swipeSnail} from "../snail.js"
import {PanelChangeEvent} from "../events/panel-change.js"

export class SwipeSnail extends HTMLElement {
	go: (panel: HTMLElement) => Promise<void>

	constructor() {
		super()

		const snail = swipeSnail({
			system: this,
			panels: this.querySelectorAll("swipe-panel"),
			onPanelChange: panel => {
				this.dispatchEvent(new PanelChangeEvent(panel))
			}
		})

		this.go = snail.go
	}
}
