import React, { FC, useContext } from 'react';
import clsx from 'clsx';
import { OrientationContext } from '@common/contexts';
import { Orientation } from '@common/types';

export
const OrientationWrapper: FC = ({children}) => {
	const orientation = useContext(OrientationContext);
	return (
		<div className={clsx({
			portrait: orientation === Orientation.Portrait,
			landscape: orientation === Orientation.Landscape,
		})}>
			{children}
		</div>
	);
};
