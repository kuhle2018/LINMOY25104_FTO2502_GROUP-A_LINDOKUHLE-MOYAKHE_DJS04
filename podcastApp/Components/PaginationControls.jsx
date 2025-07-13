import { usePodcastContext } from '../context/PodcastContext';

export default function PaginationControls() {
  const { state, dispatch } = usePodcastContext();

  return (
    <div>
      <button onClick={() => dispatch({ type: 'PAGE', payload: state.currentPage - 1 })}>Prev</button>
      <span>Page {state.currentPage}</span>
      <button onClick={() => dispatch({ type: 'PAGE', payload: state.currentPage + 1 })}>Next</button>
    </div>
  );
}
