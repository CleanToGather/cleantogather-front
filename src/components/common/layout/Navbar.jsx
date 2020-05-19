import React, {useState} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import {Link} from 'react-router-dom'

const style = {
    flexGrow: 1
}
const NavBar = () => {
    const [logged, setLog] = useState(false);

    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <IconButton href="/" edge="start" color="inherit" aria-label="Menu">
                        <HomeIcon />
                    </IconButton>
                    <Typography variant="h6" style={style}>
                        Clean2Gather
                    </Typography>
                    <Button color="inherit">Evénements</Button>
                    <Button color="inherit">Signaler</Button>
                    {logged && <Button href="/profil" color="inherit">Profil</Button>}
                    
                    {logged ?
                        <Button color="inherit" onClick={() => setLog(false)}>Se déconnecter</Button> :
                        <Button color="inherit" onClick={() => setLog(true)}>Se connecter</Button>}
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default NavBar;
