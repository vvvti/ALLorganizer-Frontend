import React from 'react';
import {StyledSwapContainer, ChartContainer, StyledLastAnalyses, StyledHeader, StyledResult} from './BiochemistrySwap.styled';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const data = [
  {
    name: '07-01-2021', alt: 600, ast: 678,
  },
  {
    name: '13-02-2021', alt: 432, ast: 563,
  },
  {
    name: '10-03-2021', alt: 178, ast: 150,
  },
  {
    name: '28-04-2021', alt: 63, ast: 48,
  },
  {
    name: '12-05-2021', alt: 35, ast: 32,
  },
  {
    name: '07-06-2021', alt: 125, ast: 165,
  },
  {
    name: '19-07-2021', alt: 283, ast: 204,
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
        <StyledHeader>Biochemia - wynik ostatniego badania</StyledHeader>
        <StyledLastAnalyses>
              <div>
                <div>ALT</div>
                <div>AST</div>
                </div>
                <div>
                <StyledResult>283</StyledResult>
                <StyledResult>204</StyledResult>
                </div>             
            </StyledLastAnalyses>
        </StyledSwapContainer>
    )
}