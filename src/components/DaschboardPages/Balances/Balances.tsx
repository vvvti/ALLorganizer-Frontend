import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import {StyledContainer, StyledAllContainer, StyledFirstContainer, StyledDateTime, StyledTextField} from './Balances.styled';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
  } from '@material-ui/pickers';
  
  import InputAdornment from '@material-ui/core/InputAdornment';

export const Balances: React.FC = () => {
    const [selectedDate, setSelectedDate] = React.useState<Date | null>(
        new Date(),
      );

      const handleDateChange = (date: Date | null) => {
        setSelectedDate(date);
      };
    return (
        <StyledContainer>
            <StyledAllContainer>
                <h4>
                    Dodaj bilans płynów
                </h4>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <StyledDateTime>
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="MM/dd/yyyy"
              margin="normal"
              id="analyses-date"
              label="Data badania"
              value={selectedDate}
              onChange={handleDateChange}
              KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />        
        <KeyboardTimePicker
          margin="normal"
          id="analyses-time"
          label="Godzina badania"
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
                  label="bilans ujemny"
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
                  label="bilans dodatni"
                  defaultValue=""
                  variant="outlined"
                  size="small"
                  InputProps={{
                    endAdornment: <InputAdornment position="start">ml</InputAdornment>,
                  }}
                />
            </StyledAllContainer>
            <StyledFirstContainer><h4>Aktualny bilans</h4></StyledFirstContainer>
            
        </StyledContainer>
    )
}