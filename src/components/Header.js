import { Box, Container } from "@mui/material";
import codeoguzIcon from "../assets/codeoguz-icon.svg";
import { NavLink } from "react-router-dom";

export default function Header() {
    return <Box sx={{height: '70px', display: "flex", backgroundColor: "#1D1D1F"}}>
        <Container sx={{display: "flex", justifyContent: 'space-between', alignItems:'center'}}>
        <a href="/"><img style={{width: "160px"}} src={codeoguzIcon}/></a>
        <a href="about">About</a>
        </Container>
    </Box>
}