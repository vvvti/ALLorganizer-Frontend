import 'date-fns';
import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import {AddCbcContainer, StyledTextField, StyledHeader, StyledDateTime} from './AddCbc.styled';

import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
  } from '@material-ui/pickers';

export const AddCbc = () => {
    const [selectedDate, setSelectedDate] = React.useState<Date | null>(
        new Date(),
      );

      const handleDateChange = (date: Date | null) => {
        setSelectedDate(date);
      };

    return (
        <AddCbcContainer>
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
                />
                <StyledTextField
                  required
                  id="outlined-required"
                  label="Hemoglobina"
                  defaultValue=""
                  variant="outlined"
                  size="small"
                />
                <StyledTextField
                  required
                  id="outlined-required"
                  label="Płyki krwi"
                  defaultValue=""
                  variant="outlined"
                  size="small"
                />
                <StyledTextField
                  required
                  id="outlined-required"
                  label="Hematokryt"
                  defaultValue=""
                  variant="outlined"
                  size="small"
                />
                <StyledTextField
                  required
                  id="outlined-required"
                  label="Neutrofile"
                  defaultValue=""
                  variant="outlined"
                  size="small"
                />
                <StyledTextField
                  required
                  id="outlined"
                  label="Erytrocyty"
                  defaultValue=""
                  variant="outlined"
                  size="small"
                />
        </AddCbcContainer>
    )
}

