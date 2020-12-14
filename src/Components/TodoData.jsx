import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Checkbox } from '@material-ui/core'
import { addTodo, completedTask } from '../Redux/action'

export default function TodoData() {
    const { todo, hashSearch } = useSelector((state) => state)
    const dispatch = useDispatch()
    console.log(todo)

    const handleCheckbox = (e, id, title) => {
        if (e.target.checked === true) {
            dispatch(completedTask({ id, title }))
        }
    }

    return (
        <>
            <h1>Pendings</h1>
            {hashSearch ? hashSearch.map((item) => {
                return (
                    <div key={item.id} style={{ display: 'flex' }}>
                        <div> <Checkbox
                            color="primary" onChange={(e) => handleCheckbox(e, item.id, item.title)} /></div>
                        <div style={{ marginTop: '6px', fontSize: '25px', textShadow: '2px 2px 4px #000000' }}>{item.title}</div>
                    </div>
                )
            }) :

                todo && todo.map((item) => {
                    return (
                        <div key={item.id} style={{ display: 'flex' }}>
                            <div> <Checkbox
                                color="primary" onChange={(e) => handleCheckbox(e, item.id, item.title)} /></div>
                            <div style={{ marginTop: '6px', fontSize: '25px' }}>{item.title}</div>
                        </div>
                    )
                })
            }
        </>
    )
}