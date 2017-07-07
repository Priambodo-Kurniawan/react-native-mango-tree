const fruit = Math.floor(Math.random() * 6) + 1

const initialState = {
  tree: {
    treeName: null,
    old: 1,
    fruit: fruit,
    life: 17,
    basket: 0,
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
    return {...state, tree: {...state.tree, basket: action.payload, fruit: 0}}
  }
  return state
}
