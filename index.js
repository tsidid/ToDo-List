function App(){
  const [todos, setTodos] = React.useState([
    {
      text: 'learn react',
      isCompleted: false,
    },
    {
      text: 'meet friend for lunch',
      isCompleted: false,
    },
    {
      text: 'build todo app',
      isCompleted: false,
    },   
    {
      text: 'play golf with the boys',
      isCompleted: false,
    },
    {
      text: 'visit the extended family',
      isCompleted: false,
    },
    {
      text: 'take paracetamol before bed',
      isCompleted: true
    }
    
   
  ])

  return (<> 
   {todos.map((todo, i) =>
    
   <div className="todo" key={i}>{todo.text}</div>)}
    </>);
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
