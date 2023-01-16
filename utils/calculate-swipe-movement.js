export function calculateSwipeMovement(system, event, state) {
    if (event.type == "pointermove" && 'pageX' in event) {
        const x = event.pageX - system.offsetLeft;
        const deviation = x - state.startX;
        if (system.hasAttribute("data-swipable")) {
            system.scrollLeft = state.scrollLeft - deviation;
        }
    }
}
//# sourceMappingURL=calculate-swipe-movement.js.map