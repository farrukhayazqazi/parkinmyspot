import {styled} from '@mui/system';


export const FooterWrapper = styled('div')(({theme}) => ({
    // background: theme.palette.layout.pimglight,
    // height: theme.spacing(7),
    // display: 'flex',
    // alignItems: 'center',
    // justifyContent: 'center',
    position: 'relative',
    // marginTop: theme.spacing(4),
    // bottom: 0,
    // width: '100%',
    })
);

export const Wrapper = styled('div')(({theme}) => ({
    width: '100%',
    height: theme.spacing(7),
    display: 'flex',
    position: 'absolute',
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.palette.layout.pimglight, 
    marginTop: theme.spacing(3),
})
);
