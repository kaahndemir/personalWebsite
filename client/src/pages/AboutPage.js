import { Box, Container, Grid } from "@mui/material";
import codeoguzPhoto from "../assets/codeoguz-photo.jpg"
import useWindowDimensions from "../components/useWindowDimensions";
import ReactIcon from "../assets/React-icon.svg";
import FirebaseIcon from "../assets/firebase.svg";
import JScon from "../assets/js-icon.svg";
import HTMLIcon from "../assets/html-icon.svg";
import CSSIcon from "../assets/css-icon.svg";
import PythonIcon from "../assets/Python-icon.svg";
import FlutterIcon from "../assets/flutter-icon.svg";

export default function AboutPage() {
    const { height, width } = useWindowDimensions();
    let smallScreen = width < 900

    const icons = [ReactIcon, FirebaseIcon, JScon, HTMLIcon, CSSIcon, PythonIcon, FlutterIcon]

    return <Container sx={{marginTop: "10px"}}>
        <Grid container spacing={3}>
            <Grid item xs={smallScreen ? 12 : 6}>
                <img src={codeoguzPhoto} style={{ borderRadius: "50%", width: "100%" }} />
            </Grid>
            <Grid item xs={smallScreen ? 12 : 6} sx={{margin: 'auto', textAlign: "center"}}>
                {icons.map(icon => {
                    return <img style={{ width: "70px", margin: "0 10px" }} src={icon} />
                })}
            </Grid>

        </Grid>
        <h2>Oğuz Kaan Demir</h2>

        <p style={{fontSize: "24px"}}>codeoguz (Oğuz) is a young developer located in Turkey, Bursa. He has passions and life goals wrapped around computer and programming.</p>
        <p style={{fontSize: "24px"}}>He can help you develop your web projects with React, and code mobile applications using Flutter.</p>
    </Container>
}