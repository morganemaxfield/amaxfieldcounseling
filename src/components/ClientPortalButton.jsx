import React from 'react';
import Button from '@mui/material/Button';
const ClientPortalButton = (displayText, sx = null) => {
  return (
    <Button
    sx={{
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        color: 'white',
        textDecoration: "none",
        '&:hover': {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        },
        ...(sx)
    }}>

        <a 
        href="https://amaleamaxfield.clientsecure.me" 
        className="spwidget-button" 
        data-spwidget-scope-id="f9956af3-2877-4f52-831f-82596eb10981" 
        data-spwidget-scope-uri="amaleamaxfield" 
        data-spwidget-application-id="7c72cb9f9a9b913654bb89d6c7b4e71a77911b30192051da35384b4d0c6d505b" 
        data-spwidget-scope-global 
        data-spwidget-autobind
        style={{
            textDecoration: "none",
            color: "inherit"
        }}
        >
        Client Portal
        </a>
    </Button>
  );
};

export default ClientPortalButton;