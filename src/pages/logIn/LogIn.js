import React, { useState } from "react";
import { LOGIN_ROUTE } from "../../constant/url";
import { useNavigate } from "react-router-dom";
import { apiPost } from "../../services/apiServices";
import MyStore from "../../context/context";
// MUI
import Button from '@mui/material/Button'
import { toast } from "react-toastify";
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme } from '@mui/material/styles';
import PropTypes from 'prop-types';
import CircularProgress from '@mui/material/CircularProgress';
import { useStateContext } from "../../context";



function Copyright(props) {
    return (
        <Typography className="py-28" variant="body2" color="text.secondary" align="center" {...props}>
            {'Design by © '}
            <Link href="#">
                Y&M Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );

}






function Login() {

    const { currentMode, setLogin } = useStateContext();
    const darkTheme = createTheme({
        palette: {
            mode: currentMode,
        },
    });


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [err, setErr] = useState("")
    function CircularProgressWithLabel(props) {
        return (
            <Box sx={{ position: 'relative', display: 'inline-flex' }} >
                <CircularProgress variant="determinate" {...props} />
                <Box
                    sx={{
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                        position: 'absolute',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <Typography variant="caption" component="div" color="text.secondary">
                        {`${Math.round(props.value)}%`}
                    </Typography>
                </Box>
            </Box>
        );
    }

    CircularProgressWithLabel.propTypes = {
        /**
         * The value of the progress indicator for the determinate variant.
         * Value between 0 and 100.
         * @default 0
         */
        value: PropTypes.number.isRequired,
    };

    function CircularStatic() {
        const [progress, setProgress] = React.useState(10);

        React.useEffect(() => {
            const timer = setInterval(() => {
                setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
            }, 800);
            return () => {
                clearInterval(timer);
            };
        }, []);

    }

    const nav = useNavigate()

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            let resp = await apiPost(LOGIN_ROUTE, { email, password })

            console.log(resp);

            if (resp.msg) {
                toast.error("מייל או סיסמה אינם נכונים, נסה/י שוב");
                 setErr(resp.msg)
            }
            else if (resp.token) {
                <Box sx={{ display: 'flex' }}>
                    <CircularProgress />

                </Box>
                localStorage.setItem('token', resp.token)
                //  updateUser(resp.user, resp.token)
                toast.success("נכנסת בהצלחה !");
                setLogin(2)
                nav("/")
            }
        }

        catch (err) {
             setErr("מייל או סיסמה אינם נכונים, נסה/י שוב");
             toast.error("מייל או סיסמה אינם נכונים, נסה/י שוב");
        }
    }

    return (
        <div className="h-screen">
            <Container maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: '#1976D2' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                       כניסה
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="כתובת מייל"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            type="email"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                        />

                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="סיסמה"
                            type="password"
                            id="password"
                            value={password}
                            autoComplete="current-password"
                            onChange={(event) => setPassword(event.target.value)}
                        />
                        {err && <small style={{ color: "red" }}>{err}</small>}
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            כניסה
                        </Button>

                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2" style={{ textDecoration: "none" }}>
                                    ?שכחת סיסמה
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="/" variant="body2" style={{ textDecoration: "none" }}>
                                    {"חזרה לדף הבית"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 8, mb: 4 }} />
            </Container>
        </div>
    );

}

export default Login;
