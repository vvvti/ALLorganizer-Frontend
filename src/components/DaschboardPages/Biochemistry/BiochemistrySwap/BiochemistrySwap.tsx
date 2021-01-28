import React from 'react';
import {StyledSwapContainer, ChartContainer} from './BiochemistrySwap.styled';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const data = [
    {
      name: '10-01-2020', ast: 4000, alt: 2400,
    },
    {
      name: '07-02-2020', ast: 3000, alt: 1398,
    },
    {
      name: '12-03-2020', ast: 2000, alt: 780,
    },
    {
      name: '31-03-2020', ast: 2780, alt: 240,
    },
    {
      name: '04-04-2020', ast: 1890, alt: 1230,
    },
    {
      name: '02.05.2020', ast: 2390, alt: 768,
    },
    {
      name: '07-06-2020', uv: 3490, alt: 600,
    },
  ];

export const BiochemistrySwap: React.FC = () => {
    // const data = results.chartData;
    return (
        <StyledSwapContainer>
            <h4>Biochemia - wykres ostatnich wyników</h4>
            <ChartContainer>
            <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="alt" fill="#8884d8" />
        <Bar dataKey="ast" fill="#82ca9d" />
      </BarChart>
        </ChartContainer>
        <h4>Biochemia - wynik ostatniego badania</h4>
        </StyledSwapContainer>
    )
}