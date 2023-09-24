import { Box, Container, Grid } from "@mui/material";
import codeoguzIcon from "../assets/codeoguz-icon.svg";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../UserContext";

export default function Header() {
    const { setUserInfo, userInfo } = useContext(UserContext);
    const username = userInfo?.username;

    return <Box sx={{ height: '70px', display: "flex", backgroundColor: "#1D1D1F" }}>
        <Container sx={{ display: "flex", justifyContent: 'space-between', alignItems: 'center' }}>
            <a href="/"><img style={{ width: "160px" }} src={codeoguzIcon} /></a>
            <Grid sx={{ display: "flex", justifyContent: "right" }} container spacing={2}>
                <Grid item>
                    <a href="/about">About</a>
                </Grid>
                <Grid item>
                    {username && username}
                </Grid>
            </Grid>
        </Container>
    </Box>
}