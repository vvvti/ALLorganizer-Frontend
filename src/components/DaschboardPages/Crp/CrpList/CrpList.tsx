import React from 'react';
import {ColDef, DataGrid} from '@material-ui/data-grid';
import {StyledButton, StyledContainer} from './CrpList.styled';

export const CrpList: React.FC = () => {


    // const rowsData = CbcList.map((obj: any) => ({
    //     ...obj,
    //     finalValue: obj.calculation.finalValue.toFixed(2),
    //     periodValue: obj.calculation.periodValue,
    //     idValue: obj.id.substring(0, 8),
    // }));

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
        { id: 1, date: '01.01.2021', crp: 90, notes: 'uwagi' },
        { id: 2, date: '01.01.2021', crp: 1900, notes: 'uwagi' },
        { id: 3, date: '01.01.2021', crp: 500, notes: 'uwagi' },
        { id: 4, date: '01.01.2021', crp: 100, notes: 'uwagi' },
        { id: 5, date: '01.01.2021', crp: 3000, notes: 'uwagi' },
        { id: 6, date: '01.01.2021', crp: 20000, notes: 'uwagi' },
        { id: 7, date: '01.01.2021', crp: 3000, notes: 'uwagi' },
        { id: 8, date: '01.01.2021', crp: 100, notes: 'uwagi' },
        { id: 9, date: '01.01.2021', crp: 1023, notes: 'uwagi' },
      ];

    return (
        <StyledContainer>
            <DataGrid rows={rows} columns={columns} pageSize={9} />
        </StyledContainer>
    );
};