export function setCurrentPanelBasedOnIntersection(entry, state, onPanelChange) {
    const panel = entry.target;
    if (entry.intersectionRatio >= 0.5) {
        const isChanged = panel !== state.currentPanel;
        state.currentPanel = panel;
        panel.setAttribute("data-observed", "");
        if (isChanged)
            onPanelChange(panel);
    }
    else
        panel.removeAttribute("data-observed");
}
//# sourceMappingURL=set-current-panel-based-on-intersection.js.map