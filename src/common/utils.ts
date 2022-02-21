import { Orientation } from './types';

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

export
function uuid() {
	return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
		// eslint-disable-next-line eqeqeq, no-mixed-operators
		const r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
		return v.toString(16);
	});
}


export
function getOrientation() {
	return window.innerWidth / window.innerHeight < 0.77 ?
		Orientation.Portrait :
		Orientation.Landscape;
}
