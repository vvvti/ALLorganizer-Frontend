import React from 'react';
import {ColDef, DataGrid} from '@material-ui/data-grid';
import {StyledButton, StyledContainer} from './CrpList.styled';

export const CrpList: React.FC = () => {

    const columns: ColDef[] = [
        {field: 'date', headerName: 'Data', width: 120},
        {field: 'crp', headerName: 'Białko C-reaktywne', type: 'number', width: 270},
        {field: 'notes', headerName: 'Uwagi', type: 'string', width: 400},
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
        { id: 1, date: '07-01-2021', crp: 10, notes: 'uwagi' },
        { id: 2, date: '13-02-2021', crp: 0, notes: 'uwagi' },
        { id: 3, date: '10-03-2021', crp: 178, notes: 'uwagi' },
        { id: 4, date: '28-04-2021', crp: 63, notes: 'uwagi' },
        { id: 5, date: '12-05-2021', crp: 35, notes: 'uwagi' },
        { id: 6, date: '07-06-2021', crp: 20, notes: 'uwagi' },
        { id: 7, date: '19-07-2021', crp: 283, notes: 'uwagi' },
      ];

    return (
        <StyledContainer>
            <DataGrid rows={rows} columns={columns} pageSize={9} />
        </StyledContainer>
    );
};