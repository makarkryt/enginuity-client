import { Button, Container, Stack, TextField, Typography } from '@mui/material';
import './login.css'
import { Link } from 'react-router-dom';
const Login  = ()=>{

    return(
    <div className="App">
        <header className="App-header header">

        </header>
        <main className = "App-main main">
            <Container  className='main-login login'>
                <div className='login-form'>
                    <form action=''>
                        <Stack spacing={4}>
                            <Stack spacing={2}>
                                <TextField type='text' label = 'Username'></TextField>
                                <TextField type='password' label = 'password'></TextField>
                            </Stack>
                            <Stack direction={"row"} spacing={12}>
                                <span>
                                    <input id='remember' type='checkbox'></input>
                                    <label for='remember'><Typography variant='body2'>Запомнить меня</Typography></label>
                                </span>
                                <Link to={'/lastPassword'}>Забыли пароль?</Link>
                            </Stack>
                            <Stack spacing={2}>
                                <Button variant='contained'><Typography variant = 'body1'>Login</Typography></Button>
                                <Button variant='outlined'>
                                    <img src={''}  width={24}></img>
                                    <Typography variant = 'body1'>Sign with Google</Typography>
                                </Button>
                            </Stack>
                        </Stack>
                    </form>
                </div>
            </Container>
        </main>
        <footer className='App-footer footer'>
            &copy; 2025 Enginuity. Все права защищены.
        </footer>
    </div>
    )
}
export default Login ;