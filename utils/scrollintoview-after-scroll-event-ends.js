export function scrollIntoViewAfterScrollEventEnds(system, state) {
    return setTimeout(() => {
        if (!state.isDown) {
            const observedSection = document.querySelector("[data-observed]");
            observedSection === null || observedSection === void 0 ? void 0 : observedSection.scrollIntoView({
                behavior: "smooth",
            });
        }
        system.removeAttribute("data-swipable");
    }, 66);
}
//# sourceMappingURL=scrollintoview-after-scroll-event-ends.js.map