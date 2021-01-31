import 'date-fns';
import React from 'react';
import {Link} from 'react-router-dom';
import DateFnsUtils from '@date-io/date-fns';
import {
  AddBiochemistryContainer,
  StyledTextField,
  StyledHeader,
  StyledDateTime,
  StyledButton,
  StyledCloseButton
} from './AddBiochemistry.styled';

import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
  } from '@material-ui/pickers';
  import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
  import CancelIcon from '@material-ui/icons/Cancel';
  import InputAdornment from '@material-ui/core/InputAdornment';
  

export const AddBiochemistry = () => {
    const [selectedDate, setSelectedDate] = React.useState<Date | null>(
        new Date(),
      );

      const handleDateChange = (date: Date | null) => {
        setSelectedDate(date);
      };

    return (
        <AddBiochemistryContainer>
          <Link to="/dashboard/biochemistry">
            <StyledCloseButton aria-label="cancel" >
            <CancelIcon />
            </StyledCloseButton>
          </Link>
            <StyledHeader>Dodanie nowych badań biochemicznych</StyledHeader>
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
                  label="ALT"
                  defaultValue=""
                  variant="outlined"
                  size="small"
                  InputProps={{
                    endAdornment: <InputAdornment position="start">tys/μl</InputAdornment>,
                  }}
                  
                />
                <StyledTextField
                  required
                  id="outlined-required"
                  label="AST"
                  defaultValue=""
                  variant="outlined"
                  size="small"
                  InputProps={{
                    endAdornment: <InputAdornment position="start">g/dl</InputAdornment>,
                  }}
                />
                
                <StyledButton
                  variant="contained"
                  color="primary"
                  startIcon={<AddCircleOutlineIcon />}
                >
                Dodaj badanie
                </StyledButton>

        </AddBiochemistryContainer>
    )
}


