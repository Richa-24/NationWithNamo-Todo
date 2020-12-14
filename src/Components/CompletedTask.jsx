import React from 'react'
import { useSelector } from 'react-redux'

export default function CompletedTask() {
    const { completedTodo } = useSelector((state) => state)

    return (
        <>
            <h1>Completed Tasks</h1>
            {completedTodo && completedTodo.map((item) => {
                return (
                    <div key={item.id}>
                        <div style={{ margin: '10px', fontSize: '25px', textAlign: 'center' }}>{item.title}</div>
                    </div>
                )
            })}
        </>
    )
}