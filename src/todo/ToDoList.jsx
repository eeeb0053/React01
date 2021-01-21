import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toggleTodoAction, deleteTodoAction } from './store/schedule.reducer'

export default function ToDoList(){
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()
    const toggleTodo = id => dispatch(toggleTodoAction(id))
    const deleteTodo = id => dispatch(deleteTodoAction(id))

    return (<>
        <h1>스케줄 목록</h1>
        <div>
            { todos && todos.length === 0 && (<p className='alert alert-info'>등록된 스케줄이 없습니다.</p>)}
            { todos && (<div className='alert alert-info'>등록된 스케줄이 있습니다.</div>)}
        </div>
    </>)
}
