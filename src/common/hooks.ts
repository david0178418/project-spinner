import { useRef, useEffect, useState } from 'react';

export
// src: https://usehooks.com/useEventListener/
function useEventListener<T extends (...args: any[]) => void>(eventName: string, handler: T, element = window){
	// Create a ref that stores handler
	const savedHandler = useRef<T>();
	
	// Update ref.current value if handler changes.
	// This allows our effect below to always get latest handler ...
	// ... without us needing to pass it in effect deps array ...
	// ... and potentially cause effect to re-run every render.
	useEffect(() => {
		savedHandler.current = handler;
	}, [handler]);

	useEffect(() => {
		// Make sure element supports addEventListener
		// On 
		const isSupported = element && element.addEventListener;
		if (!isSupported) return;
		
		// Create event listener that calls handler function stored in ref
		const eventListener = (event: any) => savedHandler.current?.(event);
		
		// Add event listener
		element.addEventListener(eventName, eventListener);
		
		// Remove event listener on cleanup
		return () => {
			element.removeEventListener(eventName, eventListener);
		};
	},
	[eventName, element], // Re-run if eventName or element changes
	);
}

export
// source: https://usehooks.com/useDebounce/
function useDebounce<T>(value: T, delay: number) {
	// State and setters for debounced value
	const [debouncedValue, setDebouncedValue] = useState(value);

	useEffect(() => {
		// Update debounced value after delay
		const handler = setTimeout(() => {
			setDebouncedValue(value);
		}, delay);

		// Cancel the timeout if value changes (also on delay change or unmount)
		// This is how we prevent debounced value from updating if value is changed ...
		// .. within the delay period. Timeout gets cleared and restarted.
		return () => {
			clearTimeout(handler);
		};
	// Only re-call effect if value or delay changes
	}, [value, delay]);

	return debouncedValue;
}
