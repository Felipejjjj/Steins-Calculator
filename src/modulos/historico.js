import Database from '../database/database.js';
import Types from './types.js';

async function setHistory(op) {
    const { type } = op;
    
    // a partir do type, chama a função certa pra guardar na respectiva tabela
    if (type === "calc") {
        return Types.setHistoryCalc(op);
    }

    if (type === "mdc") {
        return Types.setHistoryMdc(op);
    }

    if (type === "mmc") {
       return Types.setHistoryMmc(op);
    }

    if (type === "pa") {
        return Types.setHistoryPa(op);
    }

    if (type === "pg") {
        return Types.setHistoryPg(op);
    }
}


async function create(historico) {
    const db = await Database.connect();

    const { ip } = historico;

    const sql = `
    INSERT INTO
      historico (ip)
    VALUES
      (?)
  `;

    const { lastID } = await db.run(sql, [ip]);

    return read(lastID);
}

async function readAll() {
    const db = await Database.connect();

    // pega todos os dados de todas as tabelas de histórico
    const sqlCalc = `
    SELECT
      *
    FROM
      historico
  `;

    const historicoCalc = await db.all(sqlCalc);

    const sqlMdc = `
    SELECT
        *
    FROM
        historico_mdc
    `;

    const historicoMdc = await db.all(sqlMdc);

    const sqlMmc = `
    SELECT
        *
    FROM 
        historico_mmc
    `;
    
    const historicoMmc = await db.all(sqlMmc);

    const sqlPa = `
    SELECT
        *
    FROM
        historico_pa
    `;

    const historicoPa = await db.all(sqlPa);

    const sqlPg = `
    SELECT
        *
    FROM
        historico_pg
    `;

    const historicoPg = await db.all(sqlPg);

    // concatena todos os dados em um único array de obj
    const historico = historicoCalc.concat(historicoMdc, historicoPa, historicoPg);
    
    return historico;
}

async function read(id) {
    const db = await Database.connect();

    const sql = `
    SELECT
      *
    FROM
      historico
    WHERE
      ip = ?
  `;

    const historico = await db.get(sql, [id]);

    return historico;
}

export default { create, setHistory, readAll, read };