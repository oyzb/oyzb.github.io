const resumeData = {
    en: {
        name: "Zibo Ouyang",
        contact: "Email: andyoyang@gmail.com | Address: Beijing China",
        education: {
            title: "Education",
            items: [
                "<strong>Tsinghua University</strong> - BioInformatics - Data Mining - Master - 2011.8~2014.7",
                "<strong>HUST</strong> - EE - Bachelor - 2006.9~2010.8"
            ]
        },
        experience: {
            title: "Work",
            items: [
                {
                    company: "<strong>China AMC</strong>",
                    position: "VP(IT/Data Dept.)",
                    period: "2020.1~now",
                    description: "Work on AI Marketing and Investments Projects"
                },
                {
                    company: "<strong>CITIC Bank</strong>",
                    position: "Senior Manager(IT&Trading Dept.)",
                    period: "2014.8~2019.12",
                    description: "Work on IT projects and Algorithm Models in Finance Marketing"
                }
            ]
        },
        skills: {
            title: "Skills",
            items: ["Python/Java/Web", "Project Design & Implementation", "Teamwork"]
        },
        projects: {
            title: "Experience",
            items: [
                {
                    name: "<strong>Publications</strong>",
                    description: "HerbBioMap2.0:a Chinese Medicine Database Miner (Paper of Master)"
                },
                {
                    name: "<strong>Main Projects</strong>",
                    description: "Financal Newtork Models\n\nDeveloped a capital network model leveraging transaction data for customer profiling and asset marketing, resulting in two consecutive innovation awards and a 50 billion increase in asset scale."

                },
                {
                    name: "Investment Profiling Bot",
                    description: "Constructed an AI-driven investment research robot for customer and market analysis, optimizing asset allocation and product recommendations, leading to a 100,000+ increase in customer engagement."

                    
                },
                {
                    name: "LLM Based RAG System for Research Report",
                    description: "Implemented a large model-based research report search system with AI Agent, enhancing local data intelligence and achieving state-of-the-art standards in data output and investment analysis in the company."
                    
                    
                }
            ]
        },
        buttons: {
            pdf: "PDF",
            translate: "中文版本"
        }
    },
    zh: {
        // Chinese version of the resume data
        // ... (similar structure as English, but with Chinese content)
    }
};

let currentLang = 'en';

function renderResume(lang) {
    const data = resumeData[lang];
    let html = `
        <div class="header">
            <h1 id="name">${data.name}</h1>
            <div class="buttons" id="control-buttons">
                <button id="download-pdf-btn">${data.buttons.pdf}</button>
                <button id="translate-btn">${data.buttons.translate}</button>
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