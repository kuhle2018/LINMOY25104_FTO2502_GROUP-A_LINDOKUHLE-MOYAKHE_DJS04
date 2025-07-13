export async function fetchPodcasts() {
  const response = await fetch('https://podcast-api.netlify.app');
  const data = await response.json();
  return data;
}
