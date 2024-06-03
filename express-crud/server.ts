import express from 'express';
import pg from 'pg';
import { ClientError, errorMiddleware } from './lib/index.js';

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false,
  },
});

const app = express();

app.use(express.json());

app.get('/api/grades', async (req, res, next) => {
  try {
    const sql = `
      select * from "grades"
    `;
    const result = await db.query(sql);
    const grades = result.rows;
    res.status(200).json(grades);
  } catch (err) {
    next(err);
  }
});

app.get('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const { gradeId } = req.params;
    if (!Number.isInteger(+gradeId)) {
      throw new ClientError(400, `Non-integer gradeId: ${gradeId}`);
    }
    const sql = `
      select * from "grades"
      where "gradeId" = $1;
    `;
    const params = [gradeId];
    const result = await db.query(sql, params);
    const grade = result.rows[0];
    if (!grade) throw new ClientError(404, `grade ${gradeId} not found`);
    res.status(200).json(grade);
  } catch (err) {
    next(err);
  }
});

app.post('/api/grades', async (req, res, next) => {
  try {
    const { name, course, score } = req.body;

    if (!name) {
      throw new ClientError(400, 'name is required');
    }
    if (!course) {
      throw new ClientError(400, 'course is required');
    }
    if (!Number.isInteger(score)) {
      throw new ClientError(400, `score ${score} must be an integer`);
    }
    if (score < 0 || score > 100) {
      throw new ClientError(400, `score ${score} must be between 0 and 100`);
    }

    const sql = `
      insert into "grades" ("name", "course", "score")
      values ($1, $2, $3)
      returning *;
    `;
    const result = await db.query(sql, [name, course, score]);
    const grade = result.rows[0];
    res.status(201).json(grade);
  } catch (err) {
    next(err);
  }
});

app.put('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const { gradeId } = req.params;
    if (!Number.isInteger(+gradeId)) {
      throw new ClientError(400, `Non-integer gradeId: ${gradeId}`);
    }
    const { name, course, score } = req.body;

    if (!name) {
      throw new ClientError(400, 'name is required');
    }
    if (!course) {
      throw new ClientError(400, 'course is required');
    }
    if (!Number.isInteger(score)) {
      throw new ClientError(400, `score ${score} must be an integer`);
    }
    if (score < 0 || score > 100) {
      throw new ClientError(400, `score ${score} must be between 0 and 100`);
    }

    const sql = `
      update "grades"
      set "name" = $1,
      "course" = $2,
      "score" = $3
      where "gradeId" = $4
      returning *;
    `;

    const result = await db.query(sql, [name, course, score, gradeId]);
    const grade = result.rows[0];
    if (!grade) {
      throw new ClientError(404, `grade ${gradeId} not found`);
    }
    res.status(200).json(grade);
  } catch (err) {
    next(err);
  }
});

app.delete('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const { gradeId } = req.params;
    if (!Number.isInteger(+gradeId)) {
      throw new ClientError(400, `Non-integer gradeId: ${gradeId}`);
    }

    const sql = `
      delete from "grades"
      where "gradeId" = $1
      returning *;
    `;

    const result = await db.query(sql, [gradeId]);
    const grade = result.rows[0];
    if (!grade) {
      throw new ClientError(404, `grade ${gradeId} not found`);
    }
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
});

app.use(errorMiddleware);

app.listen(8080, () => {
  console.log('listening on port 8080');
});
