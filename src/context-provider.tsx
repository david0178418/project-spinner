import React, { ReactNode } from 'react';

interface Props {
	children?: ReactNode;
}

export
function ContextProvider(props: Props) {
	return (
		<>
			{props.children}
		</>
	);
}
