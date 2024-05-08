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

// Fungsi untuk menambahkan kelas "animated" ke setiap bagian saat muncul di dalam viewport
function checkScroll() {
    var sections = document.querySelectorAll(".section");
    sections.forEach(function(section) {
        var position = section.getBoundingClientRect().top;
        var windowHeight = window.innerHeight;
        if (position < windowHeight * 0.75) {
            section.classList.add("animated");
        }
    });
}

// Panggil fungsi checkScroll() saat halaman dimuat dan di-scroll
window.addEventListener("load", checkScroll);
window.addEventListener("scroll", checkScroll);

// Fungsi untuk menambahkan kelas animasi saat elemen masuk ke dalam viewport
function animateOnScroll() {
    let lastScrollTop = 0;
    window.addEventListener("scroll", function () {
        let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
        if (currentScroll > lastScrollTop) {
            // Scrolling down
            document.querySelectorAll('.animated-up').forEach(element => {
                element.classList.remove('animated-up');
            });
        } else {
            // Scrolling up
            document.querySelectorAll('.section.animated').forEach(element => {
                if (isScrolledIntoView(element)) {
                    element.classList.add('animated-up');
                }
            });
        }
        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    }, false);
}

// Fungsi untuk mengecek apakah elemen masuk ke dalam viewport
function isScrolledIntoView(el) {
    let rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
}

// Panggil fungsi saat halaman dimuat
document.addEventListener("DOMContentLoaded", function() {
    animateOnScroll();
});

// Fungsi untuk menampilkan dan menyembunyikan submenu saat tombol "Pengalaman" dihover
function toggleSubmenu() {
    var submenu = document.querySelector('.sub-section');
    submenu.classList.toggle('show');
}

// Selektor untuk tombol "Pengalaman"
var pengalamanButton = document.querySelector('.sidebar-nav ul li:nth-child(3)');

// Tambahkan event listener untuk menampilkan dan menyembunyikan submenu saat tombol "Pengalaman" dihover
pengalamanButton.addEventListener('mouseenter', toggleSubmenu);
pengalamanButton.addEventListener('mouseleave', toggleSubmenu);
