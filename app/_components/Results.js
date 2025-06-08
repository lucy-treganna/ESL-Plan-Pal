import {
  MusicalNoteIcon,
  BookOpenIcon,
  PuzzlePieceIcon,
  ChatBubbleBottomCenterTextIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/outline";

export default function Results({ lessonData, age, level, topic }) {
  if (!lessonData) return null;

  const { songs, vocabulary, games, speaking } = lessonData;
  const cleanedAge = age.replace(/\byears\b/, "year");

  return (
    <div className="bg-cool-white font-inter rounded-xl shadow-sm max-w-5xl mx-auto py-6 px-6 sm:px-8">
      <div className="text-center space-y-2 tracking-tight mb-6 mx-8">
        <h1 className="text-2xl font-bold md:text-3xl text-medium-purple">
          <span className="inline-flex items-center gap-2 justify-center">
            <RocketLaunchIcon className="h-8 w-8" />
            Your Lesson Plan Is Ready!
          </span>
        </h1>
        <p className="text-md text-charcoal/80 mx-4 sm:mx-6">
          Explore fun and engaging songs, games, and vocabulary for your {topic}{" "}
          lesson — intelligently matched to {cleanedAge}-old {level} learners.
        </p>
      </div>

      {/* Songs section */}
      <div className="flex items-center gap-2 mb-6">
        <div className="p-2 bg-medium-purple rounded-xl">
          <MusicalNoteIcon className="w-6 h-6 text-cool-white" />
        </div>
        <h2 className="text-2xl font-bold text-medium-purple">Songs</h2>
      </div>
      <div
        className={`grid gap-4 ${
          songs?.length === 2 ? "md:grid-cols-2" : "md:grid-cols-3"
        } mb-6`}
      >
        {songs?.map((song) => (
          <div
            key={song.videoId}
            className="bg-cool-white rounded-xl shadow-sm overflow-hidden border border-pale-blue"
          >
            <div className="p-4 bg-pale-blue">
              <h3 className="font-semibold text-charcoal">{song.title}</h3>
              <p className="text-sm text-charcoal/80">{song.channel}</p>
            </div>
            <div className="p-2">
              <div className="aspect-video rounded-lg overflow-hidden shadow-sm">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${song.videoId}`}
                  title={song.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full border-0"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Vocabulary section */}
      <div className="flex items-center gap-2 mb-6">
        <div className="p-2 bg-medium-purple rounded-xl">
          <BookOpenIcon className="w-6 h-6 text-cool-white" />
        </div>
        <h2 className="text-2xl font-bold text-medium-purple">Vocabulary</h2>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        {vocabulary?.map((vocab) => (
          <div
            key={vocab.word}
            className="bg-cool-white rounded-xl p-6 shadow-sm border border-pale-blue"
          >
            <h3 className="text-xl font-bold text-medium-purple mb-2">
              {vocab.word}
            </h3>
          </div>
        ))}
      </div>

      {/* Games section */}
      <div className="flex items-center gap-2 mb-6">
        <div className="p-2 bg-medium-purple rounded-xl">
          <PuzzlePieceIcon className="w-6 h-6 text-cool-white" />
        </div>
        <h2 className="text-2xl font-bold text-medium-purple">Games</h2>
      </div>
      <div className="grid lg:grid-cols-2 gap-8">
        {games?.map((game) => (
          <div
            key={game.title}
            className="bg-cool-white rounded-xl p-6 md:px-8 shadow-sm border border-pale-blue mb-6"
          >
            <h3 className="text-2xl font-bold text-medium-purple mb-4">
              {game.title}
            </h3>

            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-charcoal mb-2">
                  Description
                </h4>
                <p className="text-grey-purple">{game.description}</p>
              </div>

              <div>
                <h4 className="font-semibold text-charcoal mb-2">Variation</h4>
                <p className="text-grey-purple">{game.variation}</p>
              </div>

              <div>
                <h4 className="font-semibold text-charcoal mb-2">
                  Resources Needed
                </h4>
                <ul className="list-disc list-inside space-y-1">
                  {Array.isArray(game?.resources) &&
                  game.resources.length > 0 ? (
                    game.resources.map((resource, resourceIndex) => (
                      <li key={resourceIndex} className="text-grey-purple">
                        {resource}
                      </li>
                    ))
                  ) : (
                    <li className="text-grey-purple">None</li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      {Array.isArray(speaking) && speaking.length > 0 && (
        <>
          {/* Speaking prompts */}
          <div className="flex items-center gap-2 mb-6">
            <div className="p-2 bg-medium-purple rounded-xl">
              <ChatBubbleBottomCenterTextIcon className="w-6 h-6 text-cool-white" />
            </div>
            <h2 className="text-2xl font-bold text-medium-purple">
              Speaking Prompts
            </h2>
          </div>
          <div className="space-y-6">
            {speaking.map((prompt, index) => (
              <div
                key={index}
                className="bg-cool-white rounded-xl p-6 shadow-sm border border-pale-blue"
              >
                <div className="grid lg:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-medium-purple mb-3">
                      Prompt {index + 1}
                    </h4>
                    <p className="text-charcoal text-lg font-medium bg-pale-blue p-4 rounded-lg">
                      &ldquo;{prompt?.prompt}&rdquo;
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-medium-purple mb-3">
                      Expected Response
                    </h4>
                    <p className="text-grey-purple bg-sky-blue/30 p-4 rounded-lg">
                      {Array.isArray(prompt?.expected_response)
                        ? prompt.expected_response
                            .map((sentence) => `“${sentence}”`)
                            .join(" ")
                        : prompt?.expected_response}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

{
  /* {songs?.length > 0 && (
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
      )} */
}
