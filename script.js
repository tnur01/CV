// Fungsi untuk menampilkan gambar saat elemen diklik
function showCertificate(imagePath) {
    var modal = document.getElementById("imageModal");
    var modalImg = document.getElementById("modalImage");
    modal.style.display = "block";
    modalImg.src = imagePath;
}

// Tambahkan event listener untuk setiap elemen sertifikat
document.getElementById("cert1").addEventListener("click", function () {
    showCertificate("redhat.jpg");
});

document.getElementById("cert2").addEventListener("click", function () {
    showCertificate("ser2.jpg");
});

document.getElementById("cert3").addEventListener("click", function () {
    showCertificate("ser3.jpg");
});

document.getElementById("cert4").addEventListener("click", function () {
    showCertificate("ser4.jpg");
});

document.getElementById("cert5").addEventListener("click", function () {
    showCertificate("ser5.jpg");
});

document.getElementById("cert6").addEventListener("click", function () {
    showCertificate("ser6.jpg");
});

document.getElementById("cert7").addEventListener("click", function () {
    showCertificate("ser7.jpg");
});

document.getElementById("cert8").addEventListener("click", function () {
    showCertificate("ser8.jpg");
});

// Fungsi untuk menutup modal
function closeModal() {
    var modal = document.getElementById("imageModal");
    modal.style.display = "none";
}

// Tambahkan event listener untuk tombol close
document.getElementById("imageModal").getElementsByClassName("close")[0].addEventListener("click", function() {
    closeModal();
});

// Tambahkan event listener untuk menutup modal saat mengklik di luar modal
window.addEventListener("click", function(event) {
    var modal = document.getElementById("imageModal");
    if (event.target == modal) {
        closeModal();
    }
});

// Fungsi untuk mengaktifkan mode gelap atau terang
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
    var modeIcon = document.getElementById("modeIcon");
    modeIcon.classList.toggle("bx-sun");
    modeIcon.classList.toggle("bx-moon");
}
