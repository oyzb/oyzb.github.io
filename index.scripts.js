// async function downloadPDF() {
//     const { jsPDF } = window.jspdf;
//     const pdf = new jsPDF({
//         orientation: 'portrait',
//         unit: 'px',
//         format: [800, 1000]
//     });
//     const resume = document.querySelector('.resume');

//     const canvas = await html2canvas(resume, { scale: 1.5, useCORS: true });
//     const imgData = canvas.toDataURL('image/jpeg', 0.8); // 使用JPEG格式并降低质量
//     pdf.addImage(imgData, 'JPEG', 0, 0, pdf.internal.pageSize.getWidth(), pdf.internal.pageSize.getHeight());
//     pdf.save('oyzb.pdf');
// }

// function downloadMD() {
//     const name = document.querySelector('.header h1')?.innerText;
//     const email = document.querySelector('.contact-info p:nth-child(1)')?.innerText.replace('Email: ', '');
//     const phone = document.querySelector('.contact-info p:nth-child(2)')?.innerText.replace('电话: ', '');
//     const address = document.querySelector('.contact-info p:nth-child(3)')?.innerText.replace('地址: ', '');
//     const education = document.querySelector('.section:nth-child(1) p')?.innerText;
//     const experience = document.querySelector('.section:nth-child(2) p')?.innerText;
//     const skills = document.querySelector('.section:nth-child(3) p')?.innerText;
//     const projects = document.querySelector('.section:nth-child(4) p')?.innerText;

//     if (!name || !email || !phone || !address || !education || !experience || !skills || !projects) {
//         alert('某些元素未找到，请检查HTML结构。');
//         return;
//     }

//     const mdContent = `# ${name}

// ## 联系方式
// - Email: ${email}
// - 电话: ${phone}
// - 地址: ${address}

// ## 教育背景
// ${education}

// ## 工作经历
// ${experience}

// ## 技能
// ${skills}

// ## 项目经验
// ${projects}
// `;

//     const blob = new Blob([mdContent], { type: 'text/markdown;charset=utf-8' });
//     const url = URL.createObjectURL(blob);
//     const a = document.createElement('a');
//     a.href = url;
//     a.download = 'resume.md';
//     a.click();
//     URL.revokeObjectURL(url);
// }

async function downloadPDF() {
    const element = document.getElementById('resume');
    html2pdf().from(element).set({
        margin: 10,
        filename: 'resume.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'pt', format: 'a4', orientation: 'portrait' }
    }).save();
}