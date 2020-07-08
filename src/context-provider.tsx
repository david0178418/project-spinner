import React, { FC } from 'react';
import { ItemsContext } from '@common/contexts';
import { items } from './data';

interface Props {
}

export
const ContextProvider: FC<Props> =  (props) => {
	return (
		<ItemsContext.Provider value={items}>
			{props.children}
		</ItemsContext.Provider>
	);
}
