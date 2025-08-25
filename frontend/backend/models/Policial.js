const db = require('../config/db');

const Policial = {
    criar: (dados, callback) => {
        const sql = 'INSERT INTO policiais SET ?';
        db.query(sql, dados, callback);
    },

    listar: (filtros, callback) => {
        let sql = 'SELECT * FROM policiais';
        const params = [];
        if (filtros) {
            const condicoes = [];
            if (filtros.cpf) {
                condicoes.push('cpf = ?');
                params.push(filtros.cpf);
            }
            if (filtros.rg) {
                condicoes.push('(rg_civil = ? OR rg_militar = ?)');
                params.push(filtros.rg, filtros.rg);
            }
            if (condicoes.length > 0) {
                sql += ' WHERE ' + condicoes.join(' AND ');
            }
        }
        db.query(sql, params, callback);
    }
};

module.exports = Policial;
