const GOOGLE_SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbyPvEecFIaWmlNO20yt2mZga_heIOAgBHcq2ryYePrL6pMaN2dmiyzSdbiS-QL_ZY4Xkg/exec";


document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("registerForm");

    if (!form) {
        console.log("Không tìm thấy form registerForm");
        return;
    }


    form.addEventListener("submit", async function (event) {

        event.preventDefault();


        const packageInput =
            document.getElementById("package");

        const nameInput =
            document.getElementById("name");

        const phoneInput =
            document.getElementById("phone");


        const packageName =
            packageInput ? packageInput.value.trim() : "";

        const customerName =
            nameInput ? nameInput.value.trim() : "";

        const phone =
            phoneInput ? phoneInput.value.trim() : "";


        if (!packageName) {
            alert("Vui lòng chọn gói cước.");
            return;
        }


        if (!customerName) {
            alert("Vui lòng nhập họ và tên.");
            return;
        }


        if (!phone) {
            alert("Vui lòng nhập số điện thoại.");
            return;
        }


        const button =
            form.querySelector("button[type='submit']");


        if (button) {
            button.disabled = true;
            button.textContent = "ĐANG GỬI...";
        }


        const data = {
            package: packageName,
            name: customerName,
            phone: phone
        };


        try {

            await fetch(GOOGLE_SCRIPT_URL, {
                method: "POST",
                mode: "no-cors",
                headers: {
                    "Content-Type": "text/plain;charset=utf-8"
                },
                body: JSON.stringify(data)
            });


            alert(
                "Đăng ký thành công!\n\n" +
                "Thông tin của bạn đã được ghi nhận. " +
                "Chúng tôi sẽ liên hệ tư vấn trong thời gian sớm nhất."
            );


            form.reset();


        } catch (error) {

            console.error(error);

            alert(
                "Không thể gửi thông tin lúc này. " +
                "Vui lòng thử lại sau."
            );

        } finally {

            if (button) {
                button.disabled = false;
                button.textContent =
                    "GỬI YÊU CẦU ĐĂNG KÝ";
            }

        }

    });

});
