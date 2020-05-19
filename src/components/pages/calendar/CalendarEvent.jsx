import ReactDOM from 'react-dom';
import React from "react";
import "./calendar.css";
import CalendarTitle from "./CalendarTitle";
import Calendar from "./Calendar";


class CalendarEvent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date : new Date()};
  }

  changerMois1 = () => {
    this.setState({date : new Date (this.state.date.getFullYear(),this.state.date.getMonth()+1,1)});
  }

  changerMois2 = () => {
    this.setState({date : new Date (this.state.date.getFullYear(),this.state.date.getMonth()-1,1)});
  }
  
  render(){
    return (
      <div className="flexContainer">
        <CalendarTitle date={this.state.date} changerMois1={this.changerMois1} changerMois2={this.changerMois2}/>
        <div className ="calendar">
          <Calendar date={this.state.date}/>
        </div>
      </div>
    );
  }
}


export default CalendarEvent;