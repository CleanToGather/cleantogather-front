import React from "react";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import IconButton from '@material-ui/core/IconButton';

class CalendarTitle extends React.Component {
	render(){
		var listMois = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Décembre"];
		return (<div className='titleCalendar'>
      		<IconButton onClick={this.props.changerMois2}>
            <ArrowBackIosIcon/>
          </IconButton>
      		<h1>{listMois[this.props.date.getMonth()]} {this.props.date.getFullYear()}</h1>
      		<IconButton onClick={this.props.changerMois1}>
            <ArrowForwardIosIcon/>
          </IconButton>
      	</div>
    	);
	}
}

export default CalendarTitle;