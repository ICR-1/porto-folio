# Portfolio 3D Modern

Ini adalah website portfolio 3D modern interaktif dengan menggunakan Three.js dan Tailwind CSS. Website ini menampilkan animasi 3D fullscreen, berbagai bagian untuk menampilkan informasi personal, dan elemen interaktif.

## Fitur

- Background animasi 3D fullscreen menggunakan Three.js (partikel interaktif)
- Bagian "Welcome" dengan nama dan judul
- Bagian "About Me" dengan bio singkat
- Bagian "Skills" dengan ikon animasi
- Model 3D interaktif
- Animasi scroll halus dan transisi antar bagian
- Desain responsif untuk desktop dan perangkat mobile

## Teknologi yang Digunakan

- Three.js - Library JavaScript untuk rendering 3D
- GSAP - Library animasi JavaScript
- Tailwind CSS - Framework CSS utility-first
- Vite - Build tool dan development server

## Cara Menjalankan

1. Pastikan Node.js sudah terinstal di komputer Anda
2. Clone repository ini
3. Instal dependencies:
   ```
   npm install
   ```
4. Jalankan server development:
   ```
   npm run dev
   ```
5. Buka browser dan akses `http://localhost:5173`

## Build untuk Produksi

Untuk membuat versi produksi:

```
npm run build
```

File hasil build akan berada di folder `dist/`

## Kustomisasi

- Ubah teks dan gambar di `index.html`
- Modifikasi animasi 3D di `src/main.js`
- Sesuaikan styling di `src/style.css` dan dengan kelas Tailwind di HTML

## Lisensi

MIT

## Upload ke GitHub

1. Pertama, inisialisasi git di folder project Anda:
   ```
   git init
   ```

2. Tambahkan file-file project ke staging:
   ```
   git add .
   ```

3. Buat commit pertama:
   ```
   git commit -m "Initial commit portfolio website"
   ```

4. Hubungkan repo lokal dengan repo GitHub yang sudah ada:
   ```
   git remote add origin https://github.com/ICR-1/porto-folio.git
   ```

5. Upload ke GitHub:
   ```
   git push -u origin master
   ```

   Jika branch utama Anda bernama main, gunakan:
   ```
   git push -u origin main
   ```

## Hosting di Netlify

1. Buat akun di [Netlify](https://www.netlify.com/) jika belum punya

2. Pastikan konfigurasi build di project Anda benar:
   - Buat file `netlify.toml` di root project dengan isi:
     ```toml
     [build]
       publish = "dist"
       command = "npm run build"
     ```

3. Ada dua cara deploy ke Netlify:

   ### Cara 1: Melalui UI Netlify
   - Login ke Netlify
   - Klik "Add new site" > "Import an existing project"
   - Pilih GitHub
   - Berikan akses ke repo GitHub Anda
   - Pilih repo `ICR-1/porto-folio`
   - Konfigurasi pengaturan build:
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Klik "Deploy site"

   ### Cara 2: Menggunakan Netlify CLI
   - Install Netlify CLI:
     ```
     npm install -g netlify-cli
     ```
   - Login ke Netlify:
     ```
     netlify login
     ```
   - Inisialisasi project Netlify:
     ```
     netlify init
     ```
   - Build project:
     ```
     npm run build
     ```
   - Deploy:
     ```
     netlify deploy --prod
     ```

Setelah deploy, Netlify akan memberikan URL untuk website Anda dan semua aset UI akan ikut terupload dan tersedia di website tersebut.

Pastikan seluruh konten UI termasuk gambar, CSS, dan JavaScript berada dalam folder project (bukan di luar) agar semua aset terupload dengan benar.