const initialState = {
  tree: {
    treeName: null,
    old: 1,
    fruit: 10,
  },
  userName: 'Iam',
}

export default (state = initialState, action) => {
  if(action.type === 'CHANGE_NAME') {
    return {...state, tree: {...state.tree, treeName: action.payload}}
  }
  return state
}
