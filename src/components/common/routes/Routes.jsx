import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ListUser from "../../pages/user/ListUser";
import AddUser from "../../pages/user/AddUser";
import EditUser from "../../pages/user/EditUser";
import React from "react";

const AppRouter = () => {
    return(
	<div style={style}>
	    <Router>
		<Switch>
		    <Route path="/" exact component={ListUser} />
		    <Route path="/users" component={ListUser} />
		    <Route path="/add-user" component={AddUser} />
		    <Route path="/edit-user" component={EditUser} />
		</Switch>
	    </Router>
	</div>
    )
}

const style={
    marginTop:'20px'
}

export default AppRouter;
