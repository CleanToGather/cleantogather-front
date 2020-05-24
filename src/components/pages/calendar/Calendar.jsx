import React from "react";
import CalendarLine from "./CalendarLine";
import ApiService from "../../../services/ApiService";
import EventModal from '../../common/modals/EventModal';


class Calendar extends React.Component {
	constructor(props) {
    super(props);
    this.calendar = new Array(42);
    this.event = new Array(42);
    this.state = {
      listEvents : []
    }
  }

  componentDidMount(){
    this.getEvents();
  }

  getEvents(){
    var addEvent = this.state.listEvents;
    ApiService.fetchEvents().then(res => {
      if (res.data.length > 0) {  
        res.data.map(event => {
          addEvent.push(event);
        });
      }
      this.setState({listEvents : addEvent});
    });
  }

  addEventsInCalendar(){
    this.event = new Array(42);
    var monthDate = new Date(this.props.date.getFullYear(),this.props.date.getMonth(),1);
    var debut = monthDate.getDay();
    this.state.listEvents.map(events =>{
      var date = new Date(events.startDateTime);
      if (date.getMonth()==this.props.date.getMonth() && date.getFullYear()==this.props.date.getFullYear()){
        this.event[debut-1+date.getDate()]=<EventModal event={events} canSubscribe >{events.title}</EventModal>;
      }
    });
  }

  getCalendar(){
    var j=0;
    var i=1;
    var mapMonth = new Date(this.props.date.getFullYear(),this.props.date.getMonth(),i);
    while (j<mapMonth.getDay()){
      this.calendar[j]='';
      j++;
    }
    
    while (mapMonth!=NaN && mapMonth.getMonth()==this.props.date.getMonth()){
      this.calendar[j]=i.toString();
      j++;
      i++;
      mapMonth = new Date(this.props.date.getFullYear(),this.props.date.getMonth(),i);
    }

    while (j<this.calendar.length){
      this.calendar[j]='';
      j++;
    }
    return this.calendar;
  }

  render(){
    this.getCalendar();
    this.addEventsInCalendar();
    var content = [];
    var listDays = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
    for (var k = 0; k <6; k++) {
      content.push(<CalendarLine calendar={this.calendar} event={this.event} k={k} key={k}/>);
    }
    return (
      <div>
        <div className = 'ligne'>
          {listDays.map(jour => {
            return(<div className="jour" key={jour}>{jour}</div>);
          })}
        </div>
        {content}
      </div>
    );
  }
}

export default Calendar;