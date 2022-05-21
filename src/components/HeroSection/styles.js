import {styled} from '@mui/system';

import Typography from '@mui/material/Typography';

export const HeroImage = styled('img')({
    'width': '100%',
    'height': '60vh',
    'backgroundPosition': 'center',
    // '-webkit-filter': `brightness('20%') !important`,
    // 'filter': `brightness('20%')`,
    // opacity: '10'
    // background: 'rgba(0, 0, 0, 1)'
});

// export const HeroTypography = styled(Typography)({
//     position: 'absolute',
//     width: '35%',
//     color: 'white',
//     marginLeft: theme.spacing(2),
// });

export const HeroTypography = styled(Typography)(({theme}) => ({
        position: 'absolute',
        width: '35%',
        color: 'white',
        // marginLeft: theme.spacing(3),
        // marginTop: theme.spacing(9)
        padding: `${theme.spacing(9)} ${theme.spacing(3)}`
    })
);

export const Wrapper = styled('div')(({theme}) => ({
    // background: 'rgba(0,0,0,0.6)',
    // opacity: '0',
})
);
