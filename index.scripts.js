document.getElementById('download-pdf-btn').addEventListener('click', downloadPDF);
document.getElementById('translate-btn').addEventListener('click', translateToEnglish);

function downloadPDF() {
    console.log('开始生成PDF');
    const button = document.getElementById('download-pdf-btn');
    button.style.display = 'none'; // 隐藏按钮

    const element = document.getElementById('resume');
    html2pdf().from(element).set({
        margin: 10,
        filename: 'resume.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'pt', format: 'a4', orientation: 'portrait' }
    }).save().then(() => {
        console.log('PDF生成完成');
        button.style.display = 'inline-block'; // 显示按钮
    }).catch((error) => {
        console.error('PDF生成失败', error);
        button.style.display = 'inline-block'; // 显示按钮
    });
}

function translateToEnglish() {
    console.log('开始转换为英文');

    const translations = {
        '张三': 'John Doe',
        'Email: zhangsan@example.com': 'Email: john.doe@example.com',
        '电话: 123-456-7890': 'Phone: 123-456-7890',
        '地址: 北京市朝阳区': 'Address: Chaoyang District, Beijing',
        '北京大学 - 计算机科学与技术专业': 'Peking University - Computer Science and Technology',
        'ABC科技有限公司 - 软件工程师': 'ABC Technology Co., Ltd. - Software Engineer',
        '熟练掌握Java、Python编程语言': 'Proficient in Java, Python programming languages',
        '在线教育平台': 'Online Education Platform'
    };

    const elements = {
        'name': document.getElementById('name'),
        'email': document.getElementById('email'),
        'phone': document.getElementById('phone'),
        'address': document.getElementById('address'),
        'education': document.getElementById('education'),
        'experience': document.getElementById('experience'),
        'skills': document.getElementById('skills'),
        'projects': document.getElementById('projects')
    };

    for (const key in elements) {
        const originalText = elements[key].innerText;
        const translatedText = translations[originalText];
        if (translatedText) {
            elements[key].innerText = translatedText;
            console.log(`已翻译: ${originalText} -> ${translatedText}`);
        } else {
            console.log(`未找到翻译: ${originalText}`);
        }
    }

    console.log('转换为英文完成');
}