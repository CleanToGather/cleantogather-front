import React from "react";
import CalendarLine from "./CalendarLine";

var events = [{lieu : "Paris", description :"test", date : "2020-05-30T16:00:39.409Z"},{lieu : "Issy", description :"test", date : "2020-06-05T15:20:39.409Z"}]

class Calendar extends React.Component {
	constructor(props) {
    super(props);
    this.calendar = new Array(42);
    this.event = new Array(42);
    this.state={date : this.props.date};
  }

  getEvents(){
    this.event = new Array(42);
    var dateMois = new Date(this.state.date.getFullYear(),this.state.date.getMonth(),1);
    var debut = dateMois.getDay();
    events.map(function(events){
      var date = new Date(events.date);
      if (date.getMonth()==this.state.date.getMonth()){
        this.event[debut-1+date.getDate()]=events.lieu+" "+events.description+" "+date.getUTCHours()+"h";
      }
    },this);
  }

  getTableau(){
    var j=0;
    var i=1;
    var dateMois = new Date(this.state.date.getFullYear(),this.state.date.getMonth(),i);
    while (j<dateMois.getDay()){
      this.calendar[j]='';
      j++;
    }
    
    while (dateMois!=NaN && dateMois.getMonth()==this.state.date.getMonth()){
      this.calendar[j]=i.toString();
      j++;
      i++;
      dateMois = new Date(this.state.date.getFullYear(),this.state.date.getMonth(),i);
    }

    while (j<this.calendar.length){
      this.calendar[j]='';
      j++;
    }
    return this.calendar;
  }

  render(){
    this.getTableau();
    this.getEvents();
    var content = [];
    var listSemaine = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
    for (var k = 0; k <6; k++) {
      content.push(<p><CalendarLine calendar={this.calendar} event={this.event} k={k}/></p>);
    }
    return (
      <div>
        <div class = 'ligne'>
          {listSemaine.map(listSemaine => {
            return(<div class="jour">{listSemaine}</div>);
          })}
        </div>
        {content}
      </div>
    );
  }
}

export default Calendar;