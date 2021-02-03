import React from 'react';
import {StyledSwapContainer, ChartContainer, StyledHeader, StyledLastAnalyses, StyledResult} from './CbcSwap.styled';
import {CartesianGrid, Legend, Line, LineChart, XAxis, YAxis} from 'recharts';


const data = [
    {
      name: '10-01-2020', Leukocyty: 5.0, "Płytki krwi": 50, Hemoglobina: 8.0, Hematokryt: 40.1,
    },
    {
      name: '10-02-2020', Leukocyty: 1.2, "Płytki krwi": 100, Hemoglobina: 8.5, Hematokryt: 37.5,
    },
    {
      name: '15-03-2020', Leukocyty: 2.5, "Płytki krwi": 25, Hemoglobina: 9.0, Hematokryt: 32.1,
    },
    {
      name: '13-04-2020', Leukocyty: 5.0, "Płytki krwi": 200, Hemoglobina: 9.3, Hematokryt: 37.1,
    },
    {
      name: '10-05-2020', Leukocyty: 1.75, "Płytki krwi": 240, Hemoglobina: 9.8, Hematokryt: 40.7,
    },
    {
      name: '10-06-2020', Leukocyty: 1.07, "Płytki krwi": 180, Hemoglobina: 10.5, Hematokryt: 42.1,
    },
    {
      name: '10-09-2020', Leukocyty: 0.1, "Płytki krwi": 120, Hemoglobina: 9.0, Hematokryt: 36.4,
    },
  ];

export const CbcSwap: React.FC = () => {
    return (
        <StyledSwapContainer>
            <h4>Morfologia krwi - wykres ostatnich wyników</h4>
            <ChartContainer>
            <LineChart
                width={600}
                height={300}
                data={data}
                margin={{
                    top: 0,
                    right: 50,
                    left: 0,
                    bottom: 0,
                }}
            >
                <CartesianGrid strokeDasharray="4 4" />
                <XAxis dataKey="name" />
                <YAxis />
                <Legend />
                {/* <Tooltip formatter={label => currencyFormat(label, currencyValue)} /> */}
                <Line type="monotone" dataKey="Leukocyty" stroke="#00e0b4" activeDot={{r: 8}} />
                <Line type="monotone" dataKey="Płytki krwi" stroke="#fe7f00" />
                <Line type="monotone" dataKey="Hemoglobina" stroke="#ff0000" />
                <Line type="monotone" dataKey="Hematokryt" stroke="#071e4a" />
            </LineChart>
        </ChartContainer>
            <StyledHeader>Morfologia krwi - wynik ostatniego badania</StyledHeader>
            <StyledLastAnalyses>
              <div>
                <div>Leukocyty</div>
                <div>Płytki krwi</div>
                <div>Hemoglobina</div>
                <div>Hematokryt</div>
                </div>
                <div>
                <StyledResult>5,0</StyledResult>
                <StyledResult>50</StyledResult>
                <StyledResult>8,0</StyledResult>
                <StyledResult>40,1</StyledResult> 
                </div>             
            </StyledLastAnalyses>
        </StyledSwapContainer>
    )
}
