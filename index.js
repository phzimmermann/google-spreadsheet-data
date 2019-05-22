const GoogleSpreadsheet = require('google-spreadsheet');

const SpreadsheetData = class SpreadsheetData {
    constructor(creds, id) {
        this.creds = creds;
        this.doc = new GoogleSpreadsheet(id);
    }

    authenticate() {
        return new Promise((resolve, reject) => {
            doc.useServiceAccountAuth(this.creds, (err) => {
                if (err) {
                    reject(err);
                }
                resolve();
            });
        });
    }

    _getRows(worksheetId) {
        return new Promise((resolve, reject) => {
            this.doc.getRows(worksheetId, (err, rows) => {
                if (err) {
                    reject(err);
                }
                resolve(rows);
            });
        });
    }

    async getObject(worksheetId) {
        const rows = await getRows(worksheetId);
        return rows.reduce((curr, row) => ({...curr, [row.key.replace(':', '')]: row.value }), {});
    }

    async getArray(worksheetId, keys) {
        const rows = await getRows(worksheetId);
        return rows.map(row => keys.reduce((curr, key) => ({...curr, [key]: row[key]}), {}));
    }
};


module.exports = SpreadsheetData;
