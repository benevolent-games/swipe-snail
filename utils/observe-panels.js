export function observePanels(system, panels, processEntry) {
    const observer = new IntersectionObserver(entries => entries.forEach(processEntry), {
        root: system,
        rootMargin: '0px',
        threshold: 0.50
    });
    for (const panel of panels)
        observer.observe(panel);
}
//# sourceMappingURL=observe-panels.js.map