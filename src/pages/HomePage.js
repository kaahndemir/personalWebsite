import { Box, Alert, Button, Collapse, CircularProgress, Container, Grid, TextField, IconButton } from "@mui/material";
import robotMoscot from "../assets/robot-mascot.svg";
import ReactIcon from "../assets/React-icon.svg";
import FirebaseIcon from "../assets/firebase.svg";
import JScon from "../assets/js-icon.svg";
import HTMLIcon from "../assets/html-icon.svg";
import CSSIcon from "../assets/css-icon.svg";
import PythonIcon from "../assets/Python-icon.svg";
import FlutterIcon from "../assets/flutter-icon.svg";
import useWindowDimensions from "../components/useWindowDimensions";
import { useEffect, useState } from "react";
import { collection, getDocs } from "@firebase/firestore";
import { db } from "..";
import validator from 'validator';
import CloseIcon from '@mui/icons-material/Close';


const icons = [ReactIcon, FirebaseIcon, JScon, HTMLIcon, CSSIcon, PythonIcon, FlutterIcon]

export default function HomePage() {
    const [loading, setLoading] = useState(true)
    const [alert, setAlert] = useState(true);
    const [projectsData, setProjectsData] = useState()
    const [alertMessage, setAlertMessage] = useState("");

    const { height, width } = useWindowDimensions();
    let smallScreen = width < 900

    useEffect(() => {
        getDocs(collection(db, 'projects')).then((projectDoc => {
            let newProjectsData = {}

            projectDoc.docs.map((projectDoc => {
                newProjectsData[projectDoc.data().id] = projectDoc.data()
            }))

            console.log(newProjectsData)

            setProjectsData(newProjectsData)
            setLoading(false)
        }))
    }, [])

    function handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        if (!data.get('fullName')) {
            setAlertMessage("Enter your full name.")
            setAlert(true)

        } else if (!validator.isEmail(data.get('email'))) {
            setAlertMessage("Enter a suitable email address.")
            setAlert(true)

        } else {

        }

    }


    return loading ? <CircularProgress /> : <Container sx={{ marginTop: "20px" }}>


        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={smallScreen ? 12 : 6}>
                <p style={{ fontSize: "72px", fontWeight: "bold", margin: "0px" }}>Code and design <br /> useful tools...</p>
               {/*  <Collapse in={alert}>
                    <Alert
                        severity="error"
                        action={
                            <IconButton
                                aria-label="close"
                                color="access"
                                size="small"
                                onClick={() => {
                                    setAlert(false);
                                }}
                            >
                                <CloseIcon fontSize="inherit" />
                            </IconButton>
                        }
                        sx={{
                            mb: 2, borderRadius: "10px",
                            backgroundColor: "white",
                            opacity: "90%",
                            color: "black",
                        }}
                    >
                        {alertMessage}
                    </Alert>
                </Collapse> */}
                <p style={{ fontSize: "24px", fontWeight: "bold", }}>Subscribe to my email list:</p>

                {/* TODO Make email list form functional */}
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                    <TextField
                        margin="dense"
                        autoComplete="given-name"
                        name="fullName"
                        required
                        fullWidth
                        id="fullName"
                        label="Full Name"
                    />
                    <TextField
                        margin="dense"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                    />
                    <Button type="submit">
                        Submit
                    </Button>
                </Box>
            </Grid>
            {!smallScreen && <Grid item xs={6} sx={{ textAlign: "right" }}>
                <img style={{ width: "80%" }} src={robotMoscot} />

            </Grid>}
        </Grid>
        {/* TODO Create project pages */}
        <h2 style={{ textAlign: "center" }}>Projects</h2>
        <Grid container spacing={2}>
            {
                Object.values(projectsData).map(project => {
                    console.log(project)
                    return <Grid item xs={smallScreen ? 12 : 6}>
                        <a href={`projects/${project.id}`}>
                            <Box sx={{ backgroundColor: "#141414", height: "500px", borderRadius: "5px", display: "flex", justifyContent: "center", alignItems: "center", fontSize: "48px", fontWeight: "bold", flexDirection: "column" }}>
                                {project.name}
                                <img src={project.featuredImage} style={{ height: "300px", marginTop: "20px" }} />
                            </Box>
                        </a>
                    </Grid>
                })
            }
        </Grid>
        <h2 style={{ textAlign: "center" }}>Related Technologies</h2>
        <div style={{ margin: 'auto', textAlign: "center" }}>
            {icons.map(icon => {
                return <img style={{ width: "50px", margin: "0 10px" }} src={icon} />
            })}

        </div>

    </Container >
}