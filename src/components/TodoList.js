import { useState, useEffect } from "react";
import { useDispatch, useSelector} from "react-redux";
import Paper from '@mui/material/Paper';
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemSecondaryAction from "@mui/material/ListItemSecondaryAction";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { removeTodo, setTodoStatus, updateTodo, toggleEditable } from "../redux/features/todo.feature";
import todoListstyle from './TodoList.module.css';
import TextField from "@mui/material/TextField";


const TodoList  = () => {

    const todoList = useSelector(state => state["todoReducer"]);
    const { list } = todoList;
    const dispatch = useDispatch();


    const handleEditTodo = (id,description) => {
        dispatch(updateTodo({description, id }))
    }

    const removeTodofn = (id) => {
        dispatch(removeTodo(id));
    }

    const changeStatusfn = (todo) => {
        dispatch(
            setTodoStatus({ completed: !todo.completed, id: todo.id })
        );
    }

    const editableTodofn = todo => {
        dispatch(toggleEditable({ editable: !todo.editable, id: todo.id}))
    }

    return (
    <List>
            {list.map((todo,idx) => (
            <Paper key={idx} className={`${todoListstyle.paper}`} variant="elevation" elevation={4}>
            <ListItem key={todo.id}>
                <ListItemText
                style={{
                    textDecoration: todo.completed ? "line-through" : "none",
                }}
                >
                <TextField key={idx}
                    onChange={e=> handleEditTodo(todo.id, e.target.value)} 
                    value={todo.description}
                    variant="standard"
                    disabled={!todo.editable}
                    />
                </ListItemText>
                <ListItemSecondaryAction>
                <IconButton>
                    <EditIcon onClick={()=> editableTodofn(todo)}/>
                </IconButton>
                <IconButton
                    onClick={() => removeTodofn(todo.id)}
                >
                    <DeleteIcon />
                </IconButton>
                <Checkbox
                    edge="end"
                    value={todo.completed}
                    onChange={() =>changeStatusfn(todo)}
                />
                </ListItemSecondaryAction>
            </ListItem>
            </Paper>
            ))}
        </List>
    )
}

export default TodoList