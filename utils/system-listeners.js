import { calculateDeadzone } from "./calculate-deadzone.js";
import { calculateSwipeMovement } from "./calculate-swipe-movement.js";
import { scrollIntoViewAfterScrollEventEnds } from "./scrollintoview-after-scroll-event-ends.js";
export function prepareSystemListeners(system, state) {
    return {
        pointerdown(event) {
            // init pointer position
            state.startX = event.pageX - system.offsetLeft;
            state.scrollLeft = system.scrollLeft;
            state.isDown = true;
            system.setAttribute("data-grabbed", "");
        },
        pointerleave(event) {
            state.isDown = false;
            system.removeAttribute("data-grabbed");
        },
        pointerup(event) {
            const observedSection = document.querySelector("[data-observed]");
            observedSection === null || observedSection === void 0 ? void 0 : observedSection.scrollIntoView({
                behavior: "smooth"
            });
            state.isDown = false;
            system.removeAttribute("data-swipable");
            system.removeAttribute("data-grabbed");
        },
        pointermove(event) {
            event.preventDefault();
            if (!state.isDown)
                return;
            calculateDeadzone(system, event, state);
            calculateSwipeMovement(system, event, state);
        },
        scroll(event) {
            window.clearTimeout(state.isScrolling);
            state.isScrolling = scrollIntoViewAfterScrollEventEnds(system, state);
        },
    };
}
//# sourceMappingURL=system-listeners.js.map