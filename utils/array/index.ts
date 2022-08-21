export function normalizeToArray<T>(arg: T) {
    return Array.isArray(arg) ? arg : [arg];
}