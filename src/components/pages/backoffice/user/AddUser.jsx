import React, { Component } from 'react'
import ApiService from "../../../../services/ApiService";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class AddUser extends Component{

    constructor(props){
        super(props);
        this.state ={
            email: '',
	    name: '',
            password: '',
	    role:'ADMIN_ROLE',
            message: null
        }
        this.saveUser = this.saveUser.bind(this);
    }

    saveUser = (e) => {
        e.preventDefault();
        let user = {name: this.state.name, password: this.state.password, email: this.state.email, role: this.state.role};
        ApiService.addUser(user)
            .then(res => {
                this.setState({message : 'User added successfully.'});
                this.props.history.push('/users');
            });
    }

    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });

    render() {
        return(
            <div>
                <Typography variant="h4" style={style}>Add User</Typography>
                <form style={formContainer}>

                    <TextField type="text" placeholder="name" fullWidth margin="normal" name="name" value={this.state.name} onChange={this.onChange}/>

		    <TextField placeholder="email" fullWidth margin="normal" name="email" value={this.state.email} onChange={this.onChange}/>

                    <TextField type="password" placeholder="password" fullWidth margin="normal" name="password" value={this.state.password} onChange={this.onChange}/>

                    <TextField placeholder="role" fullWidth margin="normal" name="role" value={this.state.role} onChange={this.onChange}/>

                    <Button variant="contained" color="primary" onClick={this.saveUser}>Save</Button>
            	</form>
	    </div>
        );
    }

}

const formContainer = {
    display: 'flex',
    flexFlow: 'row wrap'
};

const style ={
    display: 'flex',
    justifyContent: 'center'
}

export default AddUser;
