document.getElementById('download-pdf-btn').addEventListener('click', downloadPDF);

function downloadPDF() {
    console.log('开始生成PDF');
    const element = document.getElementById('resume');
    html2pdf().from(element).set({
        margin: 10,
        filename: 'resume.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'pt', format: 'a4', orientation: 'portrait' }
    }).save().then(() => {
        console.log('PDF生成完成');
    }).catch((error) => {
        console.error('PDF生成失败', error);
    });
}