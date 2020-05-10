import React, { Component } from 'react'
import ApiService from "../../../services/ApiService";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class EditUser extends Component {

    constructor(props){
        super(props);
        this.state ={
            id: '',
            email: '',
	    name: '',
	    role: ''
        }
        this.saveUser = this.saveUser.bind(this);
        this.loadUser = this.loadUser.bind(this);
    }

    componentDidMount() {
        this.loadUser();
    }

    loadUser() {
        ApiService.fetchUserById(window.localStorage.getItem("userId"))
            .then((res) => {
                let user = res.data;
                this.setState({
                id: user.id,
                email: user.email,
		name: user.name,
		role: user.role
                })
            });
    }

    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });

    saveUser = (e) => {
        e.preventDefault();
	let user = {id: this.state.id, email: this.state.email, name: this.state.name, role: this.state.role};
        ApiService.editUser(user)
            .then(res => {
                this.setState({message : 'User added successfully.'});
                this.props.history.push('/users');
            });
    }

    render() {
        return (
            <div>
                <Typography variant="h4" style={style}>Edit User</Typography>
                <form>

                        <TextField type="text" placeholder="name" fullWidth margin="normal" name="name" readOnly={true} value={this.state.name}/>

                        <TextField placeholder="Email" fullWidth margin="normal" name="email" value={this.state.email} onChange={this.onChange}/>

                        <TextField placeholder="Role" fullWidth margin="normal" name="role" value={this.state.role} onChange={this.onChange}/>

                        <Button variant="contained" color="primary" onClick={this.saveUser}>Save</Button>

                </form>
            </div>
        );
    }
}

const style ={
    display: 'flex',
    justifyContent: 'center'
}

export default EditUser;
