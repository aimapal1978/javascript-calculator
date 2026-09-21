

// 1. الوصول إلى شاشة الآلة الحاسبة عبر الـ ID الذي وضعناه في الـ HTML
const screen = document.getElementById('screen');

// 2. دالة لإضافة الأرقام أو الرموز إلى الشاشة عند الضغط عليها
function appendValue(value) {
    screen.value += value; // تقوم بإضافة القيمة الجديدة بجانب القيمة القديمة على الشاشة
}

// 3. دالة لمسح الشاشة بالكامل عند الضغط على زر C
function clearScreen() {
    screen.value = ''; // تفريغ حقل الشاشة
}

// 4. دالة لحساب النتيجة النهائية عند الضغط على زر =
function calculate() {
    try {
        // دالة eval تأخذ النص الموجود على الشاشة (مثل "5+3") وتقوم بحسابه برمجياً
        screen.value = eval(screen.value);
    } catch (error) {
        // إذا كتب المستخدم شيئاً خاطئاً رياضياً، تظهر كلمة خطأ بدلاً من تعطل البرنامج
        screen.value = 'خطأ';
    }
}
// دالة لحذف آخر رقم تم إدخاله (الحذف التدريجي)
function deleteLast() {
    // دالة slice(0, -1) تقوم بقص النص من البداية وتتجاهل آخر حرف فقط
    screen.value = screen.value.slice(0, -1);
}

// مراقبة الضغط على لوحة المفاتيح
document.addEventListener('keydown', function(event) {
    const key = event.key;

    // إذا كان الزر رقماً أو عملية رياضية (+, -, *, /)
    if (!isNaN(key) || ['+', '-', '*', '/', '.'].includes(key)) {
        appendValue(key);
    } 
    // إذا ضغط المستخدم على زر Enter أو علامة = لتنفيذ الحساب
    else if (key === 'Enter' || key === '=') {
        event.preventDefault(); // منع السلوك الافتراضي لزر الإدخال
        calculate();
    } 
    // إذا ضغط المستخدم على زر Backspace للحذف
    else if (key === 'Backspace') {
        deleteLast();
    } 
    // إذا ضغط المستخدم على حرف c أو C لمسح الشاشة
    else if (key === 'c' || key === 'C') {
        clearScreen();
    }
});