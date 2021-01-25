import React from 'react';
import {StyledSwapContainer, ChartContainer} from './CrpSwap.styled';
import {CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis} from 'recharts';

export const CrpSwap: React.FC = () => {
    // const data = results.chartData;
    return (
        <StyledSwapContainer>
            <h4>Białko C-reaktywne (CRP) - wykres ostatnich wyników</h4>
            <ChartContainer>
            <LineChart
                width={600}
                height={300}
                // data={data}
                margin={{
                    top: 0,
                    right: 50,
                    left: 0,
                    bottom: 0,
                }}
            >
                <CartesianGrid strokeDasharray="4 4" />
                <XAxis dataKey="key" />
                <YAxis />
                <Legend />
                {/* <Tooltip formatter={label => currencyFormat(label, currencyValue)} /> */}
                <Line type="monotone" dataKey="Leukocyty" stroke="#00e0b4" activeDot={{r: 8}} />
                <Line type="monotone" dataKey="Płytki krwi" stroke="#071e4a" />
                <Line type="monotone" dataKey="Hemoglobina" stroke="#ff0000" />
                <Line type="monotone" dataKey="Hematokryt" stroke="#071e4a" />
            </LineChart>
        </ChartContainer>
        <h4>Białko C-reaktywne (CRP) - wynik ostatniego badania</h4>
        </StyledSwapContainer>
    )
}
