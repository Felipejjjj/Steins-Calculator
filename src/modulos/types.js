import Database from '../database/database.js';

async function setHistoryCalc(op) {
    const db = await Database.connect();

    const { conta, type, ip, resultado, data } = op;

    const sql = `
    INSERT INTO
        historico (ip, type, resultado, conta, data)
    VALUES  
        (?, ?, ?, ?, ?)
    `;

    const { lastID } = await db.run(sql, [ip, type, resultado, conta, data]);

    return read(lastID);
}

async function setHistoryMdc(op) {
    const db = await Database.connect();

    // console.log(op)
    const { ip, type, num1, num2, resultado, data } = op;

    const sql = `
    INSERT INTO
        historico_mdc (ip, type, num1, num2, resultado, data)
    VALUES  
        (?, ?, ?, ?, ?, ?)
    `;

    const { lastID } = await db.run(sql, [ip, type, num1, num2, resultado, data]);

    return read(lastID);
}

async function setHistoryMmc(op) {
    const db = await Database.connect();

    // console.log(op)
    const { ip, type, num1, num2, resultado, data } = op;

    const sql = `
    INSERT INTO
        historico_mmc (ip, type, num1, num2, resultado, data)
    VALUES  
        (?, ?, ?, ?, ?, ?)
    `;

    const { lastID } = await db.run(sql, [ip, type, num1, num2, resultado, data]);

    return read(lastID);
}

async function setHistoryPa(op) {
    const db = await Database.connect();

    // console.log(op)
    const { ip, type, firstTerm, commonRatio, termIndex, resultado, data } = op;

    const sql = `
    INSERT INTO
        historico_pa (ip, type, firstTerm, commonRatio, termIndex, resultado, data)
    VALUES  
        (?, ?, ?, ?, ?, ?, ?)
    `;

    const { lastID } = await db.run(sql, [ip, type, firstTerm, commonRatio, termIndex, resultado, data]);

    return read(lastID);
}

async function setHistoryPg(op) {
    const db = await Database.connect();

    // console.log(op)
    const { ip, type, firstTerm, commonRatio, termIndex, resultado, data } = op;

    const sql = `
    INSERT INTO
        historico_pg (ip, type, firstTerm, commonRatio, termIndex, resultado, data)
    VALUES  
        (?, ?, ?, ?, ?, ?, ?)
    `;

    const { lastID } = await db.run(sql, [ip, type, firstTerm, commonRatio, termIndex, resultado, data]);

    return read(lastID);
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

export default { setHistoryCalc, setHistoryMdc, setHistoryPa, setHistoryPg };