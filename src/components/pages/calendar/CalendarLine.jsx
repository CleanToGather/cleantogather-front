import React from "react";
import CaseCalendar from "./CaseCalendar";

class CalendarLine extends React.Component {
	render(){
		var content =[];
    for (var k = 0; k <7; k++) {
      content.push(<CaseCalendar calendar={this.props.calendar[this.props.k*7+k]} event={this.props.event[this.props.k*7+k]} key={k}/>);
    }
    return (
      <div className='ligne'>
        {content}
      </div>
    );
	}
}

export default CalendarLine;