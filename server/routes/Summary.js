import { YoutubeTranscript } from 'youtube-transcript';
import express from "express"

const router = express.Router();

router.post("/summary", async (req, res) => {
    try {
        const transcript = await YoutubeTranscript.fetchTranscript(req.body.vidURL);
        res.status(200).json(transcript)
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" })
    }
})


export default router