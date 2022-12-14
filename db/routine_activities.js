const client = require("./client");

async function addActivityToRoutine({
  routineId,
  activityId,
  count,
  duration,
}) {
  try{
    const addactivityroutine = await client.query(`
        INSERT INTO routineactivities("routineId", "activityId", count, duration)
        VALUES ($1,$2,$3,$4)
        RETURNING *;
    `, [routineId, activityId, count, duration])
      return addactivityroutine
    } catch(error) {
      console.log(error)
    }
}

async function getRoutineActivityById(id) {
        try{
          const {row : [getbyid]} = client.query(`
          SELECT * FROM routineactivities
          WHERE id = $1;
          `, [id])
          return getbyid
        }catch(error){
          console.log(error)
        }
}

async function getRoutineActivitiesByRoutine({ id }) {

}
async function updateRoutineActivity({ id, ...fields }) {

}

async function destroyRoutineActivity(id) {

}

async function canEditRoutineActivity(routineActivityId, userId) {

}

module.exports = {
  getRoutineActivityById,
  addActivityToRoutine,
  getRoutineActivitiesByRoutine,
  updateRoutineActivity,
  destroyRoutineActivity,
  canEditRoutineActivity,
};