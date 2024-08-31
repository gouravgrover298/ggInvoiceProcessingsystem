import {useState} from 'react';
import { Box, Typography, TextField, Button, styled } from "@mui/material";
import {saveInvoice} from '../Services/api';

const Component = styled(Box)({
    marginTop:20,
    '& > p': {
        fontSize: 26,
        marginBottom: 10
    },
    '& > div > div':{
        marginRight: 100,
        minWidth: 200
    }
})

const defaultObj = {
    vendor: '',
    product: '',
    amount: 0,
    date: '',
    action: 'pending',
};

const AddInvoice = ({setAddInvoice}) => {
    const [invoice, setInvoice] = useState(defaultObj)
const onValueChange =(e) => {
    setInvoice({ ...invoice, [e.target.name]: e.target.value });

}
const addNewInvoice = async () => {
    await saveInvoice({...invoice, amount:Number(invoice['amount'])});

    setAddInvoice(false);
    

}

    return(
        <Component>
        <Box>
            <Typography>Add Invoice</Typography>
            <Box sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        gap: 2, // Adjust the space between fields
                    }} >
                <TextField
                variant="filled" 
                placeholder="Enter your Name"
                onChange={(e) => onValueChange(e)}
                name = "vendor"
                autoComplete='off'
                margin="normal"
                />
                <TextField
                variant="filled" 
                placeholder="Enter Product Name"
                onChange={(e) => onValueChange(e)}
                name = "product"
                autoComplete='off'
                margin="normal"
                value={invoice.product}
                />
                <TextField 
                variant="filled" 
                placeholder="Enter amount"
                type ="number"
                onChange={(e) => onValueChange(e)}
                name = "amount"
                autoComplete='off'
                margin="normal"
                />
                <TextField 
                variant="filled" 
                placeholder="Enter Date"
                type ="date"
                onChange={(e) => onValueChange(e)}
                name = "date"
                autoComplete='off'
                value={invoice.date}
                margin="normal"
                />
                <Button 
                variant="contained"
                 
                onClick= {()=> addNewInvoice()}
                >
                    Add Invoice
                </Button>
            </Box>
        </Box>
        </Component>
    )
}

export default AddInvoice;