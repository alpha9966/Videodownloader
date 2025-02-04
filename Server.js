const express = require('express');
const cors = require('cors');
const ytdl = require('ytdl-core');

const app = express();
app.use(cors());

app.get('/download', async (req, res) => {
    const videoURL = req.query.url;
    if (!ytdl.validateURL(videoURL)) {
        return res.status(400).send('Invalid URL');
    }
    res.header('Content-Disposition', 'attachment; filename="video.mp4"');
    ytdl(videoURL, { format: 'mp4' }).pipe(res);
});

app.listen(3000, () => console.log('Server running on port 3000'));
