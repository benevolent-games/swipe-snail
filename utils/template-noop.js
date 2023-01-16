export function noop(strings, ...values) {
    const lastIndex = strings.length - 1;
    return strings
        .slice(0, lastIndex)
        .reduce((a, b, c) => a + b + values[c], "")
        + strings[lastIndex];
}
export function strings(strings, ...values) {
    return strings;
}
//# sourceMappingURL=template-noop.js.map