import { FC, ReactNode, useEffect, useState } from 'react';
import { OrientationContext } from '@common/contexts';
import { getOrientation } from '@common/utils';

interface Props {
	children?: ReactNode;
}

export
const ContextProvider: FC<Props> =  (props) => {
	const [orientation, setOrientation] = useState(getOrientation);

	useEffect(() => {
		window.addEventListener('resize', () => setOrientation(getOrientation()));
	}, []);

	return (
		<>
			<OrientationContext.Provider value={orientation}>
				{props.children}
			</OrientationContext.Provider>
		</>
	);
};
