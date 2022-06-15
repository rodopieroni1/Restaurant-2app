import * as React from "react";
import TextField from "@mui/material/TextField";
import {
  createStyles,
  makeStyles,
  MenuItem,
  Paper,
  Select,
  Theme,
  Typography,
} from "@material-ui/core";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

export default function MaterialUIPickers() {
  const [value, setValue] = React.useState<Date | null>(
    new Date("2014-08-18T21:11:54")
  );

  const handleChange = (newValue: Date | null) => {
    setValue(newValue);
  };
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > * ": {
        margin: theme.spacing(1),
        width: "30ch",
      },
    },
  })
);
export const Form = () => {
  const classes = useStyles();
  const handleDateChange = () => {};
  const handleSelect = () => {};

  return (
    <Paper style={{ padding: "2em" }}>
      <form className={classes.root} noValidate autoComplete="off">
        <Typography variant="h6"> Realiza tu Reserva </Typography>
        <TextField id="standard-basic" label="Nombre" variant="standard" />
        <TextField id="standard-basic" label="Email" variant="standard" />
        <TextField id="standard-basic" label="Personas" variant="standard" />
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            margin="normal"
            id="date-picker-dialog"
            label="Fecha"
            format="MM/dd/yyyy"
            value={""}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              "aria-label": "change date",
            }}
          />
        </MuiPickersUtilsProvider>

        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={10}
          label="Age"
          onChange={handleSelect}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </form>
    </Paper>
  );
};
