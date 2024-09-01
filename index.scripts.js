document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM完全加载并解析');

    document.getElementById('download-pdf-btn').addEventListener('click', downloadPDF);
    document.getElementById('translate-btn').addEventListener('click', toggleLanguage);

    let currentLanguage = 'zh';

    const translations = {
        zh: {
            translation: {
                'name': '北辰',
                'email': 'Email: bc@bec.com',
                'phone': '电话: 123-456-7890',
                'address': '地址: 北京市朝阳区',
                'education_title': '教育背景',
                'education': '清华大学 ',
                'experience_title': '工作经历',
                'experience': 'ABC科技有限公司 - 软件工程师',
                'skills_title': '技能',
                'skills': '熟练掌握Java、Python编程语言',
                'projects_title': '项目经验',
                'projects': '在线教育平台'
            }
        },
        en: {
            translation: {
                'name': 'Zibo Ouyang',
                'email': 'Email: andyoyang@gmail.com | Address: Beijing China',
                'phone': 'Phone: 123-456-7890',
                'address': 'Address: Chaoyang District, Beijing',
                'education_title': 'Education Background',
                'education': 'Tsinghua University BioInformatics - Data Mining - Master - 2011.8~2014.7',
                'experience_title': 'Work Experience',
                'experience': 'CITIC Bank - Senior Manager at IT Department - 2014.8~2019.12',
                'experience': 'China AMC - VP at IT/Data Department - 2020.1~now',
                'skills_title': 'Skills',
                'skills': 'Proficient in Java, Python programming languages',
                'projects_title': 'Project Experience',
                'projects': 'Online Education Platform'
            }
        }
    };

    i18next.init({
        lng: currentLanguage,
        resources: translations
    }, (err, t) => {
        if (err) return console.error('i18next 初始化失败', err);
        updateContent();
    });

    function updateContent() {
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            element.innerText = i18next.t(key);
        });
    }

    function toggleLanguage() {
        currentLanguage = currentLanguage === 'zh' ? 'en' : 'zh';
        i18next.changeLanguage(currentLanguage, (err, t) => {
            if (err) return console.error('切换语言失败', err);
            updateContent();
            const translateBtn = document.getElementById('translate-btn');
            if (translateBtn) {
                translateBtn.innerText = currentLanguage === 'zh' ? 'English Version' : '中文版';
            }
        });
    }

    function downloadPDF() {
        console.log('开始生成PDF');
        const buttons = document.querySelectorAll('.buttons button');
        buttons.forEach(button => button.style.display = 'none'); // 隐藏所有按钮

        const element = document.getElementById('resume');
        html2pdf().from(element).set({
            margin: 10,
            filename: 'resume.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'pt', format: 'a4', orientation: 'portrait' }
        }).save().then(() => {
            console.log('PDF生成完成');
            buttons.forEach(button => button.style.display = 'inline-block'); // 显示所有按钮
        }).catch((error) => {
            console.error('PDF生成失败', error);
            buttons.forEach(button => button.style.display = 'inline-block'); // 显示所有按钮
        });
    }
});