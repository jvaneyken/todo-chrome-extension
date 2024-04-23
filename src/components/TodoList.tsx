import { List, ListItem } from "@mui/material";

import TodoListItem from "./TodoListItem";

const TodoList = () =>  {
    return(
        <>
            <List>
                <ListItem>
                    <TodoListItem />
                </ListItem>
                <ListItem>
                    <TodoListItem />
                </ListItem>
                <ListItem>
                    <TodoListItem />
                </ListItem>
                <ListItem>
                    <TodoListItem />
                </ListItem>
                <ListItem>
                    <TodoListItem />
                </ListItem>
                <ListItem>
                    <TodoListItem />
                </ListItem>
            </List>
        </>
    );
}

export default TodoList;