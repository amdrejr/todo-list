import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home'
import Todos from './pages/Todos';
import CreateTodo from './pages/CreateTodo';
import TodoProvider from './contexts/TodoProvider';
import EditTodo from './pages/EditTodo';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <TodoProvider>
          <Routes>
              <Route path="/" element={<Home />}/>
              <Route path='/todos' element={<Todos />}/>
              <Route path='/create-todo' element={<CreateTodo />}/>
              <Route path='/edit-todo/:id' element={<EditTodo />}/>
          </Routes>
        </TodoProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
