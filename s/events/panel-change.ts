
export class PanelChangeEvent extends CustomEvent<HTMLElement> {
	constructor(panel: HTMLElement) {
		super("snail_panel_change", {
			bubbles: true,
			cancelable: true,
			composed: true,
			detail: panel,
		})
	}
}
