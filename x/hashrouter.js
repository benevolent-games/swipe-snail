export function hashrouter(onChange) {
    let count = 0;
    function hashchange() {
        const { hash } = location;
        const route = (hash === "" || hash === "#")
            ? "#/"
            : hash;
        onChange(route, count++);
    }
    window.addEventListener("hashchange", hashchange);
    return {
        hashchange,
        update(route) {
            history.pushState({}, "", route);
        },
        dispose() {
            window.removeEventListener("hashchange", hashchange);
        },
    };
}
//# sourceMappingURL=hashrouter.js.map