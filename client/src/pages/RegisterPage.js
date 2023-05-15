import { useState } from "react";
import { Container, TextField, Grid } from "@mui/material"

export default function RegisterPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    async function register() {

        const response = await fetch('http://localhost:4000/register', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.status === 200) {
            alert('registration successful');
        } else {
            alert('registration failed');
        }
    }
    return (
        <Container sx={{ backgroundColor: "white", color: "black", padding: "50px 0px" }}>
            <Grid container sx={{ display: "flex", flexDirection: "column" }}>
                <Grid item>
                    <h3 style={{ color: "black" }}>Register for a codeoguz account.</h3>
                </Grid>
                <Grid item>
                    <input type="text"
                        className="input"
                        placeholder="Username"
                        value={username}
                        onChange={ev => setUsername(ev.target.value)} />
                </Grid>
                <Grid item>
                    <input type="password"
                        className="input"
                        placeholder="Password"
                        value={password}
                        
                        onChange={ev => setPassword(ev.target.value)} />
                </Grid>
                <Grid item>
                    <button onClick={register}>Register</button>
                </Grid>



            </Grid>
        </Container>
    );
}