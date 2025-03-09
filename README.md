# GitHub Profile Viewer with Next.js & Tailwind CSS

This project is a **GitHub Profile Viewer** built with **Next.js 15** and **Tailwind CSS v4**. It allows users to view GitHub profiles and repositories dynamically.

<p align="center">
  <a href="https://github.com/himangmyid/GitHub-Profile-Viewer-NextJS">
    <img src="https://github-readme-stats.vercel.app/api/pin/?username=himangmyid&repo=GitHub-Profile-Viewer-NextJS&theme=tokyonight" alt="GitHub Repo Card">
  </a>
</p>


## Features

- **GitHub Profile Overview**: View user information such as name, bio, followers, and repositories.
- **Repository Details**: Detailed information about repositories including stars, forks, and languages used.
- **Tailwind CSS v4**: A utility-first CSS framework to style the app.

## Tech Stack

- **Next.js 15**: A React framework for production.
- **Tailwind CSS v4**: A utility-first CSS framework for styling.
- **TypeScript**: Static typing for improved developer experience.
- **GitHub API**: For fetching data from GitHub.

## Setup

### Prerequisites

- Node.js (>= 16.8.0)
- npm (>= 8.0.0)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/himangmyid/GitHub-Profile-Viewer-NextJS.git
   cd GitHub-Profile-Viewer-NextJS


This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
## GitHub Profile Viewer - Next.js

### (iPhone)
![Dark Mode - iPhone](https://github.com/himangmyid/GitHub-Profile-Viewer-NextJS/blob/main/public/gbr%20mode%20iphone.png?raw=true)

### (Mac)
![Dark Mode - Mac](https://github.com/himangmyid/GitHub-Profile-Viewer-NextJS/blob/main/public/gbr%20mode%20mac.png?raw=true)

# 1. Instal react-icons

```
npm install react-icons
# atau jika menggunakan yarn
yarn add react-icons
```

# 2. lucide-react

```
npm install lucide-react
```
and etc...

# folder Entahlah
```
📂 GITHUBPROFILE  --> (Root folder proyek)
 ├── 📂 .next  --> (Folder build otomatis dari Next.js, jangan diedit langsung)
 ├── 📂 node_modules  --> (Folder dependencies dari npm/yarn)
 ├── 📂 public  --> (Folder untuk aset statis seperti gambar, favicon, dll.)
 ├── 📂 src  --> (Folder utama tempat kode sumber proyek)
 │   ├── 📂 app  --> (Folder utama untuk halaman Next.js)
 │   │   ├── 📂 repo/[id]  --> (Folder untuk halaman repository detail dengan dynamic route `[id]`)
 │   │   ├── page.tsx  --> (Halaman utama aplikasi)
 │   │   ├── favicon.ico  --> (Ikon kecil untuk browser tab)
 │   │   ├── globals.css  --> (File CSS global untuk styling aplikasi)
 │   │   ├── layout.tsx  --> (File layout utama untuk membungkus halaman)
 │   │   ├── page.module.css  --> (CSS module untuk `page.tsx`)
 │   │   ├── page.tsx  --> (Halaman utama yang menampilkan profil GitHub)
 │   ├── 📂 components  --> (Komponen UI yang bisa digunakan ulang)
 │   │   ├── 📂 ui  --> (Sub-folder untuk komponen UI)
 │   │   │   ├── Button.tsx  --> (Komponen tombol kustom)
 │   │   │   ├── GithubProfile.tsx  --> (Komponen untuk menampilkan profil GitHub)
 │   │   │   ├── RepoCard.tsx  --> (Komponen kartu untuk setiap repository)
 │   │   │   ├── RepoList.tsx  --> (Komponen daftar repository)
 │   ├── 📂 utils  --> (Folder untuk helper function atau fungsi utilitas)
 │   │   ├── github.ts  --> (Fungsi untuk fetch data dari GitHub API)
 │   │   ├── types.ts  --> (Definisi tipe data untuk TypeScript)
 ├── .gitignore  --> (File untuk menentukan file/folder yang diabaikan Git)
 ├── eslint.config.mjs  --> (Konfigurasi ESLint untuk linting kode)
 ├── next-env.d.ts  --> (File environment untuk TypeScript dan Next.js)
 ├── next.config.js  --> (Konfigurasi Next.js)
 ├── package-lock.json  --> (Lock file untuk package manager)
 ├── package.json  --> (Daftar dependencies dan skrip proyek)
 ├── postcss.config.mjs  --> (Konfigurasi PostCSS untuk styling)
 ├── README.md  --> (Dokumentasi proyek)
 ├── tsconfig.json  --> (Konfigurasi TypeScript)
```
# if you want to use this code, or this repo...

# change the username ```Himangmyid``` in each file

```

src\app\repo\[id]\page.tsx

src\app\page.tsx

src\components\RepoList.tsx

```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

<hr/>
<div align="center">
<h1 align="center">💸 Support me💰</h1>
<table align="center">
  <tr>
     <td align="center">
      <a href="https://paypal.me/DogGhozt" target="_blank">
        <img src="https://raw.githubusercontent.com/maurodesouza/profile-readme-generator/master/src/assets/icons/social/paypal/default.svg" width="52" height="40" alt="paypal logo" />
      </a>
    </td>
    <td align="center">
  <a href="https://trakteer.id/himang/tip" target="_blank">
    <img src="https://img.icons8.com/?size=100&id=13013&format=png&color=000000" width="52" height="40" alt="buy me a coffee" />
  </a>
</td>
  </tr>
</table>
</div>
<hr/>

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.




<p align="right">
  <a href="#top">
    <img src="https://img.icons8.com/?size=100&id=114041&format=png" alt="Back to top" width="70" height="70">
  </a>
</p>

