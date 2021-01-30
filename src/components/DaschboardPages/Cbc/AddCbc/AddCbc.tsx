import 'date-fns';
import React from 'react';
import {Link} from 'react-router-dom';
import DateFnsUtils from '@date-io/date-fns';
import {
  AddCbcContainer,
  StyledTextField,
  StyledHeader,
  StyledDateTime,
  StyledButton,
  StyledCloseButton
} from './AddCbc.styled';

import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
  } from '@material-ui/pickers';
  import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
  import CancelIcon from '@material-ui/icons/Cancel';
  import InputAdornment from '@material-ui/core/InputAdornment';
  

export const AddCbc = () => {
    const [selectedDate, setSelectedDate] = React.useState<Date | null>(
        new Date(),
      );

      const handleDateChange = (date: Date | null) => {
        setSelectedDate(date);
      };

    return (
        <AddCbcContainer>
          <Link to="/dashboard/cbc">
            <StyledCloseButton aria-label="cancel" >
            <CancelIcon />
            </StyledCloseButton>
          </Link>
            <StyledHeader>Dodanie nowych badań morfologii krwi</StyledHeader>
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
                  label="Leukocyty"
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
                  label="Hemoglobina"
                  defaultValue=""
                  variant="outlined"
                  size="small"
                  InputProps={{
                    endAdornment: <InputAdornment position="start">g/dl</InputAdornment>,
                  }}
                />
                <StyledTextField
                  required
                  id="outlined-required"
                  label="Płyki krwi"
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
                  label="Hematokryt"
                  defaultValue=""
                  variant="outlined"
                  size="small"
                  InputProps={{
                    endAdornment: <InputAdornment position="start">%</InputAdornment>,
                  }}
                />
                <StyledTextField
                  required
                  id="outlined-required"
                  label="Neutrofile"
                  defaultValue=""
                  variant="outlined"
                  size="small"
                  InputProps={{
                    endAdornment: <InputAdornment position="start">tys/μl</InputAdornment>,
                  }}
                />
                <StyledTextField
                  id="outlined"
                  label="Erytrocyty"
                  defaultValue=""
                  variant="outlined"
                  size="small"
                  InputProps={{
                    endAdornment: <InputAdornment position="start">tys/μl</InputAdornment>,
                  }}
                />
                <StyledTextField
                  id="outlined"
                  label="MCV"
                  defaultValue=""
                  variant="outlined"
                  size="small"
                  InputProps={{
                    endAdornment: <InputAdornment position="start">fl</InputAdornment>,
                  }}
                />
                <StyledTextField
                  id="outlined"
                  label="MCH"
                  defaultValue=""
                  variant="outlined"
                  size="small"
                  InputProps={{
                    endAdornment: <InputAdornment position="start">pg</InputAdornment>,
                  }}
                />
                <StyledTextField
                  id="outlined"
                  label="MCHC"
                  defaultValue=""
                  variant="outlined"
                  size="small"
                  InputProps={{
                    endAdornment: <InputAdornment position="start">g/dl</InputAdornment>,
                  }}
                />
                <StyledTextField
                  id="outlined"
                  label="RDW-SD"
                  defaultValue=""
                  variant="outlined"
                  size="small"
                  InputProps={{
                    endAdornment: <InputAdornment position="start">fl</InputAdornment>,
                  }}
                />
                <StyledTextField
                  id="outlined"
                  label="RDW-CV"
                  defaultValue=""
                  variant="outlined"
                  size="small"
                  InputProps={{
                    endAdornment: <InputAdornment position="start">%</InputAdornment>,
                  }}
                />
                <StyledTextField
                  id="outlined"
                  label="PDW"
                  defaultValue=""
                  variant="outlined"
                  size="small"
                  InputProps={{
                    endAdornment: <InputAdornment position="start">fl</InputAdornment>,
                  }}
                />
                <StyledTextField
                  id="outlined"
                  label="MPV"
                  defaultValue=""
                  variant="outlined"
                  size="small"
                  InputProps={{
                    endAdornment: <InputAdornment position="start">fl</InputAdornment>,
                  }}
                />
                <StyledTextField
                  id="outlined"
                  label="P-LCR"
                  defaultValue=""
                  variant="outlined"
                  size="small"
                  InputProps={{
                    endAdornment: <InputAdornment position="start">%</InputAdornment>,
                  }}
                />
                <StyledTextField
                  id="outlined"
                  label="PCT"
                  defaultValue=""
                  variant="outlined"
                  size="small"
                  InputProps={{
                    endAdornment: <InputAdornment position="start">%</InputAdornment>,
                  }}
                />
                <StyledTextField
                  id="outlined"
                  label="Limfocyty"
                  defaultValue=""
                  variant="outlined"
                  size="small"
                  InputProps={{
                    endAdornment: <InputAdornment position="start">tys/μl</InputAdornment>,
                  }}
                />
                <StyledTextField
                  id="outlined"
                  label="Monocyty"
                  defaultValue=""
                  variant="outlined"
                  size="small"
                  InputProps={{
                    endAdornment: <InputAdornment position="start">tys/μl</InputAdornment>,
                  }}
                />
                <StyledTextField
                  id="outlined"
                  label="Eozynofile"
                  defaultValue=""
                  variant="outlined"
                  size="small"
                  InputProps={{
                    endAdornment: <InputAdornment position="start">tys/μl</InputAdornment>,
                  }}
                />
                <StyledTextField
                  id="outlined"
                  label="Bazofile"
                  defaultValue=""
                  variant="outlined"
                  size="small"
                  InputProps={{
                    endAdornment: <InputAdornment position="start">tys/μl</InputAdornment>,
                  }}
                />
                <StyledTextField
                  id="outlined"
                  label="Limfocyty"
                  defaultValue=""
                  variant="outlined"
                  size="small"
                  InputProps={{
                    endAdornment: <InputAdornment position="start">tys/μl</InputAdornment>,
                  }}
                />
                <StyledButton
                  variant="contained"
                  color="primary"
                  startIcon={<AddCircleOutlineIcon />}
                >
                Dodaj badanie
                </StyledButton>

        </AddCbcContainer>
    )
}

