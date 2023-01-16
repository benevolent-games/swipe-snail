export declare function hashrouter(onChange: (route: string, count: number) => void): {
    hashchange: () => void;
    update(route: string): void;
    dispose(): void;
};
