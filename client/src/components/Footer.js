import { Box, Container } from "@mui/material";
import GithubIcon from "../assets/github-icon.svg";
import DiscordIcon from "../assets/discord-icon.svg";
import MailIcon from "../assets/mail-icon.svg";



const contactChannels = [
    {
        icon: GithubIcon,
        content: <a href="https://github.com/codeoguz">Github</a>
    },
    {
        icon: DiscordIcon,
        content: "codeoguz#8321"
    },
    {
        icon: MailIcon,
        content: <a href="mailto:oguzkaandemirr@gmail.com">
            oguzkaandemirr@gmail.com
        </a>
    }
]

export default function Footer() {
    return <Box sx={{ display: "flex", backgroundColor: "#1D1D1F", marginTop: "50px",}}>
        <Container sx={{ height: '100%', display: "flex",  padding: "40px 0", flexDirection: "column" }}>

            <h4>Contact:</h4>
            {
                contactChannels.map(channel => {
                    return <Box key={channel.icon} display={"flex"} sx={{ alignItems: "center" }}>
                        <img style={{ width: "25px", margin: "5px 10px 5px 0" }} src={channel.icon} />
                        {channel.content}
                    </Box>
                })
            }

        </Container>
    </Box>
} 