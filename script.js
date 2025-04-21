// عناصر DOM
const phElement = document.getElementById("ph");
const turbidityElement = document.getElementById("turbidity");
const phBox = document.getElementById("ph-box");
const turbidityBox = document.getElementById("turbidity-box");
const refreshBtn = document.getElementById("refresh-btn");

// رابط API الذي يرسل البيانات من الخادم
const apiUrl = 'https://yourwebsite.com/upload.php'; // استبدل هذا بالرابط الفعلي

// دالة لإضافة أنيميشن
function addUpdateAnimation(element) {
    element.classList.remove("update-animation");
    void element.offsetWidth; // إعادة تشغيل الأنيميشن
    element.classList.add("update-animation");
}

// دالة لجلب البيانات من API
function fetchData() {
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const ph = data.ph.toFixed(2);
            const turbidity = data.turbidity.toFixed(2);

            phElement.innerText = ph;
            turbidityElement.innerText = turbidity;

            // إضافة أنيميشن عند التحديث
            addUpdateAnimation(phBox);
            addUpdateAnimation(turbidityBox);
        })
        .catch(error => {
            console.error("خطأ في جلب البيانات:", error);
        });
}

// جلب البيانات عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', fetchData);

// تحديث يدوي عند الضغط على الزر
refreshBtn.addEventListener("click", fetchData);