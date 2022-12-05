import { SnailOptions } from "./types.js";
export declare function setupSnailBehavior(options: SnailOptions): {
    go(panel: HTMLElement): Promise<void>;
    goInstantly(panel: HTMLElement): void;
    dispose(): void;
};
