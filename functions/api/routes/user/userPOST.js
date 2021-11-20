const functions = require('firebase-functions');
const util = require('../../../lib/util');
const statusCode = require('../../../constants/statusCode');
const responseMessage = require('../../../constants/responseMessage');
const db = require('../../../db/db');
const { userDB } = require('../../../db');

module.exports = async (req, res) => {
  const { id, nickname } = req.body;

  // id 혹은 nickname이 없을 때 400 return
  if (!id || !nickname) return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE));

  // nickname의 길이가 제한을 벗어날 때 400 return
  if (nickname.length < 1 || nickname.length > 6) return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, responseMessage.LENGTH_LIMIT_FAIL));

  let client;

  try {
    client = await db.connect(req);

    const lowestTeam = await userDB.getLowestTeam(client);

    let teamColor = '';
    if (lowestTeam == 1) {
      teamColor = 'pink';
    } else if (lowestTeam == 2) {
      teamColor = 'blue';
    } else if (lowestTeam == 3) {
      teamColor = 'yellow';
    }

    const createdUser = await userDB.createUser(client, id, nickname, lowestTeam);
    res.status(statusCode.OK).send(util.success(statusCode.OK, responseMessage.CREATED_USER, { teamColor }));
  } catch (error) {
    functions.logger.error(`[ERROR] [${req.method.toUpperCase()}] ${req.originalUrl}`, `[CONTENT] ${error}`);
    console.log(error);

    res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, responseMessage.INTERNAL_SERVER_ERROR));
  } finally {
    client.release();
  }
};
