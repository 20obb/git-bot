// تغيير لون الهيدر عند التمرير
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// النصوص المترجمة للغات متعددة
const translations = {
    en: {
        "home-welcome": "Welcome to the Cybersecurity Website",
        "home-description": "Your data protection is our priority.",
        "start-now": "Start Now",
        "about-title": "About the Website",
        "about-description": "This website aims to raise awareness about cybersecurity and how to protect your data from digital attacks.",
        "ethical-hacking-title": "Ethical Hacking and Security Awareness",
        "ethical-hacking-description": "Ethical hacking is the process of testing systems and networks to discover vulnerabilities in order to improve security.",
        "contact-title": "Contact Us",
        "contact-form-name": "Name",
        "contact-form-email": "Email",
        "contact-form-message": "Your Message",
        "submit-button": "Submit",
        "password-generator-title": "Secure Password Generator",
        "generated-password-placeholder": "Your password will appear here"
    },
    ar: {
        "home-welcome": "مرحبًا بك في موقع الأمن السيبراني",
        "home-description": "حماية بياناتك هي أولويتنا.",
        "start-now": "ابدأ الآن",
        "about-title": "عن الموقع",
        "about-description": "هذا الموقع يهدف إلى رفع الوعي حول الأمن السيبراني وكيفية حماية بياناتك من الهجمات الرقمية.",
        "ethical-hacking-title": "الاختراق الأخلاقي والتوعية الأمنية",
        "ethical-hacking-description": "الاختراق الأخلاقي هو عملية اختبار الأنظمة والشبكات لاكتشاف الثغرات بهدف تعزيز الأمان وحمايتها من الهجمات.",
        "contact-title": "اتصل بنا",
        "contact-form-name": "الاسم",
        "contact-form-email": "البريد الإلكتروني",
        "contact-form-message": "رسالتك",
        "submit-button": "إرسال",
        "password-generator-title": "مولد كلمات مرور امنة تحميك من الاختراق",
        "generated-password-placeholder": "هنا ستظهر كلمة المرور"
    }
};

// تغيير اللغة
function setLanguage(lang) {
    document.body.classList.toggle('rtl', lang === 'ar');

    Object.keys(translations[lang]).forEach(key => {
        const elements = document.querySelectorAll(`.${key}`);
        elements.forEach(element => {
            element.textContent = translations[lang][key];
        });
    });
}

// إضافة أحداث التبديل للغة
document.getElementById('lang-en').addEventListener('click', () => setLanguage('en'));
document.getElementById('lang-ar').addEventListener('click', () => setLanguage('ar'));