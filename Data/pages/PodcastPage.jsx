import { useEffect } from 'react';
import { fetchPodcasts } from '../api/podcastService';
import { usePodcastContext } from '../context/PodcastContext';
import SearchBar from '../components/SearchBar';
import SortOptions from '../components/SortOptions';
import GenreFilter from '../components/GenreFilter';
import PaginationControls from '../components/PaginationControls';
import PodcastCard from '../components/PodcastCard';
import { genres } from '../data/genres';

export default function PodcastsPage() {
  const { state, dispatch } = usePodcastContext();

  useEffect(() => {
    fetchPodcasts().then(data => dispatch({ type: 'SET_PODCASTS', payload: data }));
  }, []);

  // Apply search, filter, and sort
  let filtered = [...state.podcasts];
  if (state.searchTerm) {
    filtered = filtered.filter(p =>
      p.title.toLowerCase().includes(state.searchTerm.toLowerCase())
    );
  }

  if (state.selectedGenres.length) {
    filtered = filtered.filter(p =>
      state.selectedGenres.includes(p.genreId)
    );
  }

  if (state.sortBy === 'az') {
    filtered.sort((a, b) => a.title.localeCompare(b.title));
  } else if (state.sortBy === 'za') {
    filtered.sort((a, b) => b.title.localeCompare(a.title));
  } else {
    filtered.sort((a, b) => new Date(b.updated) - new Date(a.updated));
  }

  // Apply pagination
  const pageSize = 10;
  const start = (state.currentPage - 1) * pageSize;
  const paginated = filtered.slice(start, start + pageSize);

  return (
    <div>
      <SearchBar />
      <GenreFilter />
      <SortOptions />
      <PaginationControls />
      {paginated.map(show => (
        <PodcastCard key={show.id} show={show} />
      ))}
    </div>
  );
}
