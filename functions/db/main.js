const _ = require('lodash');
const convertSnakeToCamel = require('../lib/convertSnakeToCamel');

const getMainUser = async (client, id) => {
  const { rows } = await client.query(
    `
        SELECT u.nickname, t.color,m.content
        FROM "user" u JOIN team t
            on u.team_id = t.team_id
         JOIN mission m
            on t.mission_id = m.mission_id
        WHERE u.id = $1;
        `,
    [id],
  );
  return convertSnakeToCamel.keysToCamel(rows[0]);
};

module.exports = { getMainUser };
