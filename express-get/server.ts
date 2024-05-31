import express from 'express';
import pg from 'pg';
import { ClientError, errorMiddleware } from './lib/index.js';

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/pagila',
  ssl: {
    rejectUnauthorized: false,
  },
});

const app = express();

app.get('/api/films', async (req, res, next) => {
  try {
    const sql = `
      select *
      from "films"
      order by "replacementCost" desc
      limit 2
    `;
    const result = await db.query(sql);
    const films = result.rows;
    res.json(films);
  } catch (err) {
    next(err);
  }
});

app.get('/api/films/:filmId', async (req, res, next) => {
  try {
    const filmId = req.params.filmId;
    if (filmId === undefined) {
      throw new ClientError(400, 'filmId is required');
    }

    const sql = `
      select *
      from "films"
      where "filmId" = $1
    `;

    const params = [filmId];
    const result = await db.query(sql, params);
    const films = result.rows[0];
    if (!films) {
      throw new ClientError(404, `film ${filmId} not found`);
    }
    res.json(films);
  } catch (err) {
    next(err);
  }
});

app.use(errorMiddleware);

app.listen(8080, () => {
  console.log('listening on port 8080');
});
