import React from 'react';
import { makeStyles, Typography, Box, Container } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  introHeader: {
    [theme.breakpoints.down('xs')]: {
      marginTop: '1em',
      fontSize: '1.5rem',
    },
  },
  introParagraph: {
    margin: '4rem 0 2rem',
    fontSize: '1.5rem',
    lineHeight: 1.5,

    '& > span': {
      color: [theme.palette.text.primary],
    },

    [theme.breakpoints.down('xs')]: {
      margin: '2em 0',
      fontSize: '1rem',
    },
  },
  introList: {
    padding: '0',
    listStyle: 'none',
    lineHeight: '2',
    fontSize: '1.5rem',
    [theme.breakpoints.down('xs')]: {
      fontSize: '1rem',
    },
  },
  introSection: {
    height: '65vh',
    minHeight: '30rem',
    maxHeight: '45rem',
    display: 'flex',
    alignItems: 'center',
    marginBottom: '4rem',
    [theme.breakpoints.down('xs')]: {
      minHeight: '50vh',
      height: 'auto',
      marginBottom: '10vh',
    },
  },
}));

function Introduction() {
  const classes = useStyles();

  return (
    <Box component="section" className={classes.introSection}>
      <Container>
        <Typography variant="h4" component="h1" className={classes.introHeader}>
          Diana vitanyi
        </Typography>
        <Typography
          variant="body1"
          color="textSecondary"
          className={classes.introParagraph}
        >
          Hello, my name is Diána Vitányi. <br />I am a{' '}
          <span>Web Developer & Designer</span>.
        </Typography>
        <div>
          <Typography
            variant="body1"
            color="textSecondary"
            component="ul"
            className={classes.introList}
          >
            <li>UI/UX</li>
            <li>Product Design</li>
            <li>Web Design</li>
            <li>Front-end</li>
          </Typography>
        </div>
      </Container>
    </Box>
  );
}

export default Introduction;
