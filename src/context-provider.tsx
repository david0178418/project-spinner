import React, { FC, useEffect, useState } from 'react';
import { OrientationContext } from '@common/contexts';
import { Orientation } from '@common/interfaces';

function getOrientation() {
	return window.innerWidth / window.innerHeight < 3/4 ?
		Orientation.Portrait :
		Orientation.Landscape;
}

interface Props {
}

export
const ContextProvider: FC<Props> =  (props) => {
	const [orientation, setOrientation] = useState(Orientation.Portrait)

	useEffect(() => {
		setOrientation(getOrientation());

		window.addEventListener('resize', () => setOrientation(getOrientation()));
	}, []);

	return (
		<>
			<OrientationContext.Provider value={orientation}>
				{props.children}
			</OrientationContext.Provider>
		</>
	);
}
