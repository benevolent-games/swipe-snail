
export interface SnailOptions {
	system: HTMLElement
	panels: HTMLElement[] | NodeListOf<HTMLElement>
	onPanelChange: (panel: HTMLElement) => void
}
