const _ = require('lodash');
const convertSnakeToCamel = require('../lib/convertSnakeToCamel');

const getMission = async (client, id) => {
  const { rows } = await client.query(
    `
    SELECT m.content
    FROM "user" u JOIN team t
        on u.team_id = t.id
     JOIN mission m
        on t.mission_id = m.id
    WHERE u.id = $1
        `,
    [id],
  );
  return convertSnakeToCamel.keysToCamel(rows[0]);
};

module.exports = { getMission };
