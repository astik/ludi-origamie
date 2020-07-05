import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import { default as MuiLink } from '@material-ui/core/Link';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import FacebookIcon from '@material-ui/icons/Facebook';
import HelpIcon from '@material-ui/icons/Help';
import React from 'react';
import FOLD_TYPES from '../FoldTypes';
import logo from './logo-small.png';
import { Link as ReactRouterLink } from 'react-router-dom';

export const DRAWER_WIDTH = 260;

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
	},
	drawer: {
		[theme.breakpoints.up('sm')]: {
			width: DRAWER_WIDTH,
			flexShrink: 0,
		},
	},
	menuButton: {
		marginRight: theme.spacing(2),
		[theme.breakpoints.up('sm')]: {
			display: 'none',
		},
	},
	// necessary for content to be below app bar
	toolbar: {
		...theme.mixins.toolbar,
		display: 'flex',
	},
	drawerPaper: {
		width: DRAWER_WIDTH,
	},
	linkList: {
		minHeight: '100vh',
	},
	logoLink: {
		margin: 'auto',
	},
	logo: {
		maxHeight: '50px',
	},
}));

function Navigation({ handleDrawerToggle, mobileOpen }) {
	const classes = useStyles();
	const drawer = (
		<Grid
			container
			alignItems="stretch"
			direction="column"
			justify="flex-start"
			wrap="nowrap"
			className={classes.linkList}
		>
			<Grid item>
				<div className={classes.toolbar}>
					<ReactRouterLink
						to="/"
						className={classes.logoLink}
						onClick={handleDrawerToggle}
					>
						<img src={logo} alt="Logo Ludi Origami" className={classes.logo} />
					</ReactRouterLink>
				</div>
			</Grid>
			<Grid item>
				<List>
					<ListItem
						button
						component={ReactRouterLink}
						to="/presentation"
						onClick={handleDrawerToggle}
					>
						<ListItemIcon>
							<HelpIcon />
						</ListItemIcon>
						<ListItemText primary="Présentation" />
					</ListItem>
				</List>
			</Grid>
			<Grid item xs>
				<Divider />
				<List>
					{FOLD_TYPES.map((foldType) => (
						<ListItem
							button
							key={foldType.id}
							component={ReactRouterLink}
							to={foldType.mainPagePath}
							onClick={handleDrawerToggle}
						>
							<ListItemIcon>{foldType.icon}</ListItemIcon>
							<ListItemText primary={foldType.name} />
						</ListItem>
					))}
				</List>
			</Grid>
			<Grid item>
				<Divider />
				<List>
					<ListItem
						button
						component={MuiLink}
						href="https://www.facebook.com/groups/406940570021633"
					>
						<ListItemIcon>
							<FacebookIcon />
						</ListItemIcon>
						<ListItemText primary="Communauté" />
					</ListItem>
				</List>
			</Grid>
		</Grid>
	);
	return (
		<nav className={classes.drawer} aria-label="mailbox folders">
			{/* The implementation can be swapped with js to avoid SEO duplication of links. */}
			<Hidden smUp implementation="css">
				<Drawer
					open={mobileOpen}
					onClose={handleDrawerToggle}
					classes={{
						paper: classes.drawerPaper,
					}}
					ModalProps={{
						keepMounted: true, // Better open performance on mobile.
					}}
				>
					{drawer}
				</Drawer>
			</Hidden>
			<Hidden xsDown implementation="css">
				<Drawer
					classes={{
						paper: classes.drawerPaper,
					}}
					variant="permanent"
					open
				>
					{drawer}
				</Drawer>
			</Hidden>
		</nav>
	);
}

export default Navigation;
