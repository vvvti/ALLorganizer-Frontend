import 'date-fns';
import React from 'react';
import {Link} from 'react-router-dom';
import DateFnsUtils from '@date-io/date-fns';
import {
  AddUrineContainer,
  StyledTextField,
  StyledHeader,
  StyledDateTime,
  StyledButton,
  StyledCloseButton
} from './AddUrine.styled';

import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
  } from '@material-ui/pickers';
  import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
  import CancelIcon from '@material-ui/icons/Cancel';
  import InputAdornment from '@material-ui/core/InputAdornment';
  

export const AddUrine = () => {
    const [selectedDate, setSelectedDate] = React.useState<Date | null>(
        new Date(),
      );

      const handleDateChange = (date: Date | null) => {
        setSelectedDate(date);
      };

    return (
        <AddUrineContainer>
          <Link to="/dashboard/urine">
            <StyledCloseButton aria-label="cancel" >
            <CancelIcon />
            </StyledCloseButton>
          </Link>
            <StyledHeader>Dodanie nowych badań moczu</StyledHeader>
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
                  label="Przejrzystość"
                  defaultValue=""
                  variant="outlined"
                  size="small"
                  InputProps={{
                    endAdornment: <InputAdornment position="start"></InputAdornment>,
                  }}
                  
                />
                <StyledTextField
                  required
                  id="outlined-required"
                  label="Barwa"
                  defaultValue=""
                  variant="outlined"
                  size="small"
                  InputProps={{
                    endAdornment: <InputAdornment position="start"></InputAdornment>,
                  }}
                />
                <StyledTextField
                  required
                  id="outlined-required"
                  label="Ciężar własciwy"
                  defaultValue=""
                  variant="outlined"
                  size="small"
                  InputProps={{
                    endAdornment: <InputAdornment position="start">kg/l</InputAdornment>,
                  }}
                />
                <StyledTextField
                  required
                  id="outlined-required"
                  label="pH"
                  defaultValue=""
                  variant="outlined"
                  size="small"
                  InputProps={{
                    endAdornment: <InputAdornment position="start"></InputAdornment>,
                  }}
                />
                <StyledTextField
                  required
                  id="outlined-required"
                  label="Glukoza"
                  defaultValue=""
                  variant="outlined"
                  size="small"
                  InputProps={{
                    endAdornment: <InputAdornment position="start"></InputAdornment>,
                  }}
                />
                <StyledTextField
                  id="outlined"
                  label="Ketony"
                  defaultValue=""
                  variant="outlined"
                  size="small"
                  InputProps={{
                    endAdornment: <InputAdornment position="start">mmol/l</InputAdornment>,
                  }}
                />
                <StyledTextField
                  id="outlined"
                  label="Urobilinogen"
                  defaultValue=""
                  variant="outlined"
                  size="small"
                  InputProps={{
                    endAdornment: <InputAdornment position="start">μmol/l</InputAdornment>,
                  }}
                />
                <StyledTextField
                  id="outlined"
                  label="Bilirubina"
                  defaultValue=""
                  variant="outlined"
                  size="small"
                  InputProps={{
                    endAdornment: <InputAdornment position="start"></InputAdornment>,
                  }}
                />
                <StyledTextField
                  id="outlined"
                  label="Białko"
                  defaultValue=""
                  variant="outlined"
                  size="small"
                  InputProps={{
                    endAdornment: <InputAdornment position="start"></InputAdornment>,
                  }}
                />
                <StyledTextField
                  id="outlined"
                  label="Azotyny"
                  defaultValue=""
                  variant="outlined"
                  size="small"
                  InputProps={{
                    endAdornment: <InputAdornment position="start"></InputAdornment>,
                  }}
                />
                <StyledTextField
                  id="outlined"
                  label="Erytrocyty"
                  defaultValue=""
                  variant="outlined"
                  size="small"
                  InputProps={{
                    endAdornment: <InputAdornment position="start">wpw</InputAdornment>,
                  }}
                />
                <StyledTextField
                  id="outlined"
                  label="Leukocyty"
                  defaultValue=""
                  variant="outlined"
                  size="small"
                  InputProps={{
                    endAdornment: <InputAdornment position="start"></InputAdornment>,
                  }}
                />
                <StyledTextField
                  id="outlined"
                  label="Nabłonki płaskie"
                  defaultValue=""
                  variant="outlined"
                  size="small"
                  InputProps={{
                    endAdornment: <InputAdornment position="start"></InputAdornment>,
                  }}
                />
                <StyledTextField
                  id="outlined"
                  label="Erytrocyty świeże"
                  defaultValue=""
                  variant="outlined"
                  size="small"
                  InputProps={{
                    endAdornment: <InputAdornment position="start">wpw</InputAdornment>,
                  }}
                />
                <StyledTextField
                  id="outlined"
                  label="Erytrocyty wyługowane"
                  defaultValue=""
                  variant="outlined"
                  size="small"
                  InputProps={{
                    endAdornment: <InputAdornment position="start">wpw</InputAdornment>,
                  }}
                />
                
                <StyledButton
                  variant="contained"
                  color="primary"
                  startIcon={<AddCircleOutlineIcon />}
                >
                Dodaj badanie
                </StyledButton>

        </AddUrineContainer>
    )
}


