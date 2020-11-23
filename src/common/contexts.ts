import { createContext } from 'react';
import { Orientation } from '@common/types';
import { getOrientation } from './utils';

export
const OrientationContext = createContext<Orientation>(getOrientation());
