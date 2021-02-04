import React from 'react';
import {ColDef, DataGrid} from '@material-ui/data-grid';
import {StyledButton, StyledContainer} from './BiochemistryList.styled';

export const BiochemistryList: React.FC = () => {

    const columns: ColDef[] = [
        {field: 'date', headerName: 'Data', width: 120},
        {field: 'alt', headerName: 'ALT', type: 'number', width: 270},
        {field: 'ast', headerName: 'AST', type: 'number', width: 390},
        {
            field: '',
            headerName: 'Opcje',
            sortable: false,
            width: 150,
            disableClickEventBubbling: true,
            renderCell: () => {
                return (
                    <StyledButton type="submit" size="small" variant="contained" color="primary">
                        Edytuj
                    </StyledButton>
                );
            },
        },
    ];

    const rows = [
        { id: 1, date: '07-01-2021', alt: 600, ast: 678 },
        { id: 2, date: '13-02-2021', alt: 432, ast: 563 },
        { id: 3, date: '10-03-2021', alt: 178, ast: 150 },
        { id: 4, date: '28-04-2021', alt: 63, ast: 48 },
        { id: 5, date: '12-05-2021', alt: 35, ast: 32 },
        { id: 6, date: '07-06-2021', alt: 125, ast: 165 },
        { id: 7, date: '19-07-2021', alt: 283, ast: 204 },
      ];

    return (
        <StyledContainer>
            <DataGrid rows={rows} columns={columns} pageSize={9} />
        </StyledContainer>
    );
};