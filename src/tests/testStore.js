import { createStore } from 'redux'
import todoApp from '../reducers/'
import { addTodo, toggleTodo, setVisibilityFilter } from '../actions'

let store = createStore(todoApp)

// Mostramos el estado inicial
console.log(store.getState())

// Cada vez que el estado cambie, lo mostramos
// Tenga en cuenta que subscribe() devuelve una función para anular el registro del listener
let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)

// Enviamos algunas acciones
store.dispatch(addTodo('Aprender sobre acciones'))
store.dispatch(addTodo('Aprender sobre reductores'))
store.dispatch(addTodo('Aprender sobre stores'))
store.dispatch(toggleTodo(0))
store.dispatch(toggleTodo(1))
store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED))

// Anulamos el monitoreo de las actualizaciones al estado
unsubscribe()