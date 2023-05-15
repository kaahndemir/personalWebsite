import {useContext, useState} from "react";
import {Navigate} from "react-router-dom";
import { Container, TextField, Grid } from "@mui/material"
import {UserContext} from "../UserContext";

export default function LoginPage() {
  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');
  const [redirect,setRedirect] = useState(false);
  const {setUserInfo} = useContext(UserContext);
  async function login(ev) {
    ev.preventDefault();
    const response = await fetch('http://localhost:4000/login', {
      method: 'POST',
      body: JSON.stringify({username, password}),
      headers: {'Content-Type':'application/json'},
      credentials: 'include',
    });
    if (response.ok) {
      response.json().then(userInfo => {
        setUserInfo(userInfo);
        setRedirect(true);
      });
    } else {
      alert('wrong credentials');
    }
  }

  if (redirect) {
    return <Navigate to={'/'} />
  }
  return (
    <Container sx={{ backgroundColor: "white", color: "black", padding: "50px 0px" }}>
    <Grid container sx={{ display: "flex", flexDirection: "column" }}>
        <Grid item>
            <h3 style={{ color: "black" }}>Login to your codeoguz account.</h3>
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
            <button onClick={login}>Register</button>
        </Grid>



    </Grid>
</Container>
  );
}