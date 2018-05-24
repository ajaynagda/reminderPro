export const addReminder = (text) => {
  return {
        type:'ADD_REMINDER', payload: text
  }
}

export const deleteReminder = (id) => {
  return {
        type:'DELETE_REMINDER', payload: id
  }
}

export const clearReminder = () => {
    return {
          type:'CLEAR_REMINDER'
    }
}
