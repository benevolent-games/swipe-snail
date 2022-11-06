
import styleCss from "./style.css.js"
import {noop as html} from "../../utils/template-noop.js"
import {PanelChangeEvent} from "../../events/panel-change.js"
import {setupSnailBehavior} from "../../setup-snail-behavior.js"

export class SnailSystem extends HTMLElement {

	static readonly events = {
		PanelChangeEvent,
	}

	go: (panel: HTMLElement) => Promise<void>
	goInstantly: (panel: HTMLElement) => void

	shadow = this.attachShadow({
		mode: "open",
		delegatesFocus: false,
		slotAssignment: "named",
	})

	constructor() {
		super()

		this.shadow.innerHTML = html`
			<style>${styleCss}</style>
			<slot></slot>
		`

		const snail = setupSnailBehavior({
			system: this,
			panels: this.querySelectorAll("snail-panel"),
			onPanelChange: panel => {
				this.dispatchEvent(new PanelChangeEvent(panel))
			},
		})

		this.go = snail.go
		this.goInstantly = snail.goInstantly
	}
}
