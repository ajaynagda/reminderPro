import { bake_cookie, read_cookie, delete_cookie } from 'sfcookies';

const reminder = (action) => {
  console.log(action.payload);
  return {
   id: Math.random(),
   text:action.payload
 }
}

const removeById = (state=[],id) => {
  console.log('ajay22',state);
  const reminders = state.filter(reminder => reminder.id !== id);
  console.log('ajay',reminders);
  return reminders
}
const reminders = (state=[],action) => {
  let reminders = null;

  state = read_cookie('reminders');
  switch (action.type) {
    case 'ADD_REMINDER':
      reminders =  [...state,reminder(action)];

      bake_cookie('reminders', reminders);
      return reminders;
      break;
      case 'DELETE_REMINDER':
        reminders =  removeById(state,action.payload);
        bake_cookie('reminders', reminders);
        return reminders;
      case 'CLEAR_REMINDER':
          reminders = [];
          bake_cookie('reminders', reminders);
          return reminders;
    default:
      return state;
  }
}

export default reminders;
