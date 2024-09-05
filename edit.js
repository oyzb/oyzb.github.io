let resumeData = JSON.parse(localStorage.getItem('resumeData')) || {
    en: {
        // ... (copy the entire resumeData object from index.scripts.js)
    },
    zh: {
        // ... (copy the entire resumeData object from index.scripts.js)
    }
};

function renderEditForm() {
    const form = document.getElementById('edit-form');
    let html = '';

    for (const lang in resumeData) {
        html += `<h2>${lang.toUpperCase()}</h2>`;
        for (const section in resumeData[lang]) {
            if (typeof resumeData[lang][section] === 'object') {
                html += `<h3>${section}</h3>`;
                for (const subsection in resumeData[lang][section]) {
                    if (Array.isArray(resumeData[lang][section][subsection])) {
                        html += `<h4>${subsection}</h4>`;
                        resumeData[lang][section][subsection].forEach((item, index) => {
                            html += `<textarea id="${lang}-${section}-${subsection}-${index}">${item}</textarea>`;
                        });
                    } else {
                        html += `<h4>${subsection}</h4>`;
                        html += `<textarea id="${lang}-${section}-${subsection}">${resumeData[lang][section][subsection]}</textarea>`;
                    }
                }
            } else {
                html += `<h3>${section}</h3>`;
                html += `<textarea id="${lang}-${section}">${resumeData[lang][section]}</textarea>`;
            }
        }
    }

    form.innerHTML = html;
}

function saveChanges() {
    for (const lang in resumeData) {
        for (const section in resumeData[lang]) {
            if (typeof resumeData[lang][section] === 'object') {
                for (const subsection in resumeData[lang][section]) {
                    if (Array.isArray(resumeData[lang][section][subsection])) {
                        resumeData[lang][section][subsection] = resumeData[lang][section][subsection].map((_, index) => {
                            return document.getElementById(`${lang}-${section}-${subsection}-${index}`).value;
                        });
                    } else {
                        resumeData[lang][section][subsection] = document.getElementById(`${lang}-${section}-${subsection}`).value;
                    }
                }
            } else {
                resumeData[lang][section] = document.getElementById(`${lang}-${section}`).value;
            }
        }
    }

    localStorage.setItem('resumeData', JSON.stringify(resumeData));
    alert('Changes saved successfully!');
}

document.addEventListener('DOMContentLoaded', () => {
    renderEditForm();
    document.getElementById('save-btn').addEventListener('click', saveChanges);
});
