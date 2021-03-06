import React from 'react';
import TextField from '@material-ui/core/TextField';
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import styled from 'styled-components'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';
import { green, purple } from '@material-ui/core/colors';

const ButtonFilter = withStyles({
  root: {
    color:'white',
    width: '22ch',
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: '#41A69C',
    borderColor: '#41A69C',
    fontFamily: [
      'Roboto',
    ].join(','),
    '&:hover': {
      backgroundColor: '##41A69C',
      borderColor: '##41A69Ccc',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '##41A69C',
      borderColor: '##41A69C',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  },
})(Button);

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(3),
      width: '25ch',
    },
  },
}));

const useStyles2 = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '11.5ch',
      },
    },
  }));

  const useStyles3 = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(2),
        width: '25ch',
      },
    },
  }));
  
const Div = styled.div `
    display: flex;
    flex-direction: column;
    width: 250px;
    align-items: center;
    border: 1px solid #c4c4c4;
    border-radius: 10px;
    position: absolute;
    right: 30px;
    top: 10px;
    z-index: 10;
    border-radius: 5px;
    background-color: white;
`
const DivInputs = styled.div`
  
  background-color: white;
  height: max-content;
  width: 100%;
  display: ${props=> props.display === true? 'block': 'none'};
  margin-top: 20px;
  border-radius: 5px;
`
const DivSeletor = styled.div `
    align-self: flex-start;
    margin-left: 40px;
    margin-top: 20px;
`
const DivTitle= styled.div `
    display: flex;
    color: black;
    background-color:#41A69C;
    border-radius: 5px;
    width: 231px;
    padding: 10px;
    margin: -11px auto;
    justify-content: baseline;
    align-items: center;
    font-size: 1.2em;
`
const ButtonClose = styled.button `
    background-color: #41A69C;
    border: none;
    outline: none;
    color: white;
    font-size: 1.6em;
    align-self: flex-start;
    margin-right: 10px;
    cursor: pointer;
    :hover{
      
        outline: none;
        border: none;
        box-shadow: none;
        color: #3b1caf;
        
    }
`
const TextoFiltro = styled.p`
  cursor: pointer;
  font-size: 20px;
  width: 70%;
  height: max-content;
  margin-top: 4px;
  margin-bottom: 0px;
`

function FiltroDropDown (props){
  
  
    const classes = useStyles();
    const classes2 = useStyles2();
    const classes3 = useStyles3();
    const [value, setValue] = React.useState('ordenacao');

    const handleChange = (event) => {
      setValue(event.target.value);
    };
    
    return ( 
    <Div>
        <DivTitle >
            <ButtonClose onClick={props.mudaDisplayNone}>x</ButtonClose>
            <TextoFiltro onClick={props.mudaDisplayBlock}>Filtros</TextoFiltro>
        </DivTitle>
        <DivInputs display={props.display}>

        <TextField value={props.nome} onChange={props.valorNome}id="outlined-search" label="Nome" type="text" variant="outlined" />
        <form className={classes2.root} noValidate autoComplete="off">
            <TextField value={props.minimo} onChange={props.valorMin}id="outlined-search" label="min." type="number" variant="outlined" />
            <TextField value={props.maximo} onChange={props.valorMax}id="outlined-search" label="max." type="number"  variant="outlined" />
        </form>
        <DivSeletor>
            <FormControl component="fieldset">
                <FormLabel component="legend">Ordenado por:</FormLabel>
                <RadioGroup aria-label="ordenacao" name="ordenacao" onChange={props.ordenacao}>
                    <FormControlLabel value="A-Z" control={<Radio />} label="A-Z" />
                    <FormControlLabel value="Maior valor" control={<Radio />} label="Maior valor" />
                    <FormControlLabel value="Menor valor" control={<Radio />} label="Menor valor" />
                </RadioGroup>
            </FormControl>
        </DivSeletor>

        <form className={classes3.root} noValidate autoComplete="off">
        </form>
        </DivInputs>
    </Div>
    
 

    )
}
export default FiltroDropDown