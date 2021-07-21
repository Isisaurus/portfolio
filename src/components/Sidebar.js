import React from 'react';
import {
  List,
  IconButton,
  makeStyles,
  Divider,
  SvgIcon,
  Typography,
  Hidden,
} from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import { Link } from 'gatsby-theme-material-ui';

const useStyles = makeStyles(theme => ({
  sidebar: {
    marginRight: '1rem',
    padding: '10px .5rem 0',
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
            <SvgIcon>
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 22 22"
              >
                <title>linkedin-with-circle</title>
                <path d="M10 0.4c-5.302 0-9.6 4.298-9.6 9.6s4.298 9.6 9.6 9.6 9.6-4.298 9.6-9.6-4.298-9.6-9.6-9.6zM7.65 13.979h-1.944v-6.256h1.944v6.256zM6.666 6.955c-0.614 0-1.011-0.435-1.011-0.973 0-0.549 0.409-0.971 1.036-0.971s1.011 0.422 1.023 0.971c0 0.538-0.396 0.973-1.048 0.973zM14.75 13.979h-1.944v-3.467c0-0.807-0.282-1.355-0.985-1.355-0.537 0-0.856 0.371-0.997 0.728-0.052 0.127-0.065 0.307-0.065 0.486v3.607h-1.945v-4.26c0-0.781-0.025-1.434-0.051-1.996h1.689l0.089 0.869h0.039c0.256-0.408 0.883-1.010 1.932-1.010 1.279 0 2.238 0.857 2.238 2.699v3.699z"></path>
              </svg>
            </SvgIcon>
          </IconButton>
        </Link>
        <Link to="#" target="__blank" className={classes.link}>
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
