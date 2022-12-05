export function initializeState() {
    const state = {
        currentPanel: undefined,
        isDown: false,
        startX: 0,
        scrollLeft: 0,
        isScrolling: undefined,
    };
    const stateActions = {
        initMousePostion(system, event) {
            state.startX = event.pageX - system.offsetLeft;
            state.scrollLeft = system.scrollLeft;
        },
        // stopSwiping(system: HTMLElement) {
        // 	state.startSwiping = false
        // 	system.style.overflowX = "hidden"
        // 	system.removeAttribute("data-grabbed")
        // },
        // onTouchUp(system: HTMLElement) {
        // 	system.style.overflowX = "hidden"
        // 	state.startSwiping = false	
        // 	system.removeAttribute("data-grabbed")
        // }
    };
    return state;
}
//# sourceMappingURL=initialize-state.js.map