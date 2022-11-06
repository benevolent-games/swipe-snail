
export class PanelChangeEvent extends CustomEvent<HTMLElement> {
	static eventName = "snail_panel_change"

	constructor(panel: HTMLElement) {
		super(PanelChangeEvent.eventName, {
			bubbles: true,
			cancelable: true,
			composed: true,
			detail: panel,
		})
	}
}
