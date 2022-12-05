export declare function applyListeners(system: HTMLElement, listeners: {
    [eventName: string]: (event: Event & any) => void;
}): () => void;
