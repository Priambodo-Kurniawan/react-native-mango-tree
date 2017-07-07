const initialState = {
  tree: {
    treeName: null,
    old: 1,
    fruit: 0,
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
  if(action.type === 'HARVEST') {
    return {...state, tree: {...state.tree, fruit: action.payload}}
  }
  return state
}
