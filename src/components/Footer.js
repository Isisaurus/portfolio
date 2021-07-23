import React from 'react';
import {
  Container,
  Typography,
  makeStyles,
  Button,
  Divider,
} from '@material-ui/core';
import CodeIcon from '@material-ui/icons/Code';
import { Link } from 'gatsby-theme-material-ui';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    minHeight: '10vh',
    marginTop: '2rem',
    padding: '1rem 0',
    [theme.breakpoints.down('xs')]: {
      alignItems: 'center',
    },
  },
}));

function Footer() {
  const classes = useStyles();
  return (
    <Container className={classes.container} component="footer">
      <Divider style={{ width: '40%', marginBottom: '2rem' }} />
      <Typography variant="body1" color="textSecondary">
        This site was designed and coded by Diána Vitányi.
      </Typography>
      <Link
        to="https://github.com/Isisaurus/portfolio"
        target="__blank"
        style={{ textDecoration: 'none' }}
      >
        <Button
          startIcon={<CodeIcon />}
          color="primary"
          variant="text"
          size="large"
        >
          code
        </Button>
      </Link>
    </Container>
  );
}

export default Footer;
