const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use('/uploads', express.static('uploads'));

const jokes = [
  { title: ' Temel İstanbul ', file: 'joke1.mp3' },
  { title: 'Boks Maçı', file: 'joke2.mp3' },
  { title: 'Temel VE Cemal', file: 'joke3.mp3' },
  { title: 'Temel Kahveye ', file: 'joke4.mp3' },
];

app.get('/', (req, res) => {
  res.render('index', { jokes: jokes });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Sunucu çalışıyor: http://localhost:${port}`));
