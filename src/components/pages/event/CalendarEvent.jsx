import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import React from "react";
import "./calendar.css";
import CaseCalendar from "./CaseCalendar";

var events = [{lieu : "Paris", description :"test", date : "2020-05-30T16:00:39.409Z"},{lieu : "Issy", description :"test", date : "2020-05-05T15:20:39.409Z"}]


class CalendarEvent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date : new Date()};
    this.calendar = new Array(42);
    this.event = new Array(42);
  }

  getEvents(){
    this.event = new Array(42);
    var dateMois = new Date(this.state.date.getFullYear(),this.state.date.getMonth(),1);
    var debut = dateMois.getDay();
    events.map(function(events){
      var date = new Date(events.date);
      this.event[debut-1+date.getDate()]=events.lieu+" "+events.description+" "+date.getUTCHours()+"h";
    },this);
  }

  getTableau2(){
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

  changerMois1 = () => {
    this.setState({date : new Date (this.state.date.getFullYear(),this.state.date.getMonth()+1,1)});
  }

  changerMois2 = () => {
    this.setState({date : new Date (this.state.date.getFullYear(),this.state.date.getMonth()-1,1)});
  }

  renderTitle(){
    var listMois = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Décembre"];
    return (<div class='title'>
      <Button variant="contained" color="primary" onClick={this.changerMois2}>
        Clique ici
      </Button>
      <h1>{listMois[this.state.date.getMonth()]} {this.state.date.getFullYear()}</h1>
      <Button onClick={this.changerMois1}>
        Clique ici
      </Button>
      </div>
    );
  }

  //
  renderJourSemaine(){
    var listSemaine = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
    return (
      <div class = 'ligne'>
        {listSemaine.map(listSemaine => {
          return(<div class="jour">{listSemaine}</div>);
        })}
      </div>
    );
  }

  renderLigne(i){
    var content =[];
    for (var k = 0; k <7; k++) {
      content.push(<CaseCalendar calendar={this.calendar[i*7+k]} event={this.event[i*7+k]}/>);
    }
    return (
      <div class='ligne'>
        {content.map(content => {
          return content;
        })}
      </div>
    );
  }

  renderTableau(){
    this.getTableau2();
    this.getEvents();
    var content = [];
    for (var k = 0; k <6; k++) {
      content.push(<p>{this.renderLigne(k)}</p>);
    }
    return (
      <div>
        {content}
      </div>
    );
  }


  render(){
    return (
      <div className="flexContainer">
        {this.renderTitle()}
        <div class ="calendar">
          {this.renderJourSemaine()}
          {this.renderTableau()}
        </div>
      </div>
    );
  }
}


export default CalendarEvent;