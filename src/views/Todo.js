const Todo = (props) => {
  const todos = props.todos;
  const handleDelete = props.handleDelete;

  const deleteArr = (id) => {
    handleDelete(id);
  };

  return (
    <div>
      {todos && todos.length > 0 && (
        <>
          {todos.map((val, index) => {
            return (
              <li key={val.id}>
                {val.id} - {val.name}
                <span onClick={() => deleteArr(val.id)}> x </span>
              </li>
            );
          })}
        </>
      )}
    </div>
  );
};

export default Todo;
