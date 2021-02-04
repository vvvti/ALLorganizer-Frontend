import React from 'react'
import {
    StyledContainer,
    StyledCbcContainer,
    StyledCrpContainer,
    StyledAstContainer,
    StyledUrineContainer,
} from './DashboardGrid.styled';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import cbc from '../../assets/images/cbc.jpg';
import biochemy from '../../assets/images/biochemy.jpg';
import urine from '../../assets/images/urine.jpg';
import crp from '../../assets/images/crp.jpg';

const useStyles = makeStyles({
    root: {
      minWidth: 700,
    },
    media: {
      height: 160,
    },
  });

export const DashboardGrid: React.FC = () => {
    const classes = useStyles();
    return (
        <StyledContainer>
            
            <StyledCbcContainer>
            <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={cbc}
          title="Cbc"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Badania morfologii krwi
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Statystyki i wykresy badań, dodawanie, usuwanie i edycja
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          szczegóły
        </Button>
      </CardActions>
    </Card>
            </StyledCbcContainer>            
            <StyledAstContainer>
            <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={biochemy}
          title="biochemy"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Badania biochemii krwi
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Statystyki i wykresy badań, dodawanie, usuwanie i edycja
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          szczegóły
        </Button>
      </CardActions>
    </Card>
            </StyledAstContainer>
            <StyledCrpContainer>
            <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={crp}
          title="crp analyses"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Badania białka C-reaktywnego krwi
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Statystyki i wykresy badań, dodawanie, usuwanie i edycja
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          szczegóły
        </Button>
      </CardActions>
    </Card>
            </StyledCrpContainer>
            <StyledUrineContainer>
            <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={urine}
          title="urine analyses"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Badania moczu
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Statystyki i wykresy badań, dodawanie, usuwanie i edycja
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          szczegóły
        </Button>
      </CardActions>
    </Card>
            </StyledUrineContainer>
        </StyledContainer>
    )
}

