import React from 'react';
import {ColDef, DataGrid} from '@material-ui/data-grid';
import {StyledButton, StyledContainer} from './CbcList.styled';

export const CbcList: React.FC = () => {
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
        { id: 1, date: '10-01-2020', leucocytes: 5.0, bloodCels: 50, hemoglobin: 8.0, hematocrit: 40.1, },
        { id: 2, date: '10-02-2020', leucocytes: 1.2, bloodCels: 100, hemoglobin: 8.5, hematocrit: 37.5, },
        { id: 3, date: '15-03-2020', leucocytes: 2.5, bloodCels: 25, hemoglobin: 9.0, hematocrit: 32.1, },
        { id: 4, date: '13-04-2020', leucocytes: 5.0, bloodCels: 200, hemoglobin: 9.3, hematocrit: 37.1, },
        { id: 5, date: '10-05-2020', leucocytes: 1.75, bloodCels: 240, hemoglobin: 9.8, hematocrit: 40.7, },
        { id: 6, date: '10-06-2020', leucocytes: 1.07, bloodCels: 180, hemoglobin: 10.5, hematocrit: 42.1, },
        { id: 7, date: '10-09-2020', leucocytes: 0.1, bloodCels: 120, hemoglobin: 9.0, hematocrit: 36.4, },
      ];

    return (
        <StyledContainer>
            <DataGrid rows={rows} columns={columns} pageSize={9} />
        </StyledContainer>
    );
};
