import { OrientationContext } from '@common/contexts';
import { Orientation } from '@common/interfaces';
import clsx from 'clsx'
import React,  { FC, useContext } from 'react';

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
