const _ = require('lodash');
const convertSnakeToCamel = require('../lib/convertSnakeToCamel');

const getUserById = async (client, id) => {
  console.log(typeof id);
  const { rows } = await client.query(
    `
    SELECT * FROM "user"
    WHERE id = $1
    `,
    [id],
  );

  return rows.length === 1;
};

const createUser = async (client, id, nickname) => {
  const teamId = Math.floor(Math.random() * 3) + 1;
  const { rows } = await client.query(
    `
    INSERT INTO "user"
    (id, nickname, team_id)
    VALUES
    ($1, $2, $3)
    RETURNING *
    `,
    [id, nickname, teamId],
  );

  return convertSnakeToCamel.keysToCamel(rows[0]);
};

module.exports = { getUserById, createUser };
