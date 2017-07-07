const initialState = {
  tree: {
    treeName: null,
    old: 1,
    fruit: 10,
    life: 17,
  },
  userName: 'Iam',
}

export default (state = initialState, action) => {
  if(action.type === 'CHANGE_NAME') {
    return {...state, tree: {...state.tree, treeName: action.payload}}
  }
  if(action.type === 'ADD_OLD') {
    return {...state, tree: {...state.tree, old: action.payload}}
  }
  return state
}
