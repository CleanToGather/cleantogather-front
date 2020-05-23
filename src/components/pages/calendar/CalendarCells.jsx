import React from "react";

class CalendarCells extends React.Component {
	render(){
		if (this.props.calendar==""){
			return(
				<div className="empty_cells"><p>{this.props.calendar}</p></div>
			);
		}
		else{
			return(
				<div className="cells"><p>{this.props.calendar}</p>{this.props.event}</div>
			);
		}
	}
}

export default CalendarCells;