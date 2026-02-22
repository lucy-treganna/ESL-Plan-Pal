import {
  MusicalNoteIcon,
  BookOpenIcon,
  PuzzlePieceIcon,
  ChatBubbleBottomCenterTextIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/outline";

function SectionSpinner({ message }) {
  return (
    <div className="flex items-center gap-3 text-grey-purple mb-6 px-2">
      <div className="w-5 h-5 border-2 border-medium-purple border-t-transparent rounded-full animate-spin shrink-0" />
      <p className="text-sm font-medium">{message}</p>
    </div>
  );
}

export default function Results({ lessonData, age, level, topic }) {
  if (!lessonData) return null;

  const { songs, vocabulary, games, speaking } = lessonData;
  const cleanedAge = age.replace(/\byears\b/, "year");

  return (
    <div className="bg-cool-white font-inter rounded-xl shadow-sm max-w-5xl mx-auto py-6 px-6 sm:px-8">
      <div className="text-center space-y-2 tracking-tight mb-6 sm:mx-8">
        <h1 className="text-2xl font-bold md:text-3xl text-medium-purple">
          <span className="inline-flex items-center gap-2 justify-center">
            <RocketLaunchIcon className="h-6 w-6 sm:h-8 sm:w-8" />
            Your Lesson Plan Is Ready!
          </span>
        </h1>
        <p className="text-sm sm:text-base text-charcoal/80 mx-4 sm:mx-6">
          Explore fun and engaging songs, games, and vocabulary for your {topic}{" "}
          lesson — intelligently matched to {cleanedAge}-old {level} learners.
        </p>
      </div>

      {/* Songs */}
      <div className="flex items-center gap-2 mb-6">
        <div className="p-2 bg-medium-purple rounded-xl">
          <MusicalNoteIcon className="w-6 h-6 text-cool-white" />
        </div>
        <h2 className="text-2xl font-bold text-medium-purple">Songs</h2>
      </div>
      {songs === null ? (
        <SectionSpinner message="Finding the best songs for your lesson..." />
      ) : (
        <div
          className={`grid gap-4 ${
            songs.length === 2 ? "md:grid-cols-2" : "md:grid-cols-3"
          } mb-6`}
        >
          {songs.map((song) => (
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
      )}

      {/* Vocabulary */}
      <div className="flex items-center gap-2 mb-6">
        <div className="p-2 bg-medium-purple rounded-xl">
          <BookOpenIcon className="w-6 h-6 text-cool-white" />
        </div>
        <h2 className="text-2xl font-bold text-medium-purple">Vocabulary</h2>
      </div>
      {vocabulary === null ? (
        <SectionSpinner message="Building your vocabulary list..." />
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          {vocabulary.map((vocab) => (
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
      )}

      {/* Games */}
      <div className="flex items-center gap-2 mb-6">
        <div className="p-2 bg-medium-purple rounded-xl">
          <PuzzlePieceIcon className="w-6 h-6 text-cool-white" />
        </div>
        <h2 className="text-2xl font-bold text-medium-purple">Games</h2>
      </div>
      {games === null ? (
        <SectionSpinner message="Designing games for your class..." />
      ) : (
        <div className="grid lg:grid-cols-2 gap-8">
          {games.map((game) => (
            <div
              key={game.title}
              className="bg-cool-white rounded-xl p-6 md:px-8 shadow-sm border border-pale-blue mb-6"
            >
              <h3 className="text-2xl font-bold text-medium-purple mb-4">
                {game.title}
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-charcoal mb-2">Description</h4>
                  <p className="text-grey-purple">{game.description}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-charcoal mb-2">Variation</h4>
                  <p className="text-grey-purple">{game.variation}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-charcoal mb-2">Resources Needed</h4>
                  <ul className="list-disc list-inside space-y-1">
                    {Array.isArray(game?.resources) && game.resources.length > 0 ? (
                      game.resources.map((resource, i) => (
                        <li key={i} className="text-grey-purple">{resource}</li>
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
      )}

      {/* Speaking Prompts — only shown while loading or when data exists */}
      {(speaking === null || (Array.isArray(speaking) && speaking.length > 0)) && (
        <>
          <div className="flex items-center gap-2 mb-6 mt-2">
            <div className="p-2 bg-medium-purple rounded-xl">
              <ChatBubbleBottomCenterTextIcon className="w-6 h-6 text-cool-white" />
            </div>
            <h2 className="text-2xl font-bold text-medium-purple">Speaking Prompts</h2>
          </div>
          {speaking === null ? (
            <SectionSpinner message="Creating speaking prompts..." />
          ) : (
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
                              .map((sentence) => `"${sentence}"`)
                              .join(" ")
                          : prompt?.expected_response}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}
