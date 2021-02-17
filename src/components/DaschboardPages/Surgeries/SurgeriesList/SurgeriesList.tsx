import React from 'react';
import {ColDef, DataGrid} from '@material-ui/data-grid';
import {StyledButton, StyledContainer} from './SurgeriesList.styled';

export const SurgeriesList: React.FC = () => {
    const columns: ColDef[] = [
        {field: 'date', headerName: 'Data', width: 120},
        {field: 'type', headerName: 'Rodzaj', type: 'string', width: 250},
        {field: 'notes', headerName: 'Uwagi', type: 'string', width: 250},
        
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
        { id: 1, date: '10-01-2020', type: "test", notes: "test", },
        { id: 2, date: '10-02-2020', type: "test", notes: "test", },
        { id: 3, date: '15-03-2020', type: "test", notes: "test", },
        { id: 4, date: '13-04-2020', type: "test", notes: "test", },
        { id: 5, date: '10-05-2020', type: "test", notes: "test", },
        { id: 6, date: '10-06-2020', type: "test", notes: "test", },
        { id: 7, date: '10-09-2020', type: "test", notes: "test", },
      ];

    return (
        <StyledContainer>
            <DataGrid rows={rows} columns={columns} pageSize={9} />
        </StyledContainer>
    );
};
