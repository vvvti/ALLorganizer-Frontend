import React from 'react';
import {ColDef, DataGrid} from '@material-ui/data-grid';
import {StyledButton, StyledContainer} from './UrineList.styled';

export const UrineList: React.FC = () => {


    // const rowsData = CbcList.map((obj: any) => ({
    //     ...obj,
    //     finalValue: obj.calculation.finalValue.toFixed(2),
    //     periodValue: obj.calculation.periodValue,
    //     idValue: obj.id.substring(0, 8),
    // }));

    const columns: ColDef[] = [
        {field: 'date', headerName: 'Data', width: 120},
        {field: 'weight', headerName: 'Cięzar właściwy', type: 'number', width: 190},
        {field: 'ph', headerName: 'pH', type: 'number', width: 120},
        {field: 'leucocytes', headerName: 'Leukocyty', type: 'number', width: 180},
        {field: 'bacteria', headerName: 'Bakterie', type: 'string', width: 180},
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
        { id: 1, date: '01.01.2021', weight: 90, ph: 'uwagi', leucocytes: 200, bacteria: "nieliczne"},
        { id: 2, date: '01.01.2021', weight: 1900, ph: 'uwagi', leucocytes: 200, bacteria: "nieliczne"},
        { id: 3, date: '01.01.2021', weight: 500, ph: 'uwagi', leucocytes: 200, bacteria: "nieliczne"},
        { id: 4, date: '01.01.2021', weight: 100, ph: 'uwagi', leucocytes: 200, bacteria: "nieliczne"},
        { id: 5, date: '01.01.2021', weight: 3000, ph: 'uwagi', leucocytes: 200, bacteria: "nieliczne"},
        { id: 6, date: '01.01.2021', weight: 20000, ph: 'uwagi', leucocytes: 200, bacteria: "nieliczne" },
        { id: 7, date: '01.01.2021', weight: 3000, ph: 'uwagi', leucocytes: 200, bacteria: "nieliczne" },
        { id: 8, date: '01.01.2021', weight: 100, ph: 'uwagi', leucocytes: 200, bacteria: "nieliczne" },
        { id: 9, date: '01.01.2021', weight: 1023, ph: 'uwagi', leucocytes: 200, bacteria: "nieliczne" },
      ];

    return (
        <StyledContainer>
            <DataGrid rows={rows} columns={columns} pageSize={9} />
        </StyledContainer>
    );
};
