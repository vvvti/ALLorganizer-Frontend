import React from 'react';
import {ColDef, DataGrid} from '@material-ui/data-grid';
import {StyledButton, StyledContainer} from './BiochemistryList.styled';

export const BiochemistryList: React.FC = () => {


    // const rowsData = CbcList.map((obj: any) => ({
    //     ...obj,
    //     finalValue: obj.calculation.finalValue.toFixed(2),
    //     periodValue: obj.calculation.periodValue,
    //     idValue: obj.id.substring(0, 8),
    // }));

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
        { id: 1, date: '01.01.2021', alt: 90, ast: 200 },
        { id: 2, date: '01.01.2021', alt: 1900, ast: 200 },
        { id: 3, date: '01.01.2021', alt: 500, ast: 200 },
        { id: 4, date: '01.01.2021', alt: 100, ast: 200 },
        { id: 5, date: '01.01.2021', alt: 3000, ast: 200 },
        { id: 6, date: '01.01.2021', alt: 20000, ast: 200 },
        { id: 7, date: '01.01.2021', alt: 3000, ast: 200 },
        { id: 8, date: '01.01.2021', alt: 100, ast: 200 },
        { id: 9, date: '01.01.2021', alt: 1023, ast: 200 },
      ];

    return (
        <StyledContainer>
            <DataGrid rows={rows} columns={columns} pageSize={9} />
        </StyledContainer>
    );
};