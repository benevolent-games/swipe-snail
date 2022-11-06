
import styleCss from "./style.css.js"
import {noop as html} from "../../utils/template-noop.js"

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
