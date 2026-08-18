function openRegister(packageName) {
    const modal = document.getElementById("registerModal");
    const packageText = document.getElementById("modalPackage");

    if (packageText) {
        packageText.textContent = packageName;
    }

    if (modal) {
        modal.classList.add("show");
    }
}

function closeRegister() {
    const modal = document.getElementById("registerModal");

    if (modal) {
        modal.classList.remove("show");
    }
}


// Đóng cửa sổ khi click ra bên ngoài
document.addEventListener("click", function (event) {

    const modal = document.getElementById("registerModal");

    if (
        modal &&
        event.target === modal
    ) {
        closeRegister();
    }

});


// Xử lý form đăng ký
const registerForm = document.getElementById("registerForm");

if (registerForm) {

    registerForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const selectedPackage =
            document.getElementById("selectedPackage");

        let packageName = "Chưa chọn gói";

        if (
            selectedPackage &&
            selectedPackage.value !== "Chọn gói cước"
        ) {
            packageName = selectedPackage.value;
        }

        openRegister(packageName);

    });

}


// Khi nhấn ESC thì đóng modal
document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {
        closeRegister();
    }

});
