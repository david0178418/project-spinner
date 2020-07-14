import { createContext } from 'react';
import { Orientation } from '@common/interfaces';

export
const OrientationContext = createContext<Orientation>(Orientation.Portrait)
