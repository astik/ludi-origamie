import { default as MuiAppBar } from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import React from 'react';
import { DRAWER_WIDTH } from './Navigation';

const useStyles = makeStyles((theme) => ({
	root: {
		[theme.breakpoints.up('sm')]: {
			width: `calc(100% - ${DRAWER_WIDTH}px)`,
			marginLeft: DRAWER_WIDTH,
		},
	},
	menuButton: {
		marginRight: theme.spacing(2),
		[theme.breakpoints.up('sm')]: {
			display: 'none',
		},
	},
	title: {
		flexGrow: 1,
	},
}));

function AppBar({ handleDrawerToggle }) {
	const classes = useStyles();
	return (
		<MuiAppBar position="fixed" className={classes.root}>
			<Toolbar variant="dense">
				<IconButton
					edge="start"
					className={classes.menuButton}
					color="inherit"
					aria-label="menu"
					onClick={handleDrawerToggle}
				>
					<MenuIcon />
				</IconButton>
				<Typography variant="h6" className={classes.title}>
					Ludi Origamie
				</Typography>
			</Toolbar>
		</MuiAppBar>
	);
}

export default AppBar;
