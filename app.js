const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (_req, res) => {
  res.json({
    status: 'ok',
    message: 'Hello from Joby Jacob — DevOps CI/CD Demo 🚀',
    version: '1.0.0'
  });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
