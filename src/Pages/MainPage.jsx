import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import TodoData from '../Components/TodoData'
import CompletedTask from '../Components/CompletedTask'
import { Button, Container, TextField } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux'
import { addTodo, clearAll } from '../Redux/action'

const useStyles = makeStyles((theme) => ({
    button: {
        display: 'flex',
        justifyContent: 'flex-end',
        margin: '20px'
    },
}));

export default function MainPage() {
    const classes = useStyles()
    const [task, setTask] = useState("")
    const dispatch = useDispatch()

    const handleChange = (e) => {
        setTask(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (task !== "") {
            dispatch(addTodo(task))
        }
        setTask("")
    }

    const handleClear = () => {
        dispatch(clearAll())
    }
    return (
        <>
            <Navbar />
            <Container>
                <div className={classes.button}>
                    <Button variant="contained" color="primary" onClick={handleClear}>
                        Clear All
            </Button>
                </div>
                <form onSubmit={(e) => handleSubmit(e)} noValidate autoComplete="off" style={{ textAlign: 'center' }}>
                    <TextField id="standard-basic" label="Add Todo" value={task} onChange={(e) => handleChange(e)} />
                </form>
                <div>
                    <div style={{ float: 'left' }}><TodoData /></div>
                    <div style={{ float: 'right' }}><CompletedTask /></div>
                </div>
            </Container>
        </>
    )
}