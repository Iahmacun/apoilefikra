const express = require('express');
const path = require('path');
const app = express();

// View engine olarak EJS ayarlandı
app.set('view engine', 'ejs');

// Statik dosyaları servis et
app.use(express.static(path.join(__dirname, 'public')));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

const jokes = [
  { title: 'Temel İstanbul', file: 'joke1.mp3' },
  { title: 'Boks Maçı', file: 'joke2.mp3' },
  { title: 'Temel ve Cemal', file: 'joke3.mp3' },
  { title: 'Temel Kahveye', file: 'joke4.mp3' },
];

// Anasayfa yönlendirmesi
app.get('/', (req, res) => {
  res.render('index', { jokes: jokes });
});

// Vercel üzerinde dinleyeceğimiz port ayarı
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Sunucu çalışıyor: http://localhost:${port}`);
});
