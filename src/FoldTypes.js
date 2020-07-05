import NoteIcon from '@material-ui/icons/Note';
import React from 'react';
import { Link } from 'react-router-dom';
import BaggiPage from './pages/Baggi';
import CupPage from './pages/Cup';
import LidFourSheetsPage from './pages/LidFourSheets';
import MasuPage from './pages/Masu';
import ModaMasuPage from './pages/ModaMasu';

const FOLD_TYPES = [
	{
		id: 'baggi',
		name: 'Baggi',
		icon: <NoteIcon />,
		mainPageComponent: BaggiPage,
	},
	{
		id: 'masu',
		name: 'Masu',
		icon: <NoteIcon />,
		mainPageComponent: MasuPage,
	},
	{
		id: 'masu-moda',
		name: 'Moda Masu',
		icon: <NoteIcon />,
		mainPageComponent: ModaMasuPage,
	},
	{
		id: 'gobelet',
		name: 'Gobelet',
		icon: <NoteIcon />,
		mainPageComponent: CupPage,
	},
	{
		id: 'couvercles-4-feuilles',
		name: 'Couvercles 4 feuilles',
		icon: <NoteIcon />,
		mainPageComponent: LidFourSheetsPage,
	},
].map((foldType) => ({
	...foldType,
	mainPagePath: '/' + foldType.id,
	linkTo: (props) => <Link to={'/' + foldType.id} {...props} />,
}));

export default FOLD_TYPES;
