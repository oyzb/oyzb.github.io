let resumeData = JSON.parse(localStorage.getItem('resumeData'));

if (!resumeData) {
    resumeData = {
        en: {
            name: "Zibo Ouyang",
            contact: "Email: andyoyang@gmail.com | Address: Beijing China",
            // ... (保持其余的英文数据不变)
        },
        zh: {
            name: "欧阳子博",
            contact: "邮箱: andyoyang@gmail.com | 地址: 中国北京",
            // ... (保持其余的中文数据不变)
        }
    };
}

let currentLang = 'en';

function renderResume(lang) {
    const data = resumeData[lang];
    let html = `
        <div class="header">
            <div>
                <h1 id="name">${data.name}</h1>
                <div class="buttons" id="control-buttons">
                    <button id="download-pdf-btn">${data.buttons.pdf}</button>
                    <button id="translate-btn">${data.buttons.translate}</button>
                    <button id="edit-btn">Edit</button>
                </div>
            </div>
            <div class="photo">
                <img src="photo.jpg" alt="${data.name}'s photo">
            </div>
        </div>
        <div class="contact-info">
            <p id="contact">${data.contact}</p>
        </div>
    `;

    // Education section
    html += `
        <div class="section">
            <h2>${data.education.title}</h2>
            ${data.education.items.map(item => `<p>${item}</p>`).join('')}
        </div>
    `;

    // Experience section
    html += `
        <div class="section">
            <h2>${data.experience.title}</h2>
            ${data.experience.items.map(item => `
                <p>${item.company} - ${item.position} - ${item.period}</p>
                <p>${item.description}</p>
            `).join('')}
        </div>
    `;

    // Skills section
    html += `
        <div class="section">
            <h2>${data.skills.title}</h2>
            <p>${data.skills.items.join(' | ')}</p>
        </div>
    `;

    // Projects section
    html += `
        <div class="section">
            <h2>${data.projects.title}</h2>
            ${data.projects.items.map(item => `
                <p>${item.name}</p>
                <p>${item.description}</p>
            `).join('')}
        </div>
    `;

    document.getElementById('resume').innerHTML = html;
    
    // Re-attach event listeners
    document.getElementById('translate-btn').addEventListener('click', toggleLanguage);
    document.getElementById('download-pdf-btn').addEventListener('click', downloadPDF);
    document.getElementById('edit-btn').addEventListener('click', () => {
        window.location.href = 'edit.html';
    });
}

function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'zh' : 'en';
    renderResume(currentLang);
}

function downloadPDF() {
    // 隐藏控制按钮
    const controlButtons = document.getElementById('control-buttons');
    controlButtons.style.display = 'none';

    const element = document.getElementById('resume');
    const opt = {
        margin:       10,
        filename:     'Zibo_Ouyang_Resume.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2 },
        jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    // 使用 Promise 来确保 PDF 生成完成后再显示按钮
    html2pdf().set(opt).from(element).save().then(() => {
        // PDF 生成完成后，显示控制按钮
        controlButtons.style.display = 'block';
    });
}

// Initial render
renderResume(currentLang);