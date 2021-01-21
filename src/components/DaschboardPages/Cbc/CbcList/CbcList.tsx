import React from 'react';
import {ColDef, DataGrid} from '@material-ui/data-grid';
import {StyledButton, StyledContainer} from './CbcList.styled';

export const CbcList: React.FC = () => {


    // const rowsData = CbcList.map((obj: any) => ({
    //     ...obj,
    //     finalValue: obj.calculation.finalValue.toFixed(2),
    //     periodValue: obj.calculation.periodValue,
    //     idValue: obj.id.substring(0, 8),
    // }));

    const columns: ColDef[] = [
        {field: 'date', headerName: 'Data', width: 120},
        {field: 'leucocytes', headerName: 'Leukocyty', type: 'number', width: 160},
        {field: 'bloodCels', headerName: 'Płytki krwi', type: 'number', width: 150},
        {field: 'hemoglobin', headerName: 'Hemoglobina', type: 'number', width: 180},
        {field: 'hematocrit', headerName: 'Hematocryt', type: 'number', width: 170},
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
        { id: 1, date: '01.01.2021', leucocytes: 2000, bloodCels: 35 },
        { id: 2, date: '01.01.2021', leucocytes: 1900, bloodCels: 42 },
        { id: 3, date: '01.01.2021', leucocytes: 500, bloodCels: 45 },
        { id: 4, date: '01.01.2021', leucocytes: 100, bloodCels: 16 },
        { id: 5, date: '01.01.2021', leucocytes: 3000, bloodCels: 100000 },
        { id: 6, date: '01.01.2021', leucocytes: 20000, bloodCels: 150 },
        { id: 7, date: '01.01.2021', leucocytes: 3000, bloodCels: 44 },
        { id: 8, date: '01.01.2021', leucocytes: 100, bloodCels: 36 },
        { id: 9, date: '01.01.2021', leucocytes: 1023, bloodCels: 65 },
      ];

    return (
        <StyledContainer>
            <DataGrid rows={rows} columns={columns} pageSize={9} />
        </StyledContainer>
    );
};
