
export function animatePanelsOpacity(
		system: HTMLElement,
		panels: HTMLElement[],
	) {

	const thresholds = Array(100).fill(0).map((n, i) => n + i/100)
	const observer = new IntersectionObserver(
		entries => {
			entries.forEach((entry: any) => {
				if (entry.target.hasAttribute("crossfade")) {
					entry.target.style.opacity = entry.intersectionRatio
				}
			})
		},
		{
			root: system,
			rootMargin: '0px',
			threshold: thresholds
		}
	)

	for (const panel of panels)
		observer.observe(panel)
}
