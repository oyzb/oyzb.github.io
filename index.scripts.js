const translations = {
    en: {
        name: "Zibo Ouyang",
        contact: "Email: andyoyang@gmail.com | Address: Beijing China",
        "education-title": "Education",
        education1: "<strong>Tsinghua University</strong> - BioInformatics - Data Mining - Master - 2011.8~2014.7",
        education2: "<strong>HUST</strong> - EE - Bachelor - 2006.9~2010.8",
        "experience-title": "Work",
        experience1: "<strong>CITIC Bank</strong> - Senior Manager at IT Department - 2014.8~2019.12",
        "experience1-desc": "Work on IT projects and Algorithm Models in Finance Marketing",
        experience2: "<strong>China AMC</strong> - VP at IT/Data Department - 2020.1~now",
        "experience2-desc": "Work as Financial Engineer in AI Marketing and Investments",
        "skills-title": "Skills",
        skills: "Python/Java",
        "projects-title": "Experience",
        projects: "<strong>Project A</strong>",
        "translate-btn": "中文版本",
        "download-pdf-btn": "PDF"
    },
    zh: {
        name: "欧阳子博",
        contact: "邮箱: andyoyang@gmail.com | 地址: 中国北京",
        "education-title": "教育背景",
        education1: "<strong>清华大学</strong> - 生物信息学 - 数据挖掘 - 硕士 - 2011.8~2014.7",
        education2: "<strong>华中科技大学</strong> - 电子工程 - 学士 - 2006.9~2010.8",
        "experience-title": "工作经历",
        experience1: "<strong>中信银行</strong> - IT部门高级经理 - 2014.8~2019.12",
        "experience1-desc": "负责金融营销领域的IT项目和算法模型",
        experience2: "<strong>华夏基金</strong> - IT/数据部门副总裁 - 2020.1~至今",
        "experience2-desc": "担任AI营销和投资领域的金融工程师",
        "skills-title": "技能",
        skills: "Python/Java",
        "projects-title": "项目经验",
        projects: "<strong>项目A</strong>",
        "translate-btn": "English Version",
        "download-pdf-btn": "PDF"
    }
};

let currentLang = 'en';

function translate(lang) {
    currentLang = lang;
    for (const [key, value] of Object.entries(translations[lang])) {
        const element = document.getElementById(key);
        if (element) {
            element.innerHTML = value;
        }
    }
}

document.getElementById('translate-btn').addEventListener('click', () => {
    translate(currentLang === 'en' ? 'zh' : 'en');
});

document.getElementById('download-pdf-btn').addEventListener('click', () => {
    const element = document.getElementById('resume');
    html2pdf().from(element).save('Zibo_Ouyang_Resume.pdf');
});

// Initialize with English
translate('en');