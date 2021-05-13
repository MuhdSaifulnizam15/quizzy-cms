import React, { useState } from 'react';
import { useTranslation } from "react-i18next";
import PropTypes from 'prop-types';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Copyright from '../../components/Copyright';
import { useHistory } from 'react-router-dom';

async function loginUser(credentials) {
    return fetch('http://localhost:3001/v1/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
        .then(data => data.json())
}

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function Login({ setToken }) {
    const classes = useStyles();
    const { t } = useTranslation();
    const history = useHistory();
    
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    
    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
            email,
            password
        });

        if(token.tokens){
            setToken(token.tokens);
            history.push('/');
        }
    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        {t("login")}
                    </Typography>
                    <form className={classes.form} noValidate onSubmit={handleSubmit}>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label={t("email")}
                            name="email"
                            autoComplete="email"
                            autoFocus
                            onChange={e => setEmail(e.target.value)}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label={t("password")}
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            onChange={e => setPassword(e.target.value)}
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label={t("rememberMe")}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            {t("login")}
                        </Button>
                        <Grid container>
                        <Grid item xs>
                            <Link href="/forgot-password" variant="body2">
                            {t('forgotPassword')}?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href="/register" variant="body2">
                            {t("signUpDesc")}
                            </Link>
                        </Grid>
                        </Grid>
                    </form>
                </div>
            <Box mt={8}>
                <Copyright />
            </Box>
        </Container>
    )
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}