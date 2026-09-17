# ☕ Moon Coffee — Website Coffee Shop

Mini projek website coffee shop bernama **Moon Coffee**, dibuat menggunakan HTML, CSS, dan JavaScript murni (tanpa framework).

Website ini menampilkan profil kedai kopi, daftar menu lengkap, galeri suasana, informasi kontak, dan form reservasi meja.

## 📁 Struktur File

├──MoonCoffee
├── index.html          → Halaman utama (Home)
├── menu.html           → Daftar menu Coffee, Non Coffee, dan Dessert
├── gallery.html        → Galeri foto suasana kedai
├── about.html          → Profil, visi misi, dan tim barista
├── contact.html        → Informasi kontak, form pesan, dan peta lokasi
├── reservation.html    → Form reservasi meja
│
├── style.css           → Seluruh tampilan website
├── script.js           → Seluruh fungsi JavaScript
│
└── asset/              → Kumpulan gambar (logo, menu, galeri, ikon sosial media)


## ⚙️ Fitur JavaScript

| Fungsi | Kegunaan |
|---|---|
| `tampilkanSapaan()` | Menampilkan sapaan otomatis (Pagi / Siang / Sore / Malam) sesuai jam pengguna |
| `formatHarga()` | Mengubah angka menjadi format rupiah, contoh: `35000` → `Rp35.000` |
| `pesanMenu()` | Menampilkan konfirmasi pemesanan saat tombol *Order* ditekan |
| `validasiReservasi()` | Memeriksa form reservasi agar tidak ada kolom yang kosong atau salah format |
| `validasiKontak()` | Memeriksa form pesan pada halaman Contact |

---

## 🎨 Fitur Tampilan

- **Navbar sticky** — menu navigasi tetap terlihat saat halaman digulir
- **Halaman aktif ditandai** — link menu yang sedang dibuka berbeda warnanya
- **Efek hover** — kartu terangkat disertai bayangan, gambar membesar perlahan
- **Transisi halus** — pada tombol, kartu, dan kolom input form
- **Animasi** — konten muncul dari bawah saat halaman dibuka, gambar utama melayang pelan
- **Kartu menu rata** — tinggi seluruh kartu sama dan tombol sejajar, meski panjang deskripsi berbeda
- **Responsive** — tampilan menyesuaikan layar HP dan tablet


Dibuat Oleh Fauzah Lathifha

© 2026 MoonCoffee — Mini Projek Pemrograman Web 
