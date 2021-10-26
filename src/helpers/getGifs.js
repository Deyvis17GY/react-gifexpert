export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    category
  )}&limit=10&api_key=hlIXgzXD4Q4aL3shSFsTSGyPzFB4Pt6M`;
  const resp = await fetch(url);
  const { data } = await resp.json();
  console.log(data, "data");
  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.fixed_width_downsampled.url,
    };
  });
  return gifs;
};
