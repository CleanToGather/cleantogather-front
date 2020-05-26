import React from 'react';
import EventModal from '../../common/modals/EventModal';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import CloseIcon from '@material-ui/icons/Close';
import DoneIcon from '@material-ui/icons/Done';
import { validate } from '../../../services/ValidateForm';
import ApiService from '../../../services/ApiService';

import '../home/Home.css'

class Profil extends React.Component {
    constructor (props) {
        super(props);
        this.state = {isEditable : false,
            isValid: false,
            message: false,
            user: {
                name: "",
                email: "",
                eventSubscribed: []
            },
            name: "",
            email: ""
        };

        this.setEditable = this.setEditable.bind(this);
        this.submitEdit = this.submitEdit.bind(this);
        this.cancelEdit = this.cancelEdit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        this.getUser();
    }

    getUser() {
        ApiService.fetchUserByName(localStorage.username)
            .then(res => {
                this.setState({user: res.data, name: res.data.name, email: res.data.email})
            });
    }

    setEditable() {
        this.setState({isEditable: true});
    }

    cancelEdit() {
        this.setState({isEditable: false,
            name: this.state.user.name,
            email: this.state.user.email,
            message: false
        });
    }

    submitEdit() {
        if (this.state.isValid) {
            let newUser = this.state.user;
            newUser.name = this.state.name;
            newUser.email = this.state.email;
            this.setState({user: newUser,
                isEditable: false});
        }
    }

    onChange(e) {
        this.setState({[e.target.name] : e.target.value});
        validate(e.target, this);
    }

    render() {
        let pseudo =(this.state.isEditable ?
            <TextField placeholder="Pseudo" name="name" onChange={this.onChange} value={this.state.name}/> :
            <Typography variant="h6" display="inline">{this.state.user.name}</Typography>);

        let email =(this.state.isEditable ?
            <TextField placeholder="Email" type="email" name="email" onChange={this.onChange} value={this.state.email}/> :
            <Typography variant="h6" display="inline">{this.state.user.email}</Typography>);

        let editIcon = (this.state.isEditable ?
            //Edit mode
            <>
            <IconButton aria-label="edit" onClick={this.submitEdit}>
                <DoneIcon />
            </IconButton>
            <IconButton aria-label="edit" onClick={this.cancelEdit}>
                <CloseIcon />
            </IconButton>
            </> :
            //Normal mode
            <IconButton aria-label="edit" onClick={this.setEditable}>
                <EditIcon />
            </IconButton>);

        return (
            <Grid container justify="space-evenly">
                <Grid item xs={12} md={5} className="bigDiv">
                    <Grid container direction="column" spacing={3}>
                        <Grid item>
                            <Grid container>
                            <Typography variant="h5" style={{flexGrow:1}}>Informations</Typography>
                            {editIcon}
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Typography variant="h6" display="inline" style={{flexGrow:1}}>Pseudo : &nbsp;</Typography>{pseudo}
                        </Grid>
                        <Grid item>
                            <Typography variant="h6" display="inline">Email : &nbsp;</Typography>{email}
                        </Grid>
                        <Grid item>
                            <Typography style={{color: "red"}} display="inline">{this.state.message}</Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={5} className="bigDiv">
                    <Grid container direction="column" alignItems="center" spacing={3}>
                        <Grid item>
                            <Typography variant="h5" style={{flexGrow:1}}>Vos événements</Typography>
                        </Grid>
                        {this.state.user.eventSubscribed.map(event => (
                            <Grid item key={event.id}>
                                <EventModal event={event}>
                                <Grid justify="flex-start">
                                    <Typography variant="h6" display="block">{event.title}</Typography><br/>
                                    <Typography display="block">Le {event.startDateTime}</Typography>
                                </Grid>
                                </EventModal>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

export default Profil;
