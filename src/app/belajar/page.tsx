// app/page.tsx

import Navbar from "@/components/fraqments/navbar";

const Home = () => {
  return (
    <main style={{ padding: "20px" }}>
      <Navbar />
      <h1 className="text-xl font-extrabold my-2">Karya Ilimiah Itu mudah!</h1>
      <p>
        Karya ilmiah sering kali dianggap sebagai sesuatu yang rumit dan hanya
        bisa dilakukan oleh para akademisi. Namun, sebenarnya, membuat karya
        ilmiah itu lebih mudah dari yang dibayangkan. Dalam artikel ini, kita
        akan membahas langkah-langkah sederhana yang dapat membantu siapa saja
        dalam menyusun karya ilmiah yang berkualitas.
      </p>

      <h2 className="text-lg font-semibold my-2">Apa Itu Karya Ilmiah?</h2>
      <p>
        Karya ilmiah adalah tulisan yang disusun berdasarkan hasil penelitian,
        pengamatan, atau analisis suatu fenomena. Tujuannya adalah untuk
        menyampaikan informasi, mengembangkan pengetahuan, atau memberikan
        solusi atas masalah tertentu. Karya ilmiah umumnya terdiri dari beberapa
        bagian, seperti pendahuluan, tinjauan pustaka, metode penelitian, hasil
        dan pembahasan, serta kesimpulan.
      </p>

      <h2 className="text-lg font-semibold my-2">
        Langkah-Langkah Menyusun Karya Ilmiah
      </h2>
      <ol>
        <li>
          <strong>Pilih Topik yang Menarik</strong>
          <br />
          Memilih topik adalah langkah awal yang sangat penting. Pilihlah tema
          yang sesuai dengan minat dan pengetahuanmu. Pastikan topik tersebut
          relevan dan memiliki cukup sumber untuk dijadikan referensi.
        </li>
        <li>
          <strong>Lakukan Riset Awal</strong>
          <br />
          Sebelum mulai menulis, lakukan riset untuk mendapatkan informasi dasar
          tentang topik yang dipilih. Baca buku, artikel, dan jurnal yang
          relevan untuk memperluas pemahamanmu.
        </li>
        <li>
          <strong>Buat Kerangka Karya Ilmiah</strong>
          <br />
          Kerangka adalah panduan yang akan membantumu menyusun tulisan dengan
          terstruktur. Tentukan bagian-bagian utama yang akan dimasukkan,
          seperti pendahuluan, metode, hasil, dan kesimpulan.
        </li>
        <li>
          <strong>Tulis Pendahuluan</strong>
          <br />
          Pendahuluan harus menarik dan jelas. Sampaikan latar belakang topik,
          rumusan masalah, serta tujuan dari penelitian. Ini akan memberi
          pembaca pemahaman tentang pentingnya karya ilmiah yang akan dibaca.
        </li>
        <li>
          <strong>Deskripsikan Metode Penelitian</strong>
          <br />
          Dalam bagian ini, jelaskan metode yang digunakan dalam penelitian.
          Apakah itu eksperimen, survei, atau analisis data? Rincikan
          langkah-langkah yang diambil agar pembaca bisa memahami proses
          penelitianmu.
        </li>
        <li>
          <strong>Sajikan Hasil dan Pembahasan</strong>
          <br />
          Setelah melakukan penelitian, sajikan hasil yang didapatkan secara
          jelas dan sistematis. Diskusikan hasil tersebut, hubungkan dengan
          teori yang ada, dan jelaskan implikasinya.
        </li>
        <li>
          <strong>Tulis Kesimpulan</strong>
          <br />
          Kesimpulan harus merangkum temuan utama dan memberikan rekomendasi
          atau saran untuk penelitian selanjutnya. Ini adalah kesempatanmu untuk
          menegaskan kembali pentingnya topik yang telah dibahas.
        </li>
        <li>
          <strong>Revisi dan Edit</strong>
          <br />
          Setelah selesai menulis, jangan lupa untuk melakukan revisi. Periksa
          kesalahan tata bahasa, ejaan, dan pastikan semua informasi akurat.
          Mintalah orang lain untuk membaca karyamu agar mendapatkan masukan
          yang konstruktif.
        </li>
      </ol>

      <h2 className="text-lg font-semibold my-1">Tips Agar Karya Ilmiah Menjadi Lebih Mudah</h2>
      <ul>
        <li>
          <strong>Buat Jadwal:</strong> Tentukan waktu khusus untuk menulis agar
          tidak terburu-buru di akhir.
        </li>
        <li>
          <strong>Gunakan Alat Bantu:</strong> Manfaatkan perangkat lunak
          seperti aplikasi pengolah kata untuk membantu dalam penulisan dan
          pengeditan.
        </li>
        <li>
          <strong>Belajar dari Contoh:</strong> Bacalah karya ilmiah yang sudah
          ada untuk memahami gaya penulisan dan struktur yang tepat.
        </li>
      </ul>

      <h2 className="text-lg font-semibold my-1">Kesimpulan</h2>
      <p>
        Membuat karya ilmiah sebenarnya tidak sesulit yang dibayangkan. Dengan
        mengikuti langkah-langkah yang jelas dan mengorganisir ide dengan baik,
        siapa pun dapat menyusun karya ilmiah yang berkualitas. Ingatlah bahwa
        latihan dan pengalaman akan membuatmu semakin mahir. Jadi, jangan ragu
        untuk mulai menulis dan berbagi pengetahuanmu!
      </p>
      <a href="/blog">Lihat Artikel</a>
    </main>
  );
};

export default Home;
