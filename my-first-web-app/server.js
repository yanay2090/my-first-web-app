const express = require('express');
const cors = require('cors'); 
const app = express();
const PORT = 3000;

// This allows your frontend to talk to this backend
app.use(cors());

app.get('/api/status', (req, res) => {
    res.json({ message: "The server is alive and healthy!" });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});