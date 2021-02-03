import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {StyledContainer} from './HomeCards.styled';
import account from '../../assets/images/account.jpg';
import newsletter from '../../assets/images/newsletter.jpg';
import cooperators from '../../assets/images/cooperators.jpg';

const useStyles = makeStyles({
  root: {
    maxWidth: 450,
  },
  media: {
    height: 250,
  },
});

export const HomeCards = () => {
  const classes = useStyles();

  return (
    <StyledContainer>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={account}
          title="Account"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Utwórz nowe konto
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Zarejestruj nowe konto w aplikacji ALL organizer aby móc w pełni korzystać z systemu
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Logowanie
        </Button>
        <Button size="small" color="primary">
          Rejestracja
        </Button>
      </CardActions>
    </Card>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={newsletter}
          title="Newsletter"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Zapisz się do Newslettera
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Tutaj możesz zapisać się do Newslettera i otrzymywać najnowsze informacje dotyczące naszej aplikacji
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Udostępnij
        </Button>
        <Button size="small" color="primary">
          Więcej
        </Button>
      </CardActions>
    </Card>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={cooperators}
          title="cooperators"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Partnerzy naszej aplikacji
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Tutaj możesz uzyskać informacje na temat partnerów naszej aplikacji
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Udostępnij
        </Button>
        <Button size="small" color="primary">
          Więcej
        </Button>
      </CardActions>
    </Card>
    </StyledContainer>
  );
}
