import 'date-fns';
import React from 'react';
import {Link} from 'react-router-dom';
import DateFnsUtils from '@date-io/date-fns';
import {
  AddCrpContainer,
  StyledTextField,
  StyledHeader,
  StyledDateTime,
  StyledButton,
  StyledCloseButton
} from './AddCrp.styled';

import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
  } from '@material-ui/pickers';
  import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
  import CancelIcon from '@material-ui/icons/Cancel';
  import InputAdornment from '@material-ui/core/InputAdornment';
  

export const AddCrp = () => {
    const [selectedDate, setSelectedDate] = React.useState<Date | null>(
        new Date(),
      );

      const handleDateChange = (date: Date | null) => {
        setSelectedDate(date);
      };

    return (
        <AddCrpContainer>
          <Link to="/dashboard/crp">
            <StyledCloseButton aria-label="cancel" >
            <CancelIcon />
            </StyledCloseButton>
          </Link>
            <StyledHeader>Dodanie nowych badań Białka C-reaktywnego(CRP)</StyledHeader>
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
                  label="Białko CRP"
                  defaultValue=""
                  variant="outlined"
                  size="small"
                  InputProps={{
                    endAdornment: <InputAdornment position="start"></InputAdornment>,
                  }}
                  
                />                
                <StyledButton
                  variant="contained"
                  color="primary"
                  startIcon={<AddCircleOutlineIcon />}
                >
                Dodaj badanie
                </StyledButton>

        </AddCrpContainer>
    )
}


