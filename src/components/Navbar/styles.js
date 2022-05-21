import {styled} from '@mui/system';

import AppBar from '@mui/material/AppBar';


export const NavBar = styled(AppBar)(({ theme }) => ({
    backgroundColor: theme.palette.layout.white,
    // height: '10vh',
    // borderRadius: `0 0 ${theme.spacing(0)} ${theme.spacing(0)}`,

}));