export function calculateDeadzone(system, event, state) {
    if (event.type == "pointermove" && 'clientX' in event) {
        if (state.isDown) {
            if (Math.abs(state.startX - event.clientX) >= 30) {
                if (!system.hasAttribute("data-swipable")) {
                    system.setAttribute("data-swipable", "");
                }
            }
        }
    }
}
//# sourceMappingURL=calculate-deadzone.js.map