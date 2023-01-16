export function applyListeners(system, listeners) {
    const unlisteners = new Set();
    for (const [eventName, listener] of Object.entries(listeners)) {
        system.addEventListener(eventName, listener);
        unlisteners.add(() => {
            system.removeEventListener(eventName, listener);
        });
    }
    return () => {
        for (const unlistener of unlisteners)
            unlistener();
        unlisteners.clear();
    };
}
//# sourceMappingURL=apply-listeners.js.map