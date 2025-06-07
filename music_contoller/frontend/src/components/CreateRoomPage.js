import React, {Component} from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";




export default class CreateRoomPage extends Component {
    defaultVotes = 2;
    constructor(props) {
        super(props);
    }
    render() {
        return (
                <Grid container spacing={1} direction="column" alignItems="center" justifyContent="center" style={{ minHeight: "100vh" }}>
                    <Grid item xs={12}>
                        <Typography component="h4" variant="h4" align="center">
                        Create A Room
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <FormControl component="fieldset">
                        <FormHelperText>
                            <div style={{ textAlign: "center" }}>
                            Guest Control Of Playback State
                            </div>
                        </FormHelperText>
                        <RadioGroup row defaultValue="true">
                            <FormControlLabel
                            value="true"
                            control={<Radio color="primary" />}
                            label="Play/Pause"
                            labelPlacement="bottom"/>
                            <FormControlLabel
                            value="false"
                            control={<Radio color="secondary" />}
                            label="No Conrol/Pause"
                            labelPlacement="bottom"/>
                                
                        </RadioGroup>
                        </FormControl>
                    </Grid>
                     <Grid container spacing={1} direction="column" alignItems="center" justifyContent="center" style={{ minHeight: "100vh" }}>
                        <FormControl>
                            <TextField
                            required="true"
                            type="number"
                            defaultValue={this.defaultVotes}
                            inputProps={{
                                min :1,
                            }}/>
                            <FormHelperText>
                                <div align="center"> vote required to skip song</div>
                            </FormHelperText>
                        </FormControl>
                     </Grid>
                </Grid>

               
        );

    }
}