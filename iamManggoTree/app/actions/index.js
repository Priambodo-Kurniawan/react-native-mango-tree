export const addOldAction = (old) => {
  return {
    type: 'ADD_OLD',
    payload: old,
  }
}

export const changeNameAction = (name) => {
  return {
    type: 'CHANGE_NAME',
    payload: name,
  }
}
export const harvestAction = (fruit) => {
  return {
    type: 'HARVEST',
    payload: fruit,
  }
}
