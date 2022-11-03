
export class SnailPanel extends HTMLElement {

	shadow = this.attachShadow({
		mode: "open",
		delegatesFocus: false,
		slotAssignment: "named",
	})

	constructor() {
		super()
		this.shadow.innerHTML = `
			<style>
			:host { 
				display: inline-flex;
				width: 100%;
				height: 100vh;
				text-align: center;
				vertical-align:top;
				align-items: center;
				justify-content: center;
				flex-wrap: wrap;
				box-shadow: inset 0 0 0 10px rgba(0, 0, 0, 0.15);
				overflow: auto;
				padding: 1em;
				word-break: break-all;
				white-space: normal;
			}
			</style>
			<slot></slot>
		`
	}
}
