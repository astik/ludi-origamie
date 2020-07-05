import CssBaseline from '@material-ui/core/CssBaseline';
import {
	makeStyles,
	ThemeProvider,
	unstable_createMuiStrictModeTheme,
} from '@material-ui/core/styles';
import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import AppBar from './app-shell/AppBar';
import Navigation from './app-shell/Navigation';
import FOLD_TYPES from './FoldTypes';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

const theme = unstable_createMuiStrictModeTheme();

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing(3),
	},
	// necessary for content to be below app bar
	toolbar: theme.mixins.toolbar,
}));

function App() {
	const classes = useStyles();
	const [mobileOpen, setMobileOpen] = React.useState(false);
	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};
	return (
		<ThemeProvider theme={theme}>
			<Router>
				<div className={classes.root}>
					<CssBaseline />
					<AppBar handleDrawerToggle={handleDrawerToggle} />
					<Navigation handleDrawerToggle={handleDrawerToggle} mobileOpen={mobileOpen} />
					<div className={classes.content}>
						<div className={classes.toolbar} />
						<Switch>
							<Route path="/presentation">
								<Home />
							</Route>
							<Route path="/" exact>
								<Redirect to="/presentation" />
							</Route>
							{FOLD_TYPES.map((foldType) => (
								<Route path={foldType.mainPagePath} key={foldType.id}>
									<foldType.mainPageComponent />
								</Route>
							))}
							<Route path="*">
								<NotFound />
							</Route>
						</Switch>
					</div>
				</div>
			</Router>
		</ThemeProvider>
	);
}

export default App;
