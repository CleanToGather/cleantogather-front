
import ReactDOM from 'react-dom';
import {Calendar} from 'calendar-base';
import React from "react";
import "./index.css";

events = [{lieu : "test", description :"test", date},{}];


class CalendarEvent extends React.Component {
  constructor(props) {
    super(props);
    this.date = new Date();
    this.calendar = new Array(42);
    this.events = [];
  }

  getTableau2(){
    var j=0;
    var i=1;
    var dateMois = new Date(this.date.getFullYear(),this.date.getMonth(),i);
    while (j<dateMois.getDay()){
      this.calendar[j]='';
      j++;
    }
    
    while (dateMois!=NaN && dateMois.getMonth()==this.date.getMonth()){
      this.calendar[j]=i.toString();
      j++;
      i++;
      dateMois = new Date(this.date.getFullYear(),this.date.getMonth(),i);
    }

    while (j<this.calendar.length){
      this.calendar[j]='';
      j++;
    }
    return this.calendar;

  }

  changerMois1 = () => {
    this.date = new Date (this.date.getFullYear(),this.date.getMonth()+1,1);
    ReactDOM.render(
      <CalendarEvent />,
      document.getElementById('root')
    );
  }

  changerMois2 = () => {
    this.date = new Date (this.date.getFullYear(),this.date.getMonth()-1,1);
    ReactDOM.render(
      <CalendarEvent />,
      document.getElementById('root')
    );
  }

  renderTitle(){
    var listMois = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Décembre"];
    return (<div class='title'>
      <button onClick={this.changerMois2}>
        Clique ici
      </button>
      <h1>{listMois[this.date.getMonth()]} {this.date.getFullYear()}</h1>
      <button onClick={this.changerMois1}>
        Clique ici
      </button>
      </div>
    );
  }

  //
  renderJourSemaine(j){
    var listSemaine = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
    return (
      <div class = 'ligne'>
        <div class ='jour'>{listSemaine[0]}</div>
        <div class ='jour'>{listSemaine[1]}</div>
        <div class ='jour'>{listSemaine[2]}</div>
        <div class ='jour'>{listSemaine[3]}</div>
        <div class ='jour'>{listSemaine[4]}</div>
        <div class ='jour'>{listSemaine[5]}</div>
        <div class ='jour'>{listSemaine[6]}</div>
      </div>
    );
  }

  renderLigne(i){
    return (
      <div class='ligne'>
        <p>{this.calendar[i*7+0]}</p>
        <p>{this.calendar[i*7+1]}</p>
        <p>{this.calendar[i*7+2]}</p>
        <p>{this.calendar[i*7+3]}</p>
        <p>{this.calendar[i*7+4]}</p>
        <p>{this.calendar[i*7+5]}</p>
        <p>{this.calendar[i*7+6]}</p>
      </div>
    )
  }

  renderTableau(){
    this.getTableau2();
    return (
      <div class= 'calendar'>
        {this.renderLigne(0)}
        {this.renderLigne(1)}
        {this.renderLigne(2)}
        {this.renderLigne(3)}
        {this.renderLigne(4)}
        {this.renderLigne(5)}
      </div>
    );
  }


  render(){
    return (
      <div className="flexContainer">
        {this.renderTitle()}
        {this.renderJourSemaine()}
        {this.renderTableau()}
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <CalendarEvent />,
  document.getElementById('root')
);