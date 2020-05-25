import React, {useState} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import MenuIcon from '@material-ui/icons/Menu';
import {Link} from 'react-router-dom'

import useMediaQuery from '@material-ui/core/useMediaQuery';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid'

const style = {
    flexGrow: 1
}
const NavBar = () => {
    const [logged, setLog] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
    setAnchorEl(null);
    };

    const navbarButtons =
    <>
        <Button href="/calendar" color="inherit">Evénements</Button>
        <Button href="/markers/add" color="inherit">Signaler</Button>
        {logged && <><Button href="/profil" color="inherit">Profil</Button>
        <Button href="/events" color="inherit">Gestion événements</Button>
        <Button href="/markers" color="inherit">Gestion signalements</Button>
        <Button href="/users" color="inherit">Gestion administrateurs</Button></>}

        {logged ?
            <Button color="inherit" onClick={() => setLog(false)}>Se déconnecter</Button> :
            <Button color="inherit" onClick={() => setLog(true)}>Se connecter</Button>}
    </>;

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

                    {useMediaQuery('(max-width:1000px)') ?
                    <>
                        <IconButton color="inherit" aria-label="Menu" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                            <MenuIcon />
                        </IconButton>
                        <Menu
                          id="simple-menu"
                          anchorEl={anchorEl}
                          keepMounted
                          open={Boolean(anchorEl)}
                          onClose={handleClose}
                        >
                            <Grid container direction="column">
                                {navbarButtons}
                            </Grid>
                        </Menu>
                    </>:
                    <>
                        {navbarButtons}
                    </>}
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default NavBar;
