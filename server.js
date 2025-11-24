import express from "express"; // 👈 Use import
import dotenv from "dotenv";    // 👈 Use import
import userRoutes from './routes/userRoutes.js';

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    res.send("Hello Express is working");
});
app.use('/api/users', userRoutes);

app.listen(PORT, () => {
    console.log('Server is running at PORT 3000');
});
