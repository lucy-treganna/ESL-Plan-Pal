"use client";

import { useState, useEffect } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import FormButton from "@/app/_components/FormButton";
import Spinner from "@/app/_components/Spinner";
import Results from "@/app/_components/Results";
import ErrorCard from "@/app/_components/ErrorCard";
import { extractJsonFromGeminiResponse } from "@/app/utils";

export default function Form() {
  const [formData, setFormData] = useState({
    age: "Under 3 years",
    level: "Beginner",
    topic: "",
  });
  const [responseData, setResponseData] = useState(null);
  const [lessonData, setLessonData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (lessonData) {
      setIsLoading(false);
    }
  }, [lessonData]);

  useEffect(() => {
    if (responseData) {
      const processResources = async () => {
        console.log("[processResources] Starting, responseData:", responseData);

        const rawData = responseData.candidates[0].content.parts[0].text;
        console.log("[processResources] Raw Gemini text:", rawData);

        const cleaned = extractJsonFromGeminiResponse(rawData);
        console.log("[processResources] Cleaned JSON string:", cleaned);

        const parsed = JSON.parse(cleaned);
        console.log("[processResources] Parsed sections:", parsed);

        const songsSection = parsed.find(
          (section) => section.section === "songs"
        );
        const vocabularySection = parsed.find(
          (s) => s.section === "vocabulary"
        );
        const gamesSection = parsed.find((s) => s.section === "games");
        const speakingSection = parsed.find(
          (s) => s.section === "speaking_prompts"
        );

        const songs = songsSection?.data || [];
        const vocabulary = vocabularySection?.data || [];
        const games = gamesSection?.data || [];
        const speaking = speakingSection?.data || [];

        console.log("[processResources] Songs to fetch:", songs);

        // Fetch YouTube data for songs
        const videoResults = await fetchYouTubeSongs(songs);
        console.log("[processResources] YouTube video results:", videoResults);

        // Set lessonData object
        setLessonData({
          songs: videoResults,
          vocabulary,
          games,
          speaking,
        });
      };
      processResources();
    }
  }, [responseData]);

  const fetchYouTubeSongs = async (songs) => {
    const results = [];

    for (const song of songs) {
      console.log(`[fetchYouTubeSongs] Fetching: "${song.title}" by ${song.channel}`);
      try {
        const res = await fetch("/api/youtube", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            title: song.title,
            channel: song.channel,
          }),
        });
        console.log(`[fetchYouTubeSongs] YouTube response status for "${song.title}":`, res.status);
        const data = await res.json();
        console.log(`[fetchYouTubeSongs] YouTube response data for "${song.title}":`, data);
        const videoId = data.items?.[0]?.id?.videoId;
        if (videoId) {
          results.push({
            title: song.title,
            channel: song.channel,
            videoId,
          });
        } else {
          console.warn(`[fetchYouTubeSongs] No videoId found for "${song.title}"`);
        }
      } catch (err) {
        console.error(`[fetchYouTubeSongs] Error fetching YouTube data for ${song.title}:`, err);
      }
    }
    return results;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setLessonData(null);

    console.log("[handleSubmit] Submitting form with data:", formData);

    try {
      const res = await fetch("/api/gemini", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      console.log("[handleSubmit] Gemini API response status:", res.status, res.ok);

      const data = await res.json();
      console.log("[handleSubmit] Gemini API response data:", data);

      if (res.ok) {
        setResponseData(data);
        setError(null);
      } else {
        console.error("[handleSubmit] Gemini API returned error:", data);
        setError(data.error || "An error occurred");
        setIsLoading(false);
      }
    } catch (error) {
      console.error("[handleSubmit] Fetch threw an exception:", error);
      setError("An error occurred during submission");
      setIsLoading(false);
    }
  };
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : error ? (
        <ErrorCard
          title="Oops! Something went wrong"
          message={error}
          onClick={() => setError(null)}
        />
      ) : lessonData ? (
        <Results
          lessonData={lessonData}
          age={formData.age}
          topic={formData.topic}
          level={formData.level}
        />
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="bg-cool-white rounded-xl shadow-sm space-y-12 max-w-3xl mx-auto">
            <div className="py-6 px-8">
              <h2 className="text-base/7 font-bold text-grey-purple">
                Quick Generate
              </h2>
              <p className="mt-1 text-sm/6 text-charcoal/80">
                Try our quick generate feature when you&apos;re short on time.
                Enter your criteria below and get ESL resources for your lesson.
              </p>
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label htmlFor="age" className="block text-sm/6 font-medium">
                    How old are your students?
                  </label>
                  <div className="mt-2 grid grid-cols-1">
                    <select
                      id="age"
                      name="age"
                      value={formData.age}
                      onChange={handleChange}
                      className="col-start-1 row-start-1 w-full appearance-none rounded-md py-1.5 pr-8 pl-3 text-base outline-1 -outline-offset-1 outline-charcoal/20 focus:outline-2 focus:-outline-offset-2 focus:outline-medium-blue sm:text-sm/6"
                    >
                      <option>Under 3 years</option>
                      <option>4-5 years</option>
                      <option>5-6 years</option>
                    </select>
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end sm:size-4"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="level"
                    className="block text-sm/6 font-medium"
                  >
                    What is their English level?
                  </label>
                  <div className="mt-2 grid grid-cols-1">
                    <select
                      id="level"
                      name="level"
                      value={formData.level}
                      onChange={handleChange}
                      className="col-start-1 row-start-1 w-full appearance-none rounded-md py-1.5 pr-8 pl-3 text-base outline-1 -outline-offset-1 outline-charcoal/20 focus:outline-2 focus:-outline-offset-2 focus:outline-medium-blue sm:text-sm/6"
                    >
                      <option>Beginner</option>
                      <option>Intermediate</option>
                      <option>Advanced</option>
                    </select>
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end sm:size-4"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="topic"
                    className="block text-sm/6 font-medium"
                  >
                    What is the topic of your lesson?
                  </label>
                  <div className="mt-2">
                    <input
                      id="topic"
                      name="topic"
                      type="text"
                      placeholder="e.g. Space"
                      onChange={handleChange}
                      className="block w-full rounded-md px-3 py-1.5 text-base outline-1 -outline-offset-1 outline-charcoal/20 focus:outline-2 focus:-outline-offset-2 focus:outline-medium-blue sm:text-sm/6"
                    />
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <FormButton
                  text="Generate resources"
                  // onSubmit={handleSubmit}
                  isLoading={isLoading}
                  loadingText="Generating..."
                />
              </div>
            </div>
          </div>
        </form>
      )}
    </>
  );
}
