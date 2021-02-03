import React from 'react';
import {
    StyledSwapContainer,
    ChartContainer,
    StyledLastAnalyses,
    StyledHeader,
    StyledResult
} from './UrineSwap.styled';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  } from 'recharts';
  
  const data = [
    {
      name: '10-01-2020', "ciężar właściwy": 1.016, pH: 7.0, leukocyty: 3,
    },
    {
      name: '10-02-2020', "ciężar właściwy": 1.028, pH: 6.7, leukocyty: 5,
    },
    {
      name: '15-03-2020', "ciężar właściwy": 0.998, pH: 7.2, leukocyty: 7,
    },
    {
      name: '13-04-2020', "ciężar właściwy": 0.950, pH: 7.1, leukocyty: 3,
    },
    {
      name: '10-05-2020', "ciężar właściwy": 1.010, pH: 7.3, leukocyty: 0,
    },
    {
      name: '10-06-2020', "ciężar właściwy": 1.076, pH: 6.9, leukocyty: 3,
    },
    {
      name: '10-09-2020', "ciężar właściwy": 0.999, pH: 6.8, leukocyty: 0,
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
                    <Bar dataKey="ciężar właściwy" stackId="a" fill="#8884d8" />
                    <Bar dataKey="pH" stackId="a" fill="#82ca9d" />
                    <Bar dataKey="leukocyty" fill="#ffc658" />
            </BarChart>
            </ChartContainer>
            <StyledHeader>Badania moczu - wynik ostatniego badania</StyledHeader>
            <StyledLastAnalyses>
              <div>
                <div>Barwa</div>
                <div>Ciężar właściwy</div>
                <div> Leukocyty</div>
                <div>Bakterie</div>
                <div>pH</div>
                </div>
                <div>
                <StyledResult>Słomkowy</StyledResult>
                <StyledResult>0,999</StyledResult>
                <StyledResult>0</StyledResult>
                <StyledResult>nieliczne</StyledResult>
                <StyledResult>6,8</StyledResult> 
                </div>             
            </StyledLastAnalyses>
        </StyledSwapContainer>
    )
}
