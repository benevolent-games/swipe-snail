
export function getHomePanel(panels: HTMLElement[]): HTMLElement | undefined {

	for (const panel of panels)
		if (panel.hasAttribute("data-home"))
			return panel
	
	return undefined
}
