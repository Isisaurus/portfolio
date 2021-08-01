import React from 'react';
import Layout from './../components/Layout';
import {
  Container,
  Typography,
  makeStyles,
  List,
  ListItem,
  Button,
  Divider,
} from '@material-ui/core';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import EmailIcon from '@material-ui/icons/Email';
import { Link } from 'gatsby-theme-material-ui';

const useStyles = makeStyles(theme => ({
  container: {
    margin: '4rem 0',
    minHeight: '60vh',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',

    [theme.breakpoints.down('sm')]: {
      margin: '2rem 0',
    },
  },
  paragraph: {
    [theme.breakpoints.up('md')]: {
      fontSize: '1.2rem',
      maxWidth: '60%',
    },
  },
  list: {
    [theme.breakpoints.up('md')]: {
      fontSize: '1.2rem',
    },
  },
  link: {
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'none',
    },
  },
  btn: {
    '&:hover': {
      color: [theme.palette.primary.main],
    },
  },
}));

const About = () => {
  const classes = useStyles();
  return (
    <Layout>
      <Container>
        <Container className={classes.container}>
          <Typography paragraph variant="body1" className={classes.paragraph}>
            Hello!
            <br />
            <br />
            My name is Diana. I’m a Web Developer with a background in product
            design and a passion about all things JavaScript. I work hard, I
            care about writing clean code and I genuinely love to learn.
          </Typography>
          <Typography paragraph variant="body1" className={classes.paragraph}>
            I work with:
          </Typography>
          <List className={classes.list}>
            <ListItem>Figma</ListItem>
            <ListItem>HTML5/CSS3</ListItem>
            <ListItem>SASS</ListItem>
            <ListItem>JavaScript</ListItem>
            <ListItem>React.js</ListItem>
            <ListItem>Node.js</ListItem>
          </List>
          <div>
            <Divider style={{ margin: '2rem 0' }} />
            <Link
              to="https://drive.google.com/file/d/1FwVPdE0hJa12X0_raExiTkwdpeaPIyXy/view?usp=sharing"
              target="__blank"
              className={classes.link}
            >
              <Button
                className={classes.btn}
                size="large"
                startIcon={<PictureAsPdfIcon />}
              >
                CV
              </Button>
            </Link>
            <Link
              to="mailto:dianavitanyi@gmail.com"
              target="__blank"
              className={classes.link}
            >
              <Button className={classes.btn} startIcon={<EmailIcon />}>
                dianavitanyi@gmail.com
              </Button>
            </Link>
          </div>
        </Container>
      </Container>
    </Layout>
  );
};

export default About;
