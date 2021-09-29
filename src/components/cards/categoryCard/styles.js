import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
    card: {
        width: 120, 
        height: 120, 
        position: 'relative', 
        cursor: 'pointer',
        [theme.breakpoints.only('xs')]: {
            width: 80, 
            height: 80, 
        },
        [theme.breakpoints.only('sm')]: {
            width: 100, 
            height: 100, 
        },
    },
    cardMedia: {
        position: 'absolute', 
        top: 0, 
        left: 0, 
        width: '100%', 
        height: '100%', 
        opacity: 0.45
    },
    cardContent: {
        padding: 0, 
        backgroundColor: 'black'
    },
    text: {
        fontSize: '18px', 
        color:'red',
        lineHeight: '120px',
        fontWeight: 'bold',
        [theme.breakpoints.only('xs')]: {
            fontSize: '14px', 
            lineHeight: '80px',
        },
        [theme.breakpoints.only('sm')]: {
            fontSize: '16px', 
            lineHeight: '100px',
        }
    },
    
}));