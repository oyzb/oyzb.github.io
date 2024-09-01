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

    document.getElementById('name').innerText = translations['张三'];
    document.getElementById('email').innerText = translations['Email: zhangsan@example.com'];
    document.getElementById('phone').innerText = translations['电话: 123-456-7890'];
    document.getElementById('address').innerText = translations['地址: 北京市朝阳区'];
    document.getElementById('education').innerText = translations['北京大学 - 计算机科学与技术专业'];
    document.getElementById('experience').innerText = translations['ABC科技有限公司 - 软件工程师'];
    document.getElementById('skills').innerText = translations['熟练掌握Java、Python编程语言'];
    document.getElementById('projects').innerText = translations['在线教育平台'];
}