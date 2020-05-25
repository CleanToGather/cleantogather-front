import React from 'react';
import AuthService from '../../../services/ApiService';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

class Login extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
            message: '',
        }
        this.login = this.login.bind(this);
    }

    componentDidMount() {
        localStorage.clear();
    }

    login = (e) => {
        e.preventDefault();
        const credentials = {username: this.state.username, password: this.state.password};
        AuthService.login(credentials).then(res => {
            if(res.data.status === 200){
                localStorage.setItem("userInfo", JSON.stringify(res.data.result));
                this.props.history.push('/users');
            }else {
                this.setState({message: res.data.message});
            }
        });
    };

    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });

    render() {
        return(
            <React.Fragment>
                <Container maxWidth="sm">
                    <Typography variant="h4" style={styles.center}>Login</Typography>
                    <form>
                        <Typography variant="h4" style={styles.notification}>{this.state.message}</Typography>
                        <TextField type="text" label="USERNAME" fullWidth margin="normal" name="username" value={this.state.username} onChange={this.onChange}/>

                        <TextField type="password" label="PASSWORD" fullWidth margin="normal" name="password" value={this.state.password} onChange={this.onChange}/>

                        <Button variant="contained" color="secondary" onClick={this.login}>Login</Button>
                    </form>
                </Container>
            </React.Fragment>
        )
    }

}

const styles= {
    center :{
        display: 'flex',
        justifyContent: 'center'

    },
    notification: {
        display: 'flex',
        justifyContent: 'center',
        color: '#dc3545'
    }
}

export default Login;
