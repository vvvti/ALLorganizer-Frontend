import React from 'react';
import {StyledSwapContainer, ChartContainer, StyledLastAnalyses, StyledResult, StyledHeader} from './CrpSwap.styled';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const data = [
    {
      name: '07-01-2021', crp: 10,
    },
    {
      name: '13-02-2021', crp: 0,
    },
    {
      name: '10-03-2021', crp: 178,
    },
    {
      name: '28-04-2021', crp: 63, 
    },
    {
      name: '12-05-2021', crp: 35, 
    },
    {
      name: '07-06-2021', crp: 20,
    },
    {
      name: '19-07-2021', crp: 283,
    },
  ];

export const CrpSwap: React.FC = () => {
    return (
        <StyledSwapContainer>
            <h4>Białko C-reaktywne (CRP) - wykres ostatnich wyników</h4>
            <ChartContainer>
            <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="4 4" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="crp" fill="#8884d8" />
        {/* <Bar dataKey="ast" fill="#82ca9d" /> */}
      </BarChart>
        </ChartContainer>
        <StyledHeader>Białko C-reaktywne (CRP) - wynik ostatniego badania</StyledHeader>
        <StyledLastAnalyses>
              <div>
                <div>Białko C-reaktywne</div>
                </div>
                <div>
                <StyledResult>283</StyledResult>
                </div>             
            </StyledLastAnalyses>
        </StyledSwapContainer>
    )
}
