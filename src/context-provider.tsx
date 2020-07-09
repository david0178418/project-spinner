import React, { FC } from 'react';

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
