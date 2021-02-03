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
        { id: 1, date: '10-01-2020', weight: 1.016, ph: 'uwagi', leucocytes: "1-3", bacteria: "nieliczne"},
        { id: 2, date: '10-02-2020', weight: 1.028, ph: 'uwagi', leucocytes: "1-5", bacteria: "nieliczne"},
        { id: 3, date: '15-03-2020', weight: 0.998, ph: 'uwagi', leucocytes: "1-7", bacteria: "nieliczne"},
        { id: 4, date: '13-04-2020', weight: 0.950, ph: 'uwagi', leucocytes: "1-3", bacteria: "nieliczne"},
        { id: 5, date: '10-05-2020', weight: 1.010, ph: 'uwagi', leucocytes: "0", bacteria: "nieliczne"},
        { id: 6, date: '10-06-2020', weight: 1.076, ph: 'uwagi', leucocytes: "1-3", bacteria: "nieliczne" },
        { id: 7, date: '10-09-2020', weight: 0.999, ph: 'uwagi', leucocytes: "0", bacteria: "nieliczne" },
        
      ];

    return (
        <StyledContainer>
            <DataGrid rows={rows} columns={columns} pageSize={9} />
        </StyledContainer>
    );
};
