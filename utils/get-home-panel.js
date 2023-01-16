export function getHomePanel(panels) {
    for (const panel of panels)
        if (panel.hasAttribute("data-home"))
            return panel;
    return undefined;
}
//# sourceMappingURL=get-home-panel.js.map