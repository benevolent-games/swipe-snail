export declare class SnailSystem extends HTMLElement {
    static readonly events: {
        PanelChangeEvent: {
            new (detail: HTMLElement): {
                readonly detail: HTMLElement;
                initCustomEvent(type: string, bubbles?: boolean | undefined, cancelable?: boolean | undefined, detail?: HTMLElement | undefined): void;
                readonly bubbles: boolean;
                cancelBubble: boolean;
                readonly cancelable: boolean;
                readonly composed: boolean;
                readonly currentTarget: EventTarget | null;
                readonly defaultPrevented: boolean;
                readonly eventPhase: number;
                readonly isTrusted: boolean;
                returnValue: boolean;
                readonly srcElement: EventTarget | null;
                readonly target: EventTarget | null;
                readonly timeStamp: number;
                readonly type: string;
                composedPath(): EventTarget[];
                initEvent(type: string, bubbles?: boolean | undefined, cancelable?: boolean | undefined): void;
                preventDefault(): void;
                stopImmediatePropagation(): void;
                stopPropagation(): void;
                readonly AT_TARGET: number;
                readonly BUBBLING_PHASE: number;
                readonly CAPTURING_PHASE: number;
                readonly NONE: number;
            };
            readonly eventName: string;
            listen(...elements: HTMLElement[]): {
                handle: (func: (event: {
                    readonly detail: HTMLElement;
                    initCustomEvent(type: string, bubbles?: boolean | undefined, cancelable?: boolean | undefined, detail?: HTMLElement | undefined): void;
                    readonly bubbles: boolean;
                    cancelBubble: boolean;
                    readonly cancelable: boolean;
                    readonly composed: boolean;
                    readonly currentTarget: EventTarget | null;
                    readonly defaultPrevented: boolean;
                    readonly eventPhase: number;
                    readonly isTrusted: boolean;
                    returnValue: boolean;
                    readonly srcElement: EventTarget | null;
                    readonly target: EventTarget | null;
                    readonly timeStamp: number;
                    readonly type: string;
                    composedPath(): EventTarget[];
                    initEvent(type: string, bubbles?: boolean | undefined, cancelable?: boolean | undefined): void;
                    preventDefault(): void;
                    stopImmediatePropagation(): void;
                    stopPropagation(): void;
                    readonly AT_TARGET: number;
                    readonly BUBBLING_PHASE: number;
                    readonly CAPTURING_PHASE: number;
                    readonly NONE: number;
                }) => void) => () => void;
            };
        };
    };
    go: (panel: HTMLElement) => Promise<void>;
    goInstantly: (panel: HTMLElement) => void;
    shadow: ShadowRoot;
    constructor();
}
