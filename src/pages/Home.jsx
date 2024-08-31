import React, { useState, useEffect } from "react";
import Header from '../components/Header';
import { Box, Typography, Button } from "@mui/material";
import AddInvoice from "../components/AddInvoice";
import Invoices from "../components/Invoices";
import { getAllInvoices, deleteInvoice } from "../Services/api";

const Home = () => {
  const [addInvoice, setAddInvoice] = useState(false);
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await getAllInvoices();
        if (response && response.data) {
          setInvoices(response.data);
        }
      } catch (error) {
        console.error("Failed to fetch invoices", error);
      }
    };
    getData();
  }, [addInvoice]);

  const removeInvoice = async (id) => {
    try {
      await deleteInvoice(id);
      const updatedInvoices = invoices.filter(invoice => invoice.id !== id);
      setInvoices(updatedInvoices);
    } catch (error) {
      console.error("Failed to delete invoice", error);
    }
  };

  const toggleInvoice = () => {
    setAddInvoice(!addInvoice);
  };

  return (
    <React.Fragment>
      <Header />
      <Box style={{ margin: 20 }}>
        <Typography variant="h3">Pending Invoices</Typography>
        {!addInvoice && (
          <Button
            variant="contained"
            style={{ marginTop: 15 }}
            onClick={toggleInvoice}
          >
            Add Invoice
          </Button>
        )}
        {addInvoice && <AddInvoice setAddInvoice={setAddInvoice} />}
        <Box>
          <Invoices
            removeInvoice={removeInvoice}
            invoices={invoices}
          />
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default Home;
