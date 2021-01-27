import React from 'react';
import {
    StyledSwapContainer,
    ChartContainer,
    StyledLastAnalyses,
    StyledHeader
} from './UrineSwap.styled';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  } from 'recharts';
  
  const data = [
    {
      name: '10-01-2020', uv: 4000, pv: 2400, amt: 2400,
    },
    {
      name: '10-02-2020', uv: 3000, pv: 1398, amt: 2210,
    },
    {
      name: '15-03-2020', uv: 2000, pv: 9800, amt: 2290,
    },
    {
      name: '13-04-2020', uv: 2780, pv: 3908, amt: 2000,
    },
    {
      name: '10-05-2020', uv: 1890, pv: 4800, amt: 2181,
    },
    {
      name: '10-06-2020', uv: 2390, pv: 3800, amt: 2500,
    },
    {
      name: '10-09-2020', uv: 3490, pv: 4300, amt: 2100,
    },
  ];

export const UrineSwap: React.FC = () => {
    return (
        <StyledSwapContainer>
            <StyledHeader>Badania moczu - wykres ostatnich wyników</StyledHeader>
            
            <ChartContainer>
            <BarChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 0, right: 0, left: 0, bottom: 0,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="pv" stackId="a" fill="#8884d8" />
                    <Bar dataKey="amt" stackId="a" fill="#82ca9d" />
                    <Bar dataKey="uv" fill="#ffc658" />
            </BarChart>
            </ChartContainer>
            <StyledHeader>Badania moczu - wynik ostatniego badania</StyledHeader>
            <StyledLastAnalyses>
                <p>Barwa Ciężar właściwy </p>               
                <p>pH Bilirubina Leukocyty</p>
                <p>Białko Bakterie</p>               
            </StyledLastAnalyses>
        </StyledSwapContainer>
    )
}
