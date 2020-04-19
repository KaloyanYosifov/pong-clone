export const tap = <T>(value: T, callback: (value: T) => void) => {
    callback(value);
    return value;
};
