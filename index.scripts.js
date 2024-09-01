function downloadPDF() {
    const element = document.getElementById('resume');
    html2pdf().from(element).set({
        margin: 10,
        filename: 'resume.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'pt', format: 'a4', orientation: 'portrait' }
    }).save();
}