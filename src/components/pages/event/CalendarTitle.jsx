import React from "react";
import Button from '@material-ui/core/Button';

class CalendarTitle extends React.Component {
	render(){
		var listMois = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Décembre"];
		return (<div class='title'>
      		<Button variant="contained" color="primary" onClick={this.props.changerMois2}>
        		Clique ici
      		</Button>
      		<h1>{listMois[this.props.date.getMonth()]} {this.props.date.getFullYear()}</h1>
      		<Button onClick={this.props.changerMois1}>
        		Clique ici
      		</Button>
      	</div>
    	);
	}
}

export default CalendarTitle;