$(document).ready(function () {
  $(window).scroll(function () {
    // sticky navbar on scroll script
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }

    // scroll-up button show/hide script
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });

  // slide-up script
  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
    // removing smooth scroll on slide-up button click
    $("html").css("scrollBehavior", "auto");
  });

  $(".navbar .menu li a").click(function () {
    // applying again smooth scroll on menu items click
    $("html").css("scrollBehavior", "smooth");
  });

  // toggle menu/navbar script
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });

  // typing text animation script
  var typed = new Typed(".typing", {
    strings: ["Cepat", "Murah", "Stabil"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  var typed = new Typed(".typing-2", {
    strings: ["Cepat", "Murah", "Stabil"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  // owl carousel script
  $(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: false,
      },
    },
  });

  var currentYearElement = document.getElementById("currentYear");

  var currentYear = new Date().getFullYear();

  currentYearElement.textContent = currentYear;
});

function submitForm() {
  var name = document.getElementById("name").value;
  var package = document.getElementById("package").value;
  var nik = document.getElementById("nik").value;
  var address = document.getElementById("address").value;

  if (!name || !package || !nik || !address) {
    alert("Silakan lengkapi semua kolom yang dibutuhkan.");
    return;
  }

  var message =
    "Halo IGN Jelajah, Saya ingin berlangganan dengan data di bawah:\n\n";
  message += "Nama: " + name + "\n";
  message += "Paket: " + package + "\n";
  message += "NIK: " + nik + "\n";
  message += "Alamat: " + address;

  var whatsappUrl =
    "https://wa.me/+6285161671600?text=" + encodeURIComponent(message);

  window.open(whatsappUrl);
}
