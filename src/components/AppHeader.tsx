import { 
    TextField, 
    Button 
} from "@mui/material";

const AppHeader = () =>  {
    return(
        <>
            <TextField variant="outlined"/>
            <Button variant="contained">Create New</Button>
        </>
    );
}

export default AppHeader;