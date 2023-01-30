import './AddTodo.css';

function AddTodo(props) {
    const { newTodo } = props;
    let todo = '';

    return (
        <section className='add-todo'>
            <input type="text" placeholder="Ange todo"
            className='add-todo__input'
            onChange={ (event) => { todo = event.target.value; console.log(todo) }} />
            <button className='add-todo__button'
            onClick={ () => { newTodo(todo) }}>Lägg till</button>
        </section>
    )
}

export default AddTodo;