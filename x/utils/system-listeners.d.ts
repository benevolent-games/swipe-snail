import { State } from "./initialize-state.js";
export declare function prepareSystemListeners(system: HTMLElement, state: State): {
    pointerdown(event: PointerEvent): void;
    pointerleave(event: PointerEvent): void;
    pointerup(event: PointerEvent): void;
    pointermove(event: PointerEvent): void;
    scroll(event: Event): void;
};
