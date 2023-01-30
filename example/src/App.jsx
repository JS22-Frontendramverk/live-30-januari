import './App.css'

import TodoItem from './components/TodoItem/TodoItem';
import AddTodo from './components/AddTodo/AddTodo';

function App() {
  const todos = [
    { id: 0, task: "Köp kaffe", done: true },
    { id: 1, task: "Köp kaka", done: false },
    { id: 2, task: "Brygg kaffe", done: false },
    { id: 3, task: "Drick kaffe", done: false },
  ];

  function newTodo(todo) {
    const newTodo = {
      id: todos.length,
      task: todo,
      done: false
    }
    todos.push(newTodo);
    console.log(todos);
  }

  const todosComponents = todos.map((todo) => {
    return <TodoItem task={ todo.task } done={ todo.done } key={ todo.id } />
  });

  console.log(todosComponents);

  return (
    <div className="App">
      <ul className='todos'>
        {/* <TodoItem task="Köp kaffe" done={ true } />
        <TodoItem task="Köp kaka"  done={ false } />
        <TodoItem task="Brygg kaffe" done={ false } />
        <TodoItem task="Drick kaffe" done={ false } /> */}

        { todosComponents.length > 0 ? todosComponents : <h2>Inga todos</h2> }

        {/* { todosComponents.length > 0 && todos.map((todo) => {
          return <TodoItem task={ todo.task } done={ todo.done } />
        })} */}
      </ul>
      <AddTodo newTodo={ newTodo } />
    </div>
  )
}

export default App
