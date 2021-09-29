import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    form: {
        border: '1px solid #CCC',
        borderRadius: 8,
        padding: '24px 16px',
        backgroundColor: 'white',
    },
    formControl: {
        marginTop: 32
    },
    colorsGroup: {
        height: 200,
        overflowY: 'scroll',
        border: '1px solid #DDD',
        borderRadius: '4px',
        marginTop: 8,
        marginBottom: 32,
        [theme.breakpoints.only('xs')]: {
            width: '90%'
        }
    },
    colorsContainer: {
        height: 200,
        padding: '6px',
    }
}))