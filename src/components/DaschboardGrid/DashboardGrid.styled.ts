import styled from 'styled-components';


export const StyledContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 100px 1fr;
    align-items: flex-start;
    grid-gap: 10px;
    grid-template-areas:
        'cbc cbc ast ast'
        'crp crp analyses analyses';
    min-height: 90vh;
    margin: 20px 0;
`;

export const StyledCbcContainer = styled.div`
    grid-area: profile;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0 4px 12px;
    min-height: 100%;
`;