import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from "../../pages/home/Home"
import ListUser from "../../pages/user/ListUser";
import AddUser from "../../pages/user/AddUser";
import EditUser from "../../pages/user/EditUser";
import ListEvent from "../../pages/event/ListEvent";
import AddEvent from "../../pages/event/AddEvent";
import EditEvent from "../../pages/event/EditEvent";
import Profil from "../../pages/profil/Profil";
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
		</Switch>
	    </Router>
	</div>
    )
}

const style={
    marginTop:'20px'
}

export default AppRouter;
