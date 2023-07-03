import Database from './database.js';

async function up() {
    const db = await Database.connect();

    const usuarioSql = `
  CREATE TABLE usuario (
    ip VARCHAR(20) PRIMARY KEY NOT NULL
)
  `;

    await db.run(usuarioSql);

    const historicoSql = `
  CREATE TABLE historico (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    ip VARCHAR(20) NOT NULL,
    type VARCHAR(20) NOT NULL,
    resultado VARCHAR(100) NOT NULL,
    conta VARCHAR(100) NOT NULL,
    data TEXT NOT NULL
)
  `;

    await db.run(historicoSql);

    const historicoMdcSql = `
  CREATE TABLE historico_mdc (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    ip VARCHAR(20) NOT NULL,
    type VARCHAR(20) NOT NULL,
    num1 VARCHAR(100) NOT NULL,    
    num2 VARCHAR(100) NOT NULL,
    resultado VARCHAR(100) NOT NULL,
    data TEXT NOT NULL
)
  `;

  await db.run(historicoMdcSql);

  const historicoMmcSql = `
  CREATE TABLE historico_mmc (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    ip VARCHAR(20) NOT NULL,
    type VARCHAR(20) NOT NULL,
    num1 VARCHAR(100) NOT NULL,    
    num2 VARCHAR(100) NOT NULL,
    resultado VARCHAR(100) NOT NULL,
    data TEXT NOT NULL
)
  `;

  await db.run(historicoMmcSql);

  const historicoPaSql = `
  CREATE TABLE historico_pa (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    ip VARCHAR(20) NOT NULL,
    type VARCHAR(20) NOT NULL,
    firstTerm VARCHAR(100) NOT NULL,
    commonRatio VARCHAR(100) NOT NULL,
    termIndex VARCHAR(100) NOT NULL,
    resultado VARCHAR(100) NOT NULL,
    data TEXT NOT NULL
)
  `;

  await db.run(historicoPaSql);

  const historicoPgSql = `
  CREATE TABLE historico_pg (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    ip VARCHAR(20) NOT NULL,
    type VARCHAR(20) NOT NULL,
    firstTerm VARCHAR(100) NOT NULL,
    commonRatio VARCHAR(100) NOT NULL,
    termIndex VARCHAR(100) NOT NULL,
    resultado VARCHAR(100) NOT NULL,
    data TEXT NOT NULL
)
  `;

  await db.run(historicoPgSql);
}

export default { up };
