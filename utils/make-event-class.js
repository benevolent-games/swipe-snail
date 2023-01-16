export function makeEventClass(eventName) {
    var _a;
    return _a = class MyEvent extends CustomEvent {
            static listen(...elements) {
                return {
                    handle: (func) => {
                        for (const element of elements)
                            element.addEventListener(eventName, func);
                        return () => {
                            for (const element of elements)
                                element.removeEventListener(eventName, func);
                        };
                    }
                };
            }
            constructor(detail) {
                super(eventName, {
                    bubbles: true,
                    cancelable: true,
                    composed: true,
                    detail,
                });
            }
        },
        _a.eventName = eventName,
        _a;
}
//# sourceMappingURL=make-event-class.js.map