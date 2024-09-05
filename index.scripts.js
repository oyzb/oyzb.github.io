const resumeData = {
    en: {
        name: "Zibo Ouyang",
        contact: "Email: andyoyang@gmail.com | Address: Beijing China",
        education: {
            title: "Education",
            items: [
                "<strong>Tsinghua University</strong> - BioInformatics - Data Mining - Master - 2011.8~2014.7",
                "<strong>HUST (Huazhong University of Science and Technology)</strong> - EE - Bachelor - 2006.9~2010.8"
            ]
        },
        experience: {
            title: "Work Experience",
            items: [
                {
                    company: "<strong>ChinaAMC</strong> - Second largest asset management company in China",
                    position: "VP (IT/Data Dept.)",
                    period: "2020.1~now",
                    description: "Work on AI Marketing and Investments Projects"
                },
                {
                    company: "<strong>CITIC Bank</strong> - One of the largest commercial banks in China",
                    position: "Senior Manager (IT&Trading Dept.)",
                    period: "2014.8~2019.12",
                    description: "Work on IT projects and Algorithm Models in Finance Marketing"
                }
            ]
        },
        skills: {
            title: "IT Skills",
            items: ["Python/Java/Web", "Project Design & Implementation", "Teamwork"]
        },
        projects: {
            title: "Experience",
            items: [
                {
                    name: "<strong>Publications</strong>",
                    description: "HerbBioMap2.0: A Chinese Medicine Database Miner, Construction & Analysis (Paper of Master)",
                    details: "In this paper, based on traditional Chinese medicine and herbal data as well as medical representation data, a database-level construction and analysis of Chinese herbal prescriptions, syndrome representations, drug chemical components, and active ingredients have been conducted. A clustering model for active ingredients based on the minimum set cover algorithm has been developed, providing an algorithmic foundation for the substitution theory of effective components in traditional Chinese medicine."
                },
                {
                    name: "<strong>Featured Projects</strong>",
                    description: ""
                },
                {
                    name: "<i>• Financial Network Models</i>",
                    description: "Developed a capital network model leveraging transaction data for customer profiling and asset marketing, resulting in two consecutive innovation awards and a 50 billion increase in asset scale."
                },
                {
                    name: "<i>• Investment Profiling Bot</i>",
                    description: "Constructed an AI-driven investment research robot for customer and market analysis, optimizing asset allocation and product recommendations, leading to a 100,000+ increase in customer engagement."

                    
                },
                {
                    name: "<i>• LLM Based RAG System for Research Report</i>",
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
        name: "欧阳子博",
        contact: "邮箱: andyoyang@gmail.com | 地址: 中国北京",
        education: {
            title: "教育背景",
            items: [
                "<strong>清华大学</strong> - 生物信息学 - 数据挖掘 - 硕士 - 2011.8~2014.7",
                "<strong>华中科技大学</strong> - 电子工程 - 学士 - 2006.9~2010.8"
            ]
        },
        experience: {
            title: "工作经历",
            items: [
                {
                    company: "<strong>华夏基金</strong>",
                    position: "副总裁(IT/数据部门)",
                    period: "2020.1至今",
                    description: "负责AI营销和投资项目"
                },
                {
                    company: "<strong>中信银行</strong>",
                    position: "高级经理(IT与交易部门)",
                    period: "2014.8~2019.12",
                    description: "负责金融营销领域的IT项目和算法模型"
                }
            ]
        },
        skills: {
            title: "技能",
            items: ["Python/Java/Web", "项目设计与实施", "团队合作"]
        },
        projects: {
            title: "项目经验",
            items: [
                {
                    name: "<strong>发表论文</strong>",
                    description: "HerbBioMap2.0：中药数据库挖掘工具（硕士论文）"
                },
                {
                    name: "<strong>特色项目</strong>",
                },
                {
                    name: "• 金融网络模型",
                    description: "开发了一个资金网络模型，利用交易数据进行客户画像和资产营销，连续两年获得创新奖，资产规模增加500亿。"
                },
                {
                    name: "• 投资分析机器人",
                    description: "构建了一个AI驱动的投资研究机器人，用于客户和市场分析，优化资产配置和产品推荐，使客户参与度增加了10万+。"
                },
                {
                    name: "• 基于大语言模型的研报RAG系统",
                    description: "实施了一个基于大模型的研究告搜索系统，配合AI Agent，提升了本地数据智能，在公司内部实现了数据输出和投资分析的最高标准。"
                }
            ]
        },
        buttons: {
            pdf: "PDF",
            translate: "English Version"
        }
    }
};

let currentLang = 'en';

function renderResume(lang) {
    const data = resumeData[lang];
    let html = `
        <div class="header">
            <div>
                <h1 id="name">${data.name}</h1>
                <div class="contact-info">
                    <p id="contact">${data.contact}</p>
                </div>
            </div>
            <div class="photo">
                <img src="photo.jpg" alt="${data.name}'s photo">
            </div>
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
                <div class="experience-item">
                    <p><strong>${item.company}</strong></p>
                    <p>${item.position} - ${item.period}</p>
                    <p>${item.description}</p>
                </div>
            `).join('')}
        </div>
    `;

    // Skills section
    html += `
        <div class="section">
            <h2>${data.skills.title}</h2>
            <div class="skills-list">
                ${data.skills.items.map(item => `<p>${item}</p>`).join('')}
            </div>
        </div>
    `;

    // Projects section
    html += `
        <div class="section">
            <h2>${data.projects.title}</h2>
            ${data.projects.items.map(item => `
                <div class="project-item">
                    <p>${item.name}</p>
                    <p>${item.description}</p>
                    ${item.details ? `<p>${item.details}</p>` : ''}
                </div>
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
    const element = document.getElementById('resume');
    const opt = {
        margin: 0,
        filename: 'Zibo_Ouyang_Resume.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    // 使用 Promise 来确保 PDF 生成完成后再显示按钮
    html2pdf().set(opt).from(element).save();
}

// Initial render
renderResume(currentLang);