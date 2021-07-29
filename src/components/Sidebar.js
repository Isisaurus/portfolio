import React from 'react';
import {
  List,
  IconButton,
  makeStyles,
  Divider,
  Typography,
  Hidden,
} from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Link } from 'gatsby-theme-material-ui';

const useStyles = makeStyles(theme => ({
  sidebar: {
    padding: '0px .5rem',
    position: 'relative',
    [theme.breakpoints.down('xs')]: {
      marginRight: '0',
      padding: '0',
    },
  },
  iconbtn: {
    '&:hover': {
      color: [theme.palette.primary.main],
    },
  },
  divider: {
    position: 'absolute',
    top: '0',
    bottom: '0',
    right: '0',
  },
  cv: {
    width: '20px',
    height: '20px',
    textAlign: 'center',
    letterSpacing: '.08em',
  },
  link: {
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'none',
    },
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    [theme.breakpoints.down('xs')]: {
      flexDirection: 'row',
      justifyContent: 'center',
      padding: '0',
    },
  },
}));

function Sidebar() {
  const classes = useStyles();
  return (
    <section className={classes.sidebar}>
      <List className={classes.list}>
        <Link
          to="https://github.com/Isisaurus"
          target="__blank"
          className={classes.link}
        >
          <IconButton aria-label="GitHub" className={classes.iconbtn}>
            <GitHubIcon />
          </IconButton>
        </Link>
        <Link
          to="https://www.linkedin.com/in/diana-vitanyi-49211a15a/"
          target="__blank"
          className={classes.link}
        >
          <IconButton className={classes.iconbtn}>
            <LinkedInIcon />
          </IconButton>
        </Link>
        <Link
          to="https://drive.google.com/file/d/1FwVPdE0hJa12X0_raExiTkwdpeaPIyXy/view?usp=sharing"
          target="__blank"
          className={classes.link}
        >
          <IconButton className={classes.iconbtn}>
            <Typography variant="button" className={classes.cv}>
              CV
            </Typography>
          </IconButton>
        </Link>
      </List>
      <Hidden xsDown>
        <Divider orientation="vertical" className={classes.divider} />
      </Hidden>
      <Hidden smUp>
        <Divider orientation="horizontal" />
      </Hidden>
    </section>
  );
}

export default Sidebar;
