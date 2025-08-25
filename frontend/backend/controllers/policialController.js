const Policial = require('../models/Policial');
const { cpf: cpfValidator } = require('cpf-cnpj-validator');


exports.criar = async (req, res) => {
    try {
        const { rg_civil, rg_militar, cpf, data_nascimento, matricula } = req.body;

        // Validação de campos obrigatórios
        if (!rg_civil || !rg_militar || !cpf || !data_nascimento || !matricula) {
            return res.status(400).json({ erro: 'Todos os campos são obrigatórios.' });
        }

        // Validação de CPF
        if (!cpfValidator.isValid(cpf)) {
            return res.status(400).json({ erro: 'CPF inválido.' });
        }

        // Salva matrícula em texto puro
        Policial.criar({ rg_civil, rg_militar, cpf, data_nascimento, matricula }, (err, result) => {
            if (err) return res.status(500).json({ erro: 'Erro ao cadastrar policial.' });
            res.status(201).json({ id: result.insertId });
        });
    } catch (err) {
        res.status(500).json({ erro: 'Erro inesperado ao cadastrar policial.' });
    }
};


exports.listar = async (req, res) => {
    try {
        const { cpf, rg } = req.query;
        Policial.listar({ cpf, rg }, (err, resultados) => {
            if (err) {
                return res.status(500).json({ erro: 'Erro ao buscar policiais. Tente novamente mais tarde.' });
            }
            // Retorna matrícula em texto puro
            res.json(resultados);
        });
    } catch (err) {
        res.status(500).json({ erro: 'Erro inesperado ao listar policiais.' });
    }
};
