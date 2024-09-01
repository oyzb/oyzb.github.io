async function downloadPDF() {
    const { jsPDF } = window.jspdf;
    const pdf = new jsPDF();
    const resume = document.querySelector('.resume');
    const width = pdf.internal.pageSize.getWidth();
    const height = pdf.internal.pageSize.getHeight();

    const canvas = await html2canvas(resume, { scale: 2 });
    const imgData = canvas.toDataURL('image/png');
    pdf.addImage(imgData, 'PNG', 0, 0, width, height);
    pdf.save('resume.pdf');
}

function downloadMD() {
    const name = document.querySelector('.header h1').innerText;
    const email = document.querySelector('.contact-info p:nth-child(1)').innerText.replace('Email: ', '');
    const phone = document.querySelector('.contact-info p:nth-child(2)').innerText.replace('电话: ', '');
    const address = document.querySelector('.contact-info p:nth-child(3)').innerText.replace('地址: ', '');
    const education = document.querySelector('.section:nth-child(1) p').innerText;
    const experience = document.querySelector('.section:nth-child(2) p').innerText;
    const skills = document.querySelector('.section:nth-child(3) p').innerText;
    const projects = document.querySelector('.section:nth-child(4) p').innerText;

    const mdContent = `# ${name}

## 联系方式
- Email: ${email}
- 电话: ${phone}
- 地址: ${address}

## 教育背景
${education}

## 工作经历
${experience}

## 技能
${skills}

## 项目经验
${projects}
`;

    const blob = new Blob([mdContent], { type: 'text/markdown;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'resume.md';
    a.click();
    URL.revokeObjectURL(url);
}