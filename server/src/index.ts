import express from 'express';
const PORT = 5000;

const app = express();
app.use(express.json());

app.get("/api/v1/health", (req, res) => {
    res.status(200).json(
        { message: "This is health endpoint running" }
    )
});

app.listen(PORT, () => {
    console.log(`PORT is running on ${PORT}`);
});