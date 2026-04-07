const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const PUBLIC = path.join(__dirname, 'public');

// Clean URL routing
app.get('/', (req, res) => res.sendFile(path.join(PUBLIC, 'index.html')));
app.get('/lineup', (req, res) => res.sendFile(path.join(PUBLIC, 'lineup.html')));
app.get('/deals', (req, res) => res.sendFile(path.join(PUBLIC, 'deals.html')));

// Static assets fallback
app.use(express.static(PUBLIC));

// 404 — redirect to home
app.use((req, res) => res.redirect('/'));

app.listen(PORT, () => {
  console.log(`Epic 22 Platform running on port ${PORT}`);
});
