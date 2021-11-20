const functions = require('firebase-functions');
const util = require('../../../lib/util');
const statusCode = require('../../../constants/statusCode');
const responseMessage = require('../../../constants/responseMessage');
const db = require('../../../db/db');
const { userDB } = require('../../../db');

module.exports = async (req, res) => {
  const { id, nickname } = req.body;

  if (!id || !nickname) return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE));
  if (nickname.length < 1 || nickname.length > 6) return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, responseMessage.LENGTH_LIMIT_FAIL));

  let client;

  try {
    client = await db.connect(req);

    const createdUser = await userDB.createUser(client, id, nickname);
    const teamId = createdUser.teamId;

    let teamColor = '';
    if (teamId == 1) {
      teamColor = 'pink';
    } else if (teamId == 2) {
      teamColor = 'blue';
    } else if (teamId == 3) {
      teamColor = 'yellow';
    }

    // 성공적으로 users를 가져왔다면, response를 보내줍니다.
    res.status(statusCode.OK).send(util.success(statusCode.OK, responseMessage.CREATED_USER, { teamColor }));

    // try문 안에서 에러가 발생했을 시 catch문으로 error객체가 넘어옵니다.
    // 이 error 객체를 콘솔에 찍어서 어디에 문제가 있는지 알아냅니다.
    // 이 때 단순히 console.log만 해주는 것이 아니라, Firebase 콘솔에서도 에러를 모아볼 수 있게 functions.logger.error도 함께 찍어줍니다.
  } catch (error) {
    functions.logger.error(`[ERROR] [${req.method.toUpperCase()}] ${req.originalUrl}`, `[CONTENT] ${error}`);
    console.log(error);

    // 그리고 역시 response 객체를 보내줍니다.
    res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, responseMessage.INTERNAL_SERVER_ERROR));

    // finally문은 try문이 끝나든 catch문이 끝나든 반드시 실행되는 블록입니다.
    // 여기서는 db.connect(req)를 통해 빌려온 connection을 connection pool에 되돌려줍니다.
    // connection을 되돌려주는 작업은 반드시 이루어져야 합니다.
    // 그렇지 않으면 요청의 양이 일정 수준을 넘어갈 경우 쌓이기만 하고 해결되지 않는 문제가 발생합니다.
  } finally {
    client.release();
  }
};
