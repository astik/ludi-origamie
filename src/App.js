import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import AppBar from './AppBar';
import Main from './Main';
import Navigation from './Navigation';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
	},
}));

function App() {
	const classes = useStyles();
	const [mobileOpen, setMobileOpen] = React.useState(false);
	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};
	return (
		<div className={classes.root}>
			<CssBaseline />
			<AppBar handleDrawerToggle={handleDrawerToggle} />
			<Navigation handleDrawerToggle={handleDrawerToggle} mobileOpen={mobileOpen} />
			<Main />
		</div>
	);
}

export default App;
