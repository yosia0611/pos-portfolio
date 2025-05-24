// Data produk dummy untuk awal
let produkList = [
  { nama: "Produk A", harga: 10000, stok: 5 },
  { nama: "Produk B", harga: 15000, stok: 10 },
  { nama: "Produk C", harga: 20000, stok: 7 },
];

// Fungsi render data ke tabel
function renderTable() {
  const tbody = document.querySelector("#produkTable tbody");
  tbody.innerHTML = ""; // Kosongkan tabel dulu

  produkList.forEach((produk, index) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${index + 1}</td>
      <td>${produk.nama}</td>
      <td>Rp ${produk.harga.toLocaleString("id-ID")}</td>
      <td>${produk.stok}</td>
      <td>
        <button class="edit-btn" onclick="editProduk(${index})">Edit</button>
        <button class="delete-btn" onclick="hapusProduk(${index})">Hapus</button>
      </td>
    `;

    tbody.appendChild(row);
  });
}

// Fungsi tambah produk
function tambahProduk() {
  const nama = prompt("Masukkan nama produk:");
  if (!nama) return;

  const harga = parseInt(prompt("Masukkan harga produk:"));
  if (isNaN(harga)) return alert("Harga tidak valid!");

  const stok = parseInt(prompt("Masukkan stok produk:"));
  if (isNaN(stok)) return alert("Stok tidak valid!");

  produkList.push({ nama, harga, stok });
  renderTable();
}

// Fungsi edit produk
function editProduk(index) {
  const produk = produkList[index];

  const namaBaru = prompt("Edit nama produk:", produk.nama);
  if (!namaBaru) return;

  const hargaBaru = parseInt(prompt("Edit harga produk:", produk.harga));
  if (isNaN(hargaBaru)) return alert("Harga tidak valid!");

  const stokBaru = parseInt(prompt("Edit stok produk:", produk.stok));
  if (isNaN(stokBaru)) return alert("Stok tidak valid!");

  produkList[index] = { nama: namaBaru, harga: hargaBaru, stok: stokBaru };
  renderTable();
}

// Fungsi hapus produk
function hapusProduk(index) {
  const yakin = confirm("Yakin ingin menghapus produk ini?");
  if (yakin) {
    produkList.splice(index, 1);
    renderTable();
  }
}

// Tambahkan event listener ke tombol tambah produk
document.querySelector("#tambahProdukBtn").addEventListener("click", tambahProduk);

// Render tabel saat pertama kali halaman dimuat
renderTable();