import {Link, Stack, Typography} from "@mui/material";


const DefaultFooter = () => {
    return (
        <Stack
            direction="row"
            alignItems="center"
            divider={<span>·</span>}
            style={{margin: 25}}
            spacing={2}>

            <Typography variant="body2" component="div">
                LLDeck - Diploma project (Knowledge Deck)
            </Typography>

            <Typography variant="body2" component="div">
                © Azat Aldeshov
            </Typography>

            <Typography variant="body2" component="div">
                Source code:&nbsp;
                <Link target="_blank" href="https://github.com/Aldeshov/lldeck" underline="none">
                    GitHub
                </Link>
            </Typography>
        </Stack>
    )
}

export default DefaultFooter;