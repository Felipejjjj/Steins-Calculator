import Database from '../database/database.js';

async function create(usuario) {
    const db = await Database.connect();

    const { ip } = usuario;

    const sql = `
    INSERT INTO
      usuario (ip)
    VALUES
      (?)
  `;

    const { lastID } = await db.run(sql, [ip]);

    return read(lastID);
}

async function readAll() {
    const db = await Database.connect();

    const sql = `
    SELECT
      *
    FROM
      usuario
  `;

    const usuario = await db.all(sql);

    return usuario;
}

async function read(id) {
    const db = await Database.connect();

    const sql = `
    SELECT
      *
    FROM
      usuario
    WHERE
      ip = ?
  `;

    const usuario = await db.get(sql, [id]);

    return usuario;
}

export default { create, readAll, read };
