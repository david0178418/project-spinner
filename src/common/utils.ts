
export
function first<T>(list: T[]) {
	return list[0] || null;
}

export
function last<T>(list: T[]) {
	return list[list.length - 1] || null;
}

export
function notNull<TValue>(value: TValue | null | undefined): value is TValue {
    return value !== null && value !== undefined;
}

export
function range(size: number, startValue = 0) {
	return [ ...Array(size).keys() ].map( i => i + startValue );
}

export
function tuple<T extends any[]>(...args: T): T {
	return args;
}
