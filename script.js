// ===============================
// ĐĂNG KÝ GÓI CƯỚC
// ===============================

const modal = document.getElementById("registerModal");
const modalPackage = document.getElementById("modalPackage");
const selectedPackage = document.getElementById("selectedPackage");
const registerForm = document.getElementById("registerForm");


// Mở cửa sổ đăng ký
function openRegister(packageName) {

    if (modalPackage) {
        modalPackage.textContent = packageName;
    }

    if (selectedPackage) {
        selectedPackage.value = packageName;
    }

    if (modal) {
        modal.classList.add("show");
    }
}


// Đóng cửa sổ đăng ký
function closeRegister() {

    if (modal) {
        modal.classList.remove("show");
    }
}


// Bấm ra ngoài Modal để đóng
if (modal) {

    modal.addEventListener("click", function(event) {

        if (event.target === modal) {
            closeRegister();
        }

    });

}


// Nhấn ESC để đóng Modal
document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {
        closeRegister();
    }

});


// ===============================
// FORM ĐĂNG KÝ
// ===============================

if (registerForm) {

    registerForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const packageName =
            selectedPackage
                ? selectedPackage.value
                : "Chưa chọn gói";

        openRegister(packageName);

    });

}


// ===============================
// TỰ ĐỘNG CHỌN GÓI KHI BẤM NÚT
// ===============================

document.querySelectorAll(".package-button").forEach(function(button) {

    button.addEventListener("click", function() {

        const packageName =
            button.closest(".package")
                  ?.querySelector("h3")
                  ?.textContent
                  .trim();

        if (packageName && selectedPackage) {
            selectedPackage.value = packageName;
        }

    });

});


// ===============================
// HEADER KHI CUỘN TRANG
// ===============================

window.addEventListener("scroll", function() {

    const header = document.querySelector(".header");

    if (!header) return;

    if (window.scrollY > 30) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});


// ===============================
// ANIMATION NHẸ KHI HIỆN NỘI DUNG
// ===============================

const observer = new IntersectionObserver(
    function(entries) {

        entries.forEach(function(entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

            }

        });

    },
    {
        threshold: 0.12
    }
);


document.querySelectorAll(
    ".benefit, .package, .promotion-inner, .register-box"
).forEach(function(element) {

    observer.observe(element);

});
