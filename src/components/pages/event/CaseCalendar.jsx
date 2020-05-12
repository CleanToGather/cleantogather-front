import React from "react";

class CaseCalendar extends React.Component {
	render(){
		if (this.props.calendar==""){
			return(
				<div class="empty_cells"><p>{this.props.calendar}</p></div>
			);
		}
		else{
			return(
				<div class="cells"><p>{this.props.calendar}</p><p>{this.props.event}</p></div>
			);
		}
	}
}

export default CaseCalendar;