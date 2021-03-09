import React from 'react';
import {StyledContainer, StyledAllContainer, StyledFirstContainer, StyledSecondContainer, StyledThirdContainer, StyledDateTime, StyledTextField} from './Medicines.styled';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
  } from '@material-ui/pickers';  
import InputAdornment from '@material-ui/core/InputAdornment';
import DateFnsUtils from '@date-io/date-fns';

export const Medicines: React.FC = () => {
    const [selectedDate, setSelectedDate] = React.useState<Date | null>(
        new Date(),
      );

      const handleDateChange = (date: Date | null) => {
        setSelectedDate(date);
      };
    return (
        <StyledContainer>
            <StyledAllContainer><h1>All</h1></StyledAllContainer>
            <StyledFirstContainer>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <StyledDateTime>
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="MM/dd/yyyy"
              margin="normal"
              id="analyses-date"
              label="Data dawki"
              value={selectedDate}
              onChange={handleDateChange}
              KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />        
        <KeyboardTimePicker
          margin="normal"
          id="analyses-time"
          label="Godzina dawki"
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
                  label="dawka lekarstwa"
                  defaultValue=""
                  variant="outlined"
                  size="small"
                  InputProps={{
                    endAdornment: <InputAdornment position="start">ml</InputAdornment>,
                  }}
                  
                />
                <StyledTextField
                  required
                  id="outlined-required"
                  label="nazwa lekarstwa"
                  defaultValue=""
                  variant="outlined"
                  size="small"
                  InputProps={{
                    endAdornment: <InputAdornment position="start">ml</InputAdornment>,
                  }}
                />
            </StyledFirstContainer>
            <StyledSecondContainer><h4>Second</h4></StyledSecondContainer>
            <StyledThirdContainer><h4>Third</h4></StyledThirdContainer>
        </StyledContainer>
    )
}
