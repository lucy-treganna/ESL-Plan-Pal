export default function Results({ lessonData }) {
  if (!lessonData) return null;

  const { songs, vocabulary, games, speaking } = lessonData;

  return (
    <div className="mt-10 space-y-10">
      {songs?.length > 0 && (
        <section>
          <h3 className="text-lg font-semibold">🎵 Songs</h3>
          <ul className="space-y-6">
            {songs.map((song) => (
              <li key={song.videoId}>
                <p className="mb-1 font-medium">
                  {song.title} — {song.channel}
                </p>
                <div className="aspect-video">
                  <iframe
                    width="100%"
                    height="315"
                    src={`https://www.youtube.com/embed/${song.videoId}`}
                    title={song.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full rounded-lg shadow-sm"
                  />
                </div>
              </li>
            ))}
          </ul>
        </section>
      )}

      {vocabulary?.length > 0 && (
        <section>
          <h3 className="text-lg font-semibold">📚 Vocabulary</h3>
          <ul className="list-disc ml-5 space-y-1">
            {vocabulary.map((v, i) => (
              <li key={i}>{v.word}</li>
            ))}
          </ul>
        </section>
      )}

      {games?.length > 0 && (
        <section>
          <h3 className="text-lg font-semibold">🎲 Games</h3>
          <ul className="space-y-4">
            {games.map((game, i) => (
              <li key={i}>
                <strong>{game.title}</strong>
                <p>{game.description}</p>
                {game.variation && (
                  <p className="text-sm italic text-gray-600">
                    Variation: {game.variation}
                  </p>
                )}
                {game.resources && (
                  <p className="text-sm text-gray-500">
                    Resources: {game.resources}
                  </p>
                )}
              </li>
            ))}
          </ul>
        </section>
      )}

      {speaking?.length > 0 && (
        <section>
          <h3 className="text-lg font-semibold">🗣️ Speaking Prompts</h3>
          <ul className="space-y-2">
            {speaking.map((item, i) => (
              <li key={i} className="ml-5 list-disc">
                <p>
                  <strong>Prompt:</strong> {item.prompt}
                </p>
                {item.expected_response && (
                  <p className="text-sm text-gray-600">
                    <strong>Expected response:</strong> {item.expected_response}
                  </p>
                )}
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
