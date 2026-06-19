# 📋 Portfolio Website — Task Breakdown
> **Stack:** React + Vite + Bootstrap  
> **Nama Project:** Nanang Nurmansah Portfolio  
> **Aturan:** Selesaikan satu hari dulu sebelum lanjut ke hari berikutnya!  
> **Status:** `[ ]` belum · `[/]` sedang dikerjakan · `[x]` selesai

---

## 🗓️ DAY 1 — Fondasi & Cleanup (TERMUDAH)
> **Fokus:** Bersihin project dari placeholder, pastikan semua jalan dengan benar  
> **Estimasi waktu:** 1–2 jam  
> **Level:** ⭐ Pemula

### Cleanup Project
- [ ] Ganti nama project di `package.json` dari `"moz-todo-react"` ke `"nanang-portfolio"`
- [ ] Hapus / ganti `cat.jpg` di `src/assets/` dengan foto profil asli kamu
- [ ] Pastikan `resume.pdf` di `src/assets/` adalah versi terbaru

### Verifikasi Struktur File
- [ ] Cek bahwa semua file ini ada dan tidak error saat `npm run dev`:
  - `src/components/header.jsx`
  - `src/components/html_main.jsx` (Hero section)
  - `src/components/AboutMe.jsx`
  - `src/components/Journey.jsx`
  - `src/components/Projects.jsx`
  - `src/components/Contact.jsx`
  - `src/components/footer.jsx`

### Test Dasar
- [ ] Jalankan `npm run dev` tidak ada error merah di browser
- [ ] Klik semua link di navbar, halaman smooth scroll ke section yang benar
- [ ] Klik tombol Resume, file PDF terdownload

---

## 🗓️ DAY 2 — Header & Navbar
> **Fokus:** Bikin header yang proper, sticky, dan responsif  
> **Estimasi waktu:** 2–3 jam  
> **Level:** ⭐⭐ Pemula-Menengah

### Header Layout
- [ ] Tambah `position: sticky` agar navbar selalu terlihat saat scroll
- [ ] Tambah `z-index` yang cukup besar agar navbar tidak tertimpa elemen lain
- [ ] Pastikan padding kiri-kanan proporsional

### Icon / Logo di Navbar
- [ ] Nama Nanang Nurmansah sebagai logo text (sudah ada)
- [ ] Opsional: Tambah foto profil kecil (avatar) di sebelah nama

### Navbar Links
- [ ] Pastikan 5 link berfungsi: Dashboard, About Me, Journey, Project, Contact
- [ ] Tambah efek hover, warna berubah jadi putih saat mouse di atas link
- [ ] Tambah efek active, link aktif dikasih garis bawah atau warna berbeda
- [ ] Test di layar HP, navbar harus berubah jadi hamburger menu Bootstrap

### Tombol Resume
- [ ] Pastikan tombol Resume warnanya kontras dan kelihatan
- [ ] Test klik, PDF terdownload dengan nama file yang benar
- [ ] Opsional: Tambah icon download kecil di sebelah tulisan Resume

---

## 🗓️ DAY 3 — Hero Section (Dashboard)
> **Fokus:** Bagian pertama yang dilihat pengunjung — kesan pertama HARUS keren!  
> **Estimasi waktu:** 3–4 jam  
> **Level:** ⭐⭐ Pemula-Menengah  
> **File:** `src/components/html_main.jsx`

### Foto Profil
- [ ] Tampilkan foto profil asli (ganti cat.jpg)
- [ ] Foto berbentuk lingkaran dengan border-radius 50%
- [ ] Tambah border atau shadow keren di sekeliling foto

### Teks Perkenalan
- [ ] Nama lengkap: Nanang Nurmansah (sudah ada, perbesar fontnya)
- [ ] Tambah subtitle/tagline, contoh: "Web Developer | Mahasiswa IT | Lifelong Learner"
- [ ] Opsional: Tambah efek typing animation pada tagline

### Tombol CTA (Call to Action)
- [ ] Tambah tombol "Lihat Project Saya" yang scroll ke section projects
- [ ] Tambah tombol "Hubungi Saya" yang scroll ke section contact

### FAB Button (Scroll to Top)
- [ ] Sudah ada di kode, pastikan kelihatan dan berfungsi
- [ ] Tambah ikon panah ke atas yang lebih jelas

---

## 🗓️ DAY 4 — About Me Section
> **Fokus:** Ceritakan siapa kamu dan apa keahlianmu  
> **Estimasi waktu:** 2–3 jam  
> **Level:** ⭐⭐ Pemula-Menengah  
> **File:** `src/components/AboutMe.jsx`

### Bio Singkat
- [ ] Tulis 2-3 paragraf tentang dirimu:
  - Siapa kamu? (nama, asal, sedang belajar apa)
  - Kenapa tertarik di dunia web dev?
  - Apa tujuanmu ke depannya?

### Skill Badges
- [ ] Buat daftar skill dalam bentuk badge/pill
- [ ] Contoh: HTML, CSS, JavaScript, React, Bootstrap, Git
- [ ] Pakai Bootstrap badge component

### Opsional: Progress Bar Skill
- [ ] Tambah progress bar untuk tiap skill (misal HTML 80%, CSS 70%)
- [ ] Pakai Bootstrap progress component

---

## 🗓️ DAY 5 — Journey / Timeline Section
> **Fokus:** Tampilkan perjalanan belajarmu secara visual  
> **Estimasi waktu:** 3–4 jam  
> **Level:** ⭐⭐⭐ Menengah  
> **File:** `src/components/Journey.jsx`

### Data Timeline
- [ ] Buat array data perjalanan di dalam komponen:
```js
const journeyData = [
  { year: "2023", title: "Mulai Belajar HTML dan CSS", desc: "..." },
  { year: "2024", title: "Belajar JavaScript", desc: "..." },
  { year: "2025", title: "Mulai React dan Vite", desc: "..." },
];
```
- [ ] Isi dengan milestone nyata perjalanan belajarmu

### Layout Timeline
- [ ] Tampilkan data sebagai timeline vertikal
- [ ] Tiap item punya: tahun, judul, deskripsi singkat
- [ ] Tambah garis vertikal dan titik/dot sebagai penanda

### Opsional: Animasi Masuk
- [ ] Tambah animasi fade-in saat elemen masuk viewport

---

## 🗓️ DAY 6 — Projects Section
> **Fokus:** Tampilkan portofolio project kamu dalam bentuk card  
> **Estimasi waktu:** 4–5 jam  
> **Level:** ⭐⭐⭐ Menengah  
> **File:** `src/components/Projects.jsx`

### Data Project
- [ ] Buat array data project:
```js
const projectsData = [
  {
    title: "Portfolio Website",
    desc: "Website portfolio pribadi dengan React + Vite + Bootstrap",
    tech: ["React", "Vite", "Bootstrap"],
    github: "https://github.com/...",
    demo: "#",
  },
];
```
- [ ] Isi minimal 2-3 project nyata (boleh dari tugas kuliah atau latihan)

### Card Layout
- [ ] Tampilkan tiap project sebagai Bootstrap Card
- [ ] Card berisi: judul, deskripsi, tech stack badges, tombol GitHub dan Demo
- [ ] Grid: 3 card per baris di desktop, 1 per baris di mobile

### Hover Effect Card
- [ ] Tambah efek saat hover: card naik sedikit (transform translateY -5px)
- [ ] Tambah shadow yang lebih tebal saat hover

---

## 🗓️ DAY 7 — Contact Section
> **Fokus:** Beri cara untuk pengunjung menghubungimu  
> **Estimasi waktu:** 3–4 jam  
> **Level:** ⭐⭐⭐ Menengah  
> **File:** `src/components/Contact.jsx`

### Info Kontak
- [ ] Tampilkan email: nanangnurmansah5@gmail.com
- [ ] Tampilkan link LinkedIn: linkedin.com/in/nanangnumansah
- [ ] Tampilkan link GitHub (kalau ada)

### Social Media Icons
- [ ] Pasang Bootstrap Icons untuk icon sosmed
- [ ] Tampilkan icon yang bisa diklik: Email, LinkedIn, GitHub, YouTube, TikTok

### Opsional: Form Kontak
- [ ] Tambah form sederhana: Nama, Email, Pesan, tombol Kirim
- [ ] Catatan: perlu backend untuk kirim email, tandai sebagai future task

---

## 🗓️ DAY 8 — Footer
> **Fokus:** Selesaikan footer dengan konten yang benar  
> **Estimasi waktu:** 1–2 jam  
> **Level:** ⭐ Pemula  
> **File:** `src/components/footer.jsx`

### Cleanup Footer
- [ ] Hapus semua link "Hello" yang masih placeholder
- [ ] Fix typo "Businees Mail" menjadi "Business Mail"

### Isi Footer dengan Konten Nyata
- [ ] Kolom 1 - Kontak: link email dan LinkedIn
- [ ] Kolom 2 - Social Media: YouTube dan TikTok
- [ ] Kolom 3 - Navigasi Cepat: link ke section About, Projects, Contact
- [ ] Tambah copyright: 2025 Nanang Nurmansah. All rights reserved.

---

## 🗓️ DAY 9 — Responsiveness & Polish
> **Fokus:** Pastikan tampilan bagus di semua ukuran layar  
> **Estimasi waktu:** 3–4 jam  
> **Level:** ⭐⭐⭐ Menengah-Sulit

### Mobile Test
- [ ] Buka DevTools browser, test di ukuran 375px (iPhone SE)
- [ ] Navbar berubah jadi hamburger menu
- [ ] Semua section layout 1 kolom, tidak ada overflow
- [ ] Tombol dan font ukuran proporsional di mobile

### Desktop Test
- [ ] Test di layar 1280px dan 1920px
- [ ] Project cards tampil 3 kolom
- [ ] Hero section layout dua kolom (foto kiri, teks kanan)

### Animasi dan Micro-interactions
- [ ] Smooth scroll saat klik navbar (sudah ada di CSS)
- [ ] Hover effect di semua tombol dan link
- [ ] FAB scroll-to-top muncul setelah scroll 300px (sudah ada)

---

## 🗓️ DAY 10 — SEO, Meta Tags & Deploy
> **Fokus:** Siapkan website untuk dipublish ke internet  
> **Estimasi waktu:** 2–3 jam  
> **Level:** ⭐⭐⭐⭐ Sulit (tapi bisa!)

### SEO di index.html
- [ ] Ubah title menjadi "Nanang Nurmansah | Web Developer Portfolio"
- [ ] Tambah meta description dengan deskripsi singkat
- [ ] Tambah meta Open Graph untuk share di sosmed

### Deploy ke Vercel (GRATIS)
- [ ] Buat akun di vercel.com (login pakai GitHub)
- [ ] Push project ke GitHub repository
- [ ] Import repository ke Vercel dan klik Deploy
- [ ] Website live di https://nama-project.vercel.app

### Final Check
- [ ] Buka website dari HP (bukan localhost) dan test semua fitur
- [ ] Share link ke teman untuk minta feedback
- [ ] Update README.md dengan screenshot dan link live demo

---

## Aturan Emas

1. Satu hari = satu fokus area. Jangan loncat-loncat!
2. Kalau stuck lebih dari 30 menit, tanya atau cari referensi, jangan skip
3. Commit ke Git setiap hari: git add . dan git commit -m "Day X: selesai nama task"
4. Jangan tunggu sempurna, selesaikan dulu, rapikan belakangan!

---

## Progress Tracker

| Day | Area | Status |
|-----|------|--------|
| 1 | Fondasi dan Cleanup | belum |
| 2 | Header dan Navbar | belum |
| 3 | Hero Section | belum |
| 4 | About Me | belum |
| 5 | Journey / Timeline | belum |
| 6 | Projects | belum |
| 7 | Contact | belum |
| 8 | Footer | belum |
| 9 | Responsiveness dan Polish | belum |
| 10 | SEO dan Deploy | belum |
