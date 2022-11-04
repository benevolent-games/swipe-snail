
import {noop as html} from "../../utils/template-noop.js"
import styleCss from "./style.css.js"

export class SnailPanel extends HTMLElement {

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
	}
}
