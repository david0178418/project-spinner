import { createContext } from 'react';
import { Orientation } from '@common/types';

export
const OrientationContext = createContext<Orientation>(Orientation.Portrait);
