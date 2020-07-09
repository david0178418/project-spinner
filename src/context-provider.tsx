import React, { FC } from 'preact/compat';

interface Props {
}

export
const ContextProvider: FC<Props> =  (props) => {
	return (
		<>
			{props.children}
		</>
	);
}
