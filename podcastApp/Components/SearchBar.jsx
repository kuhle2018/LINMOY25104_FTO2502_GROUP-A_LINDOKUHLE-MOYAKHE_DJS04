import { createContext, useContext, useReducer } from 'react';

const PodcastContext = createContext();

const initialState = {
  podcasts: [],
  searchTerm: '',
  selectedGenres: [],
  sortBy: 'newest',
  currentPage: 1,
};

function reducer(state, action) {
  switch (action.type) {
    case 'SET_PODCASTS':
      return { ...state, podcasts: action.payload };
    case 'SEARCH':
      return { ...state, searchTerm: action.payload };
    case 'FILTER':
      return { ...state, selectedGenres: action.payload };
    case 'SORT':
      return { ...state, sortBy: action.payload };
    case 'PAGE':
      return { ...state, currentPage: action.payload };
    default:
      return state;
  }
}

export function PodcastProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <PodcastContext.Provider value={{ state, dispatch }}>
      {children}
    </PodcastContext.Provider>
  );
}

export const usePodcastContext = () => useContext(PodcastContext);
