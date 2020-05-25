import ReactDOM from 'react-dom';
import React from "react";
import "./calendar/calendar.css";
import CalendarTitle from "./calendar/CalendarTitle";
import Calendar from "./calendar/Calendar";
import ListEvents from "./list/ListEvents";
import IconButton from '@material-ui/core/IconButton';
import ListIcon from '@material-ui/icons/List';
import EventIcon from '@material-ui/icons/Event';
import Grid from '@material-ui/core/Grid';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const isOnPC = (window.innerWidth > 1000);

class Event extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date : new Date(),
        showCalendar: isOnPC};
    }

    changeMonthNext = () => {
        this.setState({date : new Date (this.state.date.getFullYear(),this.state.date.getMonth()+1,1)});
    }

    changeMonthPrevious = () => {
        this.setState({date : new Date (this.state.date.getFullYear(),this.state.date.getMonth()-1,1)});
    }

    switchViewCalendar = (bool) => {
        this.setState({showCalendar: bool})
    }

    render(){
        return (
            <Grid container>
                {this.state.showCalendar ? <>
                    <Grid item>
                        <IconButton onClick={() => this.switchViewCalendar(false)}>
                            <ListIcon />
                        </IconButton>
                    </Grid>
                    <Grid item>
                        <CalendarTitle date={this.state.date} changeMonthNext={this.changeMonthNext} changeMonthPrevious={this.changeMonthPrevious}/>
                        <div className ="calendar">
                            <Calendar date={this.state.date}/>
                        </div>
                    </Grid>
                </>:<>
                    {isOnPC &&
                        <Grid item>
                            <IconButton onClick={() => this.switchViewCalendar(true)}>
                                <ListIcon />
                            </IconButton>
                        </Grid>
                    }
                    <Grid item>
                        <ListEvents/>
                    </Grid>
                </>}
            </Grid>
        );
    }
}


export default Event;
