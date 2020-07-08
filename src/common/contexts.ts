import { createContext } from 'react';
import { PortfolioItem } from './interfaces';

export
const ItemsContext = createContext<PortfolioItem[]>([]);
