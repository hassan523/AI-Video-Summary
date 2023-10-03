import { YoutubeTranscript } from "youtube-transcript";
import express from "express";
import OpenAI from "openai";
import axios from "axios";
// // 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

const router = express.Router();

let cleanedText2;
router.post("/summary", async (req, res) => {
  try {
    if (req.body.contentType === "points" && req.body.keyPoints) {
      const transcript = await YoutubeTranscript.fetchTranscript(
        req.body.vidURL
      );
      const joined = transcript.map((item) => item.text).join(" ");

      const options = {
        method: "POST",
        url: "https://api.edenai.run/v2/text/summarize",
        headers: {
          authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiY2Q2YzhmOTAtNDcwMC00MzU5LWE1MTYtY2ExZDMyYjc5NGY5IiwidHlwZSI6ImFwaV90b2tlbiJ9.dE31lltMIxj6-uBubCaAXMHsYBKPQHzAOzpkZPpBMEg`,
        },
        data: {
          show_original_response: false,
          fallback_providers: "",
          providers: "openai",
          text: joined,
          language: "en",
        },
      };
      const axiosRes = await axios.request(options);

      const summary = axiosRes.data.openai.result;

      // Get the desired number of key points (sentences) from the request body
      const desiredKeyPoints = req.body.keyPoints;

      // Split the summary into sentences (assuming sentences are separated by periods)
      const sentences = summary.split(". ");

      // Check if the summary has more sentences than desired key points
      if (sentences.length > desiredKeyPoints) {
        // Take the first 'desiredKeyPoints' sentences as key points
        const keyPoints = sentences.slice(0, desiredKeyPoints);

        // Create an array of objects with key points
        const keyPointObjects = keyPoints.map((point, index) => ({
          keyPoint: point.replace(/:/g, ""),
          index: index + 1, // Adding 1-based index
        }));

        res.status(200).json(keyPointObjects);
      } else {
        res.status(200).json([]);
      }
    } else if (req.body.contentType === "paragraph" && req.body.wordCounter) {
      const transcript = await YoutubeTranscript.fetchTranscript(
        req.body.vidURL
      );
      const joined = transcript.map((item) => item.text).join(" ");

      const options = {
        method: "POST",
        url: "https://api.edenai.run/v2/text/summarize",
        headers: {
          authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiY2Q2YzhmOTAtNDcwMC00MzU5LWE1MTYtY2ExZDMyYjc5NGY5IiwidHlwZSI6ImFwaV90b2tlbiJ9.dE31lltMIxj6-uBubCaAXMHsYBKPQHzAOzpkZPpBMEg`,
        },
        data: {
          show_original_response: false,
          fallback_providers: "",
          providers: "openai",
          text: joined, // Remove the "i want summary in" part
          language: "en",
        },
      };

      const axiosRes = await axios.request(options);

      const summary = axiosRes.data.openai.result;

      // Get the desired word count from the request body
      const desiredWordCount = req.body.wordCounter;

      // Split the summary into words
      const words = summary.split(" ");
      // Check if the summary has more words than desired
      if (words.length > desiredWordCount) {
        // Trim the summary to the desired word count
        const trimmedSummary = words.slice(0, desiredWordCount).join(" ");
        const cleanedText = trimmedSummary.replace(/:/g, "");
        cleanedText2 = cleanedText.replace(/\n/g, " ");

        res.status(200).json(cleanedText2);
      } else {
        res.status(200).json(cleanedText2);
      }
    } else {
      return res.status(400).json({ message: "Invalid Request" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

export default router;