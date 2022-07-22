import { useState } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from '@mui/material/Grid';

import { useDispatch } from "react-redux";
import { addTodo } from "../redux/features/todo.feature";

const AddTodo = () => {

    const [todoDescription, setTodoDescription] = useState("");
    const [emptyError, setEmptyError] = useState(false);
    const [helperText, setHelperText] = useState("");
    const dispatch = useDispatch();

    const addTodofn = () => {
        if (todoDescription.length >= 3) {
            setEmptyError(false)
            setHelperText("")
            dispatch(addTodo(todoDescription));
            setTodoDescription("");
        } else {
            setEmptyError(true)
            setHelperText("Please insert values of at least length 3")
        }
    }

    return (
        <>
            <Typography style={{ textAlign: "center" }} variant="h3">
                Redux Todo App
            </Typography>
            <Grid container spacing={2} alignItems="center">
                <Grid item xs={8}>
                    <TextField
                        variant="outlined"
                        label="To Do Item"
                        fullWidth
                        onChange={(e) => setTodoDescription(e.target.value)}
                        value={todoDescription}
                        error={emptyError}
                        helperText={helperText}
                    />
                </Grid>
                <Grid item xs={4}>
                    <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                        onClick={addTodofn}
                    >
                        Add Item
                    </Button>
                </Grid>
            </Grid>
        </>
    )
}

export default AddTodo