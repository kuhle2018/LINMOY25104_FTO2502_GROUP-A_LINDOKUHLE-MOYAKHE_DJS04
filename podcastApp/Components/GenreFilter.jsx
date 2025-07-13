import { usePodcastContext } from '../context/PodcastContext';
import { genres } from '../data/genres';

export default function GenreFilter() {
  const { dispatch } = usePodcastContext();

  function handleChange(e) {
    const selected = Array.from(e.target.selectedOptions, opt => Number(opt.value));
    dispatch({ type: 'FILTER', payload: selected });
  }

  return (
    <select multiple onChange={handleChange}>
      {genres.map(genre => (
        <option key={genre.id} value={genre.id}>{genre.title}</option>
      ))}
    </select>
  );
}
