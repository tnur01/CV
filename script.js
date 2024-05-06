// Fungsi untuk menampilkan modal saat sertifikat diklik
function showCertificate(imagePath) {
    var modal = document.getElementById("imageModal");
    var modalImg = document.getElementById("modalImage");
    modal.style.display = "flex";
    modalImg.src = imagePath;
}

// Fungsi untuk menutup modal
function closeModal() {
    var modal = document.getElementById("imageModal");
    modal.style.display = "none";
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

// Tambahkan event listener untuk menutup modal saat tombol close diklik
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

// Fungsi untuk mengaktifkan mode gelap
function enableDarkMode() {
    document.body.classList.add("dark-mode");
}

// Fungsi untuk menonaktifkan mode gelap
function disableDarkMode() {
    document.body.classList.remove("dark-mode");
}

// Fungsi untuk beralih antara mode gelap dan terang
function toggleDarkMode() {
    if (document.body.classList.contains("dark-mode")) {
        disableDarkMode();
    } else {
        enableDarkMode();
    }
}

// Fungsi untuk menampilkan/menyembunyikan daftar navigasi saat tombol hamburger menu diklik
function toggleNav() {
    var sidebarNav = document.getElementById("sidebarNav");
    sidebarNav.classList.toggle("active");
}

// Fungsi untuk mengaktifkan mode gelap
function enableDarkMode() {
    document.body.classList.add("dark-mode");
    document.getElementById("modeIcon").classList.remove("bx-sun");
    document.getElementById("modeIcon").classList.add("bx-moon");
}

// Fungsi untuk menonaktifkan mode gelap
function disableDarkMode() {
    document.body.classList.remove("dark-mode");
    document.getElementById("modeIcon").classList.remove("bx-moon");
    document.getElementById("modeIcon").classList.add("bx-sun");
}

// Fungsi untuk beralih antara mode gelap dan terang
function toggleDarkMode() {
    if (document.body.classList.contains("dark-mode")) {
        disableDarkMode();
    } else {
        enableDarkMode();
    }
}
