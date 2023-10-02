import { Box, Alert, Button, Collapse, CircularProgress, Container, Grid, TextField, IconButton, Skeleton } from "@mui/material";


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
import WarningIcon from '@mui/icons-material/Warning';
import Post from "../Post";
import Project from "../Project";
import { Link } from "react-router-dom";

const icons = [ReactIcon, FirebaseIcon, JScon, HTMLIcon, CSSIcon, PythonIcon, FlutterIcon]

export default function HomePage() {
    const [loading, setLoading] = useState(true)
    const [formAlert, setAlert] = useState(false);
    const [projectsData, setProjectsData] = useState()
    const [alertMessage, setAlertMessage] = useState("");
    const [posts, setPosts] = useState([]);
    const [projects, setProjects] = useState([]);

    const { height, width } = useWindowDimensions();
    let smallScreen = width < 900


    useEffect(() => {
        fetch('http://localhost:1337/api/posts/').then(response => {
            response.json().then(posts => {
                console.log(posts)
                setPosts(posts);
            });
        });

        fetch('https://codeoguz.onrender.com/projects').then(response => {
            response.json().then(projects => {
                console.log(projects)
                setProjects([...projects]);
            });
        })
    }, [])

    async function submitForm(event) {
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        if (!data.get('fullName')) {
            setAlertMessage("Enter your full name.")
            setAlert(true)

        } else if (!validator.isEmail(data.get('email'))) {
            setAlertMessage("Enter a suitable email address.")
            setAlert(true)

        } else {
            const response = await fetch('https://codeoguz.onrender.com/formsubmit', {
                method: 'POST',
                body: JSON.stringify({ fullName: data.get('fullName'), emailAddress: data.get('email') }),
                headers: { 'Content-Type': 'application/json' },
            });
        }

    }


    return <Container sx={{ marginTop: "20px" }}>


        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={smallScreen ? 12 : 6}>
                <p style={{ fontSize: "72px", fontWeight: "bold", margin: "0px" }}>Code and design <br /> useful tools...</p>
                <p style={{ fontSize: "24px", fontWeight: "bold", }}>Subscribe to my email list:</p>

                <Collapse in={formAlert}>
                    <Box sx={{ backgroundColor: "white", borderRadius: "10px", display: "flex", justifyContent: "space-between", padding: "0 20px" }}>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <WarningIcon style={{ fill: "black", marginRight: "10px" }} />
                            <p style={{ color: "black" }}>{alertMessage}</p>
                        </div>

                        <IconButton
                            aria-label="close"
                            size="small"

                            onClick={() => {
                                setAlert(false);
                            }}
                        >
                            <CloseIcon style={{ fill: "black" }} />
                        </IconButton>
                    </Box>
                </Collapse>
                {/* TODO Make email list form functional */}
                <Box component="form" onSubmit={submitForm} noValidate sx={{ mt: 1 }}>
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
        {
            <Grid container spacing={2}>
                {!projects ? <>
                    <Grid item xs={smallScreen ? 12 : 6}>
                        <Skeleton
                            sx={{ bgcolor: 'grey.900' }}
                            variant="rectangular"
                            height={500}
                        />
                    </Grid>
                    <Grid item xs={smallScreen ? 12 : 6}>
                        <Skeleton
                            sx={{ bgcolor: 'grey.900' }}
                            variant="rectangular"
                            height={500}
                        />
                    </Grid></>
                    : <Grid container>
                        {
                            projects.map(project => {
                                console.log(project)
                                return <Grid key={project._id} item xs={smallScreen ? 12 : 6} sx={{ padding: "10px 10px" }}><Project {...project} smallScreen /></Grid>
                            })
                        }
                    </Grid>
                    /* Object.values(projectsData).map(project => {
                        console.log(project)
                        return <Grid key={project.id} item xs={smallScreen ? 12 : 6}>
                            <a href={`projects/${project.id}`}>
                                <Box sx={{ backgroundColor: "#141414", height: "500px", borderRadius: "5px", display: "flex", justifyContent: "center", alignItems: "center", fontSize: "48px", fontWeight: "bold", flexDirection: "column" }}>
                                    {project.name}
                                    <img src={project.featuredImage} style={{ height: "300px", marginTop: "20px" }} />
                                </Box>
                            </a>
                        </Grid>
                    }) */
                }
            </Grid>
        }

        <h2 style={{ textAlign: "center" }}>Blog</h2>
        {
            <Grid container spacing={2}>
                {!posts ? <>
                    <Grid item xs={smallScreen ? 12 : 6}>
                        <Skeleton
                            sx={{ bgcolor: 'grey.900' }}
                            variant="rectangular"
                            height={500}
                        />
                    </Grid>
                    <Grid item xs={smallScreen ? 12 : 6}>
                        <Skeleton
                            sx={{ bgcolor: 'grey.900' }}
                            variant="rectangular"
                            height={500}
                        />
                    </Grid></>
                    :
                    <Grid container>
                        {
                            posts?.data?.map(post => {
                                return <Grid key={post._id} item xs={smallScreen ? 12 : 6} sx={{ padding: "10px 10px" }}><Post {...post} smallScreen /></Grid>
                            })
                        }
                    </Grid>
                }
            </Grid>
        }


        <h2 style={{ textAlign: "center" }}>Related Technologies</h2>
        <div style={{ margin: 'auto', textAlign: "center" }}>
            {icons.map(icon => {
                return <img key={icon} style={{ width: "50px", margin: "0 10px" }} src={icon} />
            })}

        </div>

    </Container >
}