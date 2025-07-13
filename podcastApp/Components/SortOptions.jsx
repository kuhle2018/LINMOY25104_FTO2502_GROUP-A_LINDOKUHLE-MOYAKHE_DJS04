import { usePodcastContext } from '../context/PodcastContext';

export default function SortOptions() {
  const { dispatch } = usePodcastContext();

  function handleSort(e) {
    dispatch({ type: 'SORT', payload: e.target.value });
  }

  return (
    <select onChange={handleSort}>
      <option value="newest">Newest</option>
      <option value="az">Title A–Z</option>
      <option value="za">Title Z–A</option>
    </select>
  );
}
