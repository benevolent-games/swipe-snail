
export class SnailPanel extends HTMLElement {

	shadow = this.attachShadow({
		mode: "open",
		delegatesFocus: false,
		slotAssignment: "named",
	})

	constructor() {
		super()
		this.shadow.innerHTML = `
			<slot></slot>
		`
	}
}
