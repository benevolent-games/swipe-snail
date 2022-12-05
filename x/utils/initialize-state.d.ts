export type State = ReturnType<typeof initializeState>;
export declare function initializeState(): {
    currentPanel: HTMLElement | undefined;
    isDown: boolean;
    startX: number;
    scrollLeft: number;
    isScrolling: any;
};
