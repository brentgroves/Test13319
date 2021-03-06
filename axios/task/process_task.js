const GetUserAccessToken = require("./get_user_access_token");
const CreateEngTask = require("./create_eng_task");
const GetEngTaskDetails = require("./get_eng_task_details");
const UpdateEngTaskDetails = require("./update_eng_task_details");

module.exports = async function () {
  try {
  console.log(`in ProcessToken`);
  let cnc = '103';
  let userAccessToken = await GetUserAccessToken();
  console.log(`userAccessToken=${userAccessToken}`);
  let taskId = await CreateEngTask({
    userAccessToken,
    cnc
  });
  console.log(`taskId=${taskId}`);

  const {taskDetailsId, etag} = await GetEngTaskDetails({
    userAccessToken,
    taskId
  });
  console.log(`taskDetailsId=${taskDetailsId},etag=${etag}`);

//   common.log(`taskDetailId:${id},etag:${etag}`);

  await UpdateEngTaskDetails({
    userAccessToken,
    taskId,
    etag
  });
  console.log(`Updated taskDetailsId:${taskDetailsId}`);

} catch (e) {
  console.error(e.name + ": " + e.message);
}

};