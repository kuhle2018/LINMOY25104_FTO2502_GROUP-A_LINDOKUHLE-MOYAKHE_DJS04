export default function PodcastCard({ show }) {
  return (
    <div className="podcast-card">
      <h3>{show.title}</h3>
      <p>{show.description}</p>
      <p><strong>Updated:</strong> {new Date(show.updated).toLocaleDateString()}</p>
    </div>
  );
}
