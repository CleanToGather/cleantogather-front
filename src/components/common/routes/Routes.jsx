import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from "../../pages/home/Home"
import ListUser from "../../pages/backoffice/user/ListUser";
import AddUser from "../../pages/backoffice/user/AddUser";
import EditUser from "../../pages/backoffice/user/EditUser";
import ListEvent from "../../pages/backoffice/event/ListEvent";
import AddEvent from "../../pages/backoffice/event/AddEvent";
import EditEvent from "../../pages/backoffice/event/EditEvent";
import Profil from "../../pages/profil/Profil";
import Event from "../../pages/event/Event";
import AddMarker from "../../pages/backoffice/marker/AddMarkers";
import ListMarker from "../../pages/backoffice/marker/ListMarkers";
import React from "react";

const AppRouter = () => {
    return(
	<div style={style}>
	    <Router>
		<Switch>
		    <Route path="/" exact component={Home} />
            <Route path="/users" exact component={ListUser} />
		    <Route path="/users/add" component={AddUser} />
		    <Route path="/users/edit" component={EditUser} />
            <Route path="/events" exact component={ListEvent} />
		    <Route path="/events/add" component={AddEvent} />
		    <Route path="/events/edit" component={EditEvent} />
            <Route path="/profil" component={Profil} />
            <Route path="/calendar" component={Event} />
            <Route path="/markers/add" component={AddMarker} />
            <Route path="/markers" component={ListMarker} />
		</Switch>
	    </Router>
	</div>
    )
}

const style={
    marginTop:'20px'
}

export default AppRouter;
