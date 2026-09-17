/* ===== MENAMPILKAN SAPAAN SESUAI JAM ===== */
function tampilkanSapaan() {

    let elemenSapaan = document.getElementById("sapaan");

    if (elemenSapaan) {

        let jamSekarang = new Date().getHours(); // ambil jam saat ini
        let pesan = "";

        if (jamSekarang >= 5 && jamSekarang < 11) {

            pesan = "Selamat Pagi! Waktu yang pas buat ngopi hangat";

        } else if (jamSekarang >= 11 && jamSekarang < 15) {

            pesan = "Selamat Siang! Yuk mampir dan santai di Moon Coffee";

        } else if (jamSekarang >= 15 && jamSekarang < 18) {

            pesan = "Selamat Sore! Waktunya coffee break";

        } else {

            pesan = "Selamat Malam! Ditemani kopi hangat lebih nyaman";

        }

        elemenSapaan.textContent = pesan; // mengubah tulisan di dalam elemen
    }
}


/* ===== FORMAT HARGA JADI Rp35.000 ===== */
function formatHarga(angka) {

    return "Rp" + angka.toLocaleString("id-ID");

}


/* ===== TOMBOL ORDER DI MENU & BEST SELLER ===== */
function pesanMenu(namaProduk, hargaProduk) {

    let konfirmasi = confirm(
        "Pesan " + namaProduk + " seharga " + formatHarga(hargaProduk) + "?"
    );

    if (konfirmasi == true) {

        alert(
            "Pesanan " + namaProduk +
            " sedang diproses! Terima kasih sudah memesan di Moon Coffee."
        );

    } else {

        alert("Pesanan dibatalkan.");

    }
}


/* ===== VALIDASI FORM RESERVASI ===== */
function validasiReservasi(event) {

    event.preventDefault(); // mencegah halaman pindah / reload

    let nama = document.getElementById("res-nama").value;
    let email = document.getElementById("res-email").value;
    let telepon = document.getElementById("res-telepon").value;
    let tanggal = document.getElementById("res-tanggal").value;
    let waktu = document.getElementById("res-waktu").value;
    let meja = document.getElementById("res-meja").value;
    let jumlahOrang = document.getElementById("res-jumlah").value;


    if (nama == "") {

        alert("Nama lengkap wajib diisi!");

    }

    else if (email == "") {

        alert("Email wajib diisi!");

    }

    else if (email.includes("@") == false) {

        alert("Format email tidak valid, cek kembali ya!");

    }

    else if (telepon == "") {

        alert("Nomor telepon wajib diisi!");

    }

    else if (telepon.length < 10) {

        alert("Nomor telepon minimal 10 angka!");

    }

    else if (tanggal == "") {

        alert("Tanggal reservasi wajib diisi!");

    }

    else if (waktu == "") {

        alert("Jam reservasi wajib diisi!");

    }

    else if (meja == "Pilih Meja") {

        alert("Silakan pilih tipe meja terlebih dahulu!");

    }

    else if (jumlahOrang == "") {

        alert("Jumlah orang wajib diisi!");

    }

    else if (jumlahOrang <= 0) {

        alert("Jumlah orang harus lebih dari 0!");

    }

    else {

        let konfirmasi = confirm(
            "Konfirmasi reservasi atas nama " +
            nama +
            " untuk " +
            jumlahOrang +
            " orang pada " +
            tanggal +
            " jam " +
            waktu +
            ". Kirim sekarang?"
        );

        if (konfirmasi == true) {

            alert(
                "Terima kasih " +
                nama +
                "! Reservasi kamu berhasil diterima. Sampai jumpa di Moon Coffee."
            );

            document.getElementById("formReservasi").reset();
        }
    }
}


/* ===== VALIDASI FORM CONTACT ===== */
function validasiKontak(event) {

    event.preventDefault(); // mencegah halaman pindah / reload

    let nama = document.getElementById("kontak-nama").value;
    let email = document.getElementById("kontak-email").value;
    let telepon = document.getElementById("kontak-telepon").value;
    let pesan = document.getElementById("kontak-pesan").value;


    if (nama == "") {

        alert("Nama lengkap wajib diisi!");

    }

    else if (email == "") {

        alert("Email wajib diisi!");

    }

    else if (email.includes("@") == false) {

        alert("Format email tidak valid, cek kembali ya!");

    }

    else if (telepon == "") {

        alert("Nomor telepon wajib diisi!");

    }

    else if (pesan == "") {

        alert("Pesan tidak boleh kosong!");

    }

    else {

        alert(
            "Terima kasih " +
            nama +
            "! Pesan kamu sudah terkirim. Kami akan segera membalas."
        );

        document.getElementById("formKontak").reset();
    }
}


/* ===== DIJALANKAN SAAT HALAMAN SELESAI DIMUAT ===== */
document.addEventListener("DOMContentLoaded", function () {

    tampilkanSapaan();

});
