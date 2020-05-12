import React from "react";

class CaseCalendar extends React.Component {
	render(){
		if (this.props.calendar==""){
			return(
				<div className="empty_cells"><p>{this.props.calendar}</p></div>
			);
		}
		else{
			return(
				<div className="cells"><p>{this.props.calendar}</p><p>{this.props.event}</p></div>
			);
		}
	}
}

export default CaseCalendar;
