const fs = require('fs');
const HTMLtoDOCX = require('html-to-docx');

(async () => {
    try {
        const htmlString = fs.readFileSync('report.html', 'utf-8');
        const fileBuffer = await HTMLtoDOCX(htmlString, null, {
            table: { row: { cantSplit: true } },
            footer: true,
            pageNumber: true,
            margins: {
                top: 1440,
                right: 1440,
                bottom: 1440,
                left: 1440,
            }
        });
        fs.writeFileSync('../CareerConnect_Software_Project_Report_v2.docx', fileBuffer);
        console.log('Word document created successfully at Project root!');
    } catch (error) {
        console.error('Error generating document:', error);
    }
})();
