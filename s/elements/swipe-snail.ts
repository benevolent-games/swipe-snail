
import {swipeSnail} from "../snail.js"
import {PanelChangeEvent} from "../events/panel-change.js"

export class SwipeSnail extends HTMLElement {
	go: (panel: HTMLElement) => Promise<void>
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
				width: 100%;
				display: block;
				text-align: center;
				overflow-x: scroll;
				overflow-y: hidden;
				white-space: nowrap;
				user-select: none;
				cursor: pointer;
				/* im not sure if these two under are needed*/
				transition: all 0.2s;
				will-change: transform;
			}
			:host-context([data-grabbed]) {
				cursor: grabbing;
				cursor: -webkit-grabbing;
			}
			:host::-webkit-scrollbar {
				width: 10px;
				height: 0px;
			})
			:host::-webkit-scrollbar-track {
  			background: #f1f1f1; 
			}
			:host::-webkit-scrollbar-thumb {
				background: #888; 
			}
			</style>
			<slot></slot>
		`
		const snail = swipeSnail({
			system: this,
			panels: this.querySelectorAll("snail-panel"),
			onPanelChange: panel => {
				this.dispatchEvent(new PanelChangeEvent(panel))
			}
		})

		this.go = snail.go
	}
}
