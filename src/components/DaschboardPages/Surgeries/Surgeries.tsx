import React from 'react';
import {StyledContainer, StyledAllContainer, StyledFirstContainer, StyledSecondContainer, StyledThirdContainer, StyledDateTime, StyledTextField} from './Surgeries.styled';
import {SurgeriesList} from './SurgeriesList/SurgeriesList';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
  } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

export const Surgeries: React.FC = () => {
    const [selectedDate, setSelectedDate] = React.useState<Date | null>(
        new Date(),
      );

      const handleDateChange = (date: Date | null) => {
        setSelectedDate(date);
      };
    return (
        <StyledContainer>
            <StyledAllContainer>
                <SurgeriesList />
            </StyledAllContainer>
            <StyledFirstContainer>
                {/* <h4>Dodaj zabieg</h4> */}
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <StyledDateTime>
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="MM/dd/yyyy"
              margin="normal"
              id="analyses-date"
              label="Data zabiegu"
              value={selectedDate}
              onChange={handleDateChange}
              KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />        
        <KeyboardTimePicker
          margin="normal"
          id="analyses-time"
          label="Godzina zabiegu"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change time',
          }}
        />
        </StyledDateTime>
        </MuiPickersUtilsProvider>
            
               <StyledTextField
                  required
                  id="outlined-required"
                  label="rodzaj"
                  defaultValue=""
                  variant="outlined"
                  size="small"
                />
                <StyledTextField
                  required
                  id="outlined-required"
                  label="uwagi"
                  defaultValue=""
                  variant="outlined"
                  size="small"
                />
            </StyledFirstContainer>
            <StyledSecondContainer><h4>Second</h4></StyledSecondContainer>
            <StyledThirdContainer><h4>Third</h4></StyledThirdContainer>
        </StyledContainer>
    )
}

