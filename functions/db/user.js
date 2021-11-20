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

const createUser = async (client, id, nickname, lowestTeam) => {
  const { rows } = await client.query(
    `
    INSERT INTO "user"
    (id, nickname, team_id)
    VALUES
    ($1, $2, $3)
    RETURNING *
    `,
    [id, nickname, lowestTeam],
  );

  return convertSnakeToCamel.keysToCamel(rows[0]);
};

const getLowestTeam = async (client) => {
  const { rows } = await client.query(
    `
    SELECT team_id FROM "user"
    GROUP BY team_id
    ORDER BY count(*)
    `,
  );
  return convertSnakeToCamel.keysToCamel(rows[0]).teamId;
};

module.exports = { getUserById, createUser, getLowestTeam };
