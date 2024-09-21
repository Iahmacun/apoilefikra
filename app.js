const express = require('express');
const path = require('path');
const app = express();

// EJS'i görünüm motoru olarak ayarla
app.set('view engine', 'ejs');

// Görünüm dizinini ayarla (varsayılan olarak 'views' olarak ayarlandığı için gerek yok, ama açıkça belirtmek iyi olabilir)
app.set('views', path.join(__dirname, 'views'));

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

// Port ayarını yap ve sunucuyu başlat
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Sunucu çalışıyor: http://localhost:${port}`);
});
