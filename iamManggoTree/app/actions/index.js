export const addOldAction = (old) => {
  return {
    type: 'ADD_OLD',
    payload: old,
  }
}

export const changeNameAction = (name) => {
  return {
    type: 'CHANGE_NAME'
  }
}
