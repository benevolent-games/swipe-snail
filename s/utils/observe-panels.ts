
export function observePanels(
		system: HTMLElement,
		panels: HTMLElement[],
		processEntry: (entry: IntersectionObserverEntry
	) => void) {

	const observer = new IntersectionObserver(
		entries => entries.forEach(processEntry),
		{
			root: system,
			rootMargin: '0px',
			threshold: 0.50
		}
	)

	for (const panel of panels)
		observer.observe(panel)
}
