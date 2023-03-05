import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {AttachMoney} from "@mui/icons-material";

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

// export class Table extends React.Component {

// const EmployersListItem = ({id, cryName, raw, display, imageUrl}) => {
export function CryptoCard<id, cryName, raw, display, imageUrl>() {
    const [expanded, setExpanded] = React.useState(false);
    let imageUrlOk = "https://www.cryptocompare.com/";//+this.imageUrl;
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    // console.log('>>>',this.id, this.cryName, this.raw, this.display, this.imageUrl)
    return (
        <div>
        {/*<h5>{props}</h5>*/}
        {/*    <div>*/}
                {/*<h2>id = {id} </h2>*/}
                {/*<h2> 1 '{display}'({cryName}) = {raw} <AttachMoney fontSize="medium" color="#98FB98" />  </h2>*/}
                {/*<img src={imageUrlOk} alt={cryName} width={50} height={50}/>*/}
            {/*</div>*/}
        <Card sx={{ maxWidth: 345 }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        R
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title="Shrimp and Chorizo Paella"
                subheader="September 14, 2016"
            />
            <CardMedia
                component="img"
                height="194"
                image={imageUrlOk} //"/static/images/cards/paella.jpg"
                alt={this.id}
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    1 '{this.display}'({this.cryName}) = {this.raw} <AttachMoney fontSize="medium" />
                </Typography>
            </CardContent>

        </Card>
        </div>
    );
}