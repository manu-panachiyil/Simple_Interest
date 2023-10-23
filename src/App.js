import './App.css';
import { TextField } from '@mui/material';
import Stack from '@mui/material/Stack';
import { Button } from '@mui/material';
import { useState } from 'react';


function App() {

  const [interest, setInterest] = useState(0);
  const [principle, setPrinciple] = useState(0);
  const [rate, setRate] = useState(0);
  const [year, setYear] = useState(0);
  const [isPrinciple, setIsPrinciple] = useState(true)
  const [isRate, setIsRate] = useState(true)
  const [isYear, setIsYear] = useState(true)

  const validate = (e) => {
      
    const {name, value} = e.target;
    console.log(value);
    console.log(value.match(/^[0-9]+$/));

    if(!!value.match(/^[0-9]+$/)){
      if(name === 'principle'){

        setPrinciple(value);
        setIsPrinciple(true);

      }else if(name=== 'rate'){
      
        setRate(value);
        setIsRate(true)
      }else if(name=== 'year'){
      
        setYear(value);
        setIsYear(true)
      }
    }
    else
    {
      if(name === 'principle'){

        setPrinciple(value);
        setIsPrinciple(false);
      }else if(name=== 'rate'){
      
        setRate(value);
        setIsRate(false)

      }else if(name=== 'year'){
      
        setYear(value);
        setIsYear(false)

      }
    }
  }


  const handleCalculate = (e) => {
    e.preventDefault();

    if(!principle || !rate || !year){

      alert("Please Fill The Form")

    }else{

      /* alert('Submited') */
      setInterest(principle*rate*year/100);

    }
  }

  const handleReset = (e) => {
    setInterest(0)
    setPrinciple(0)
    setRate(0)
    setYear(0)
    setIsPrinciple(true)
    setIsRate(0)
    setIsYear(0)
  }

  return (
    <div className='d-flex justify-content-center align-items-center w-100 bg-dark' style={{height:'100vh'}}>
    <div className='bg-white p-5 rounded mt-5 mb-5' style={{width:'500px'}}>
        <h1>Simple Interest App</h1>
        <p>Calculate your Simple Interest Easily</p>
       
      <div style={{height:'120px'}} className='flex-column mt-3 bg-warning d-flex justify-content-center align-items-center w-100 rounded'>

        <h1> ₹ {''} {interest}</h1>

        <p>Total Simple Interest</p>
      </div>

      <form className='mt-4' onSubmit={handleCalculate}>

        <div className='mb-4'>
        <TextField className='w-100' name='principle' value={principle || ''} onChange={(e) => validate(e)} id="outlined-basic" label="₹ Priciple Amount" variant="outlined" />
        </div>

        { !isPrinciple &&
         <div>
          <p className='text-danger'>Invalid Input</p>
        </div>}

        <div className='mb-4'>
        <TextField className='w-100' name='rate' value={rate || ''} onChange={(e) => validate(e)} id="outlined-basic" label="Rate of Interest (p.a) %" variant="outlined" />
        </div>

        { !isRate &&
         <div>
          <p className='text-danger'>Invalid Input</p>
        </div>}

        <div className='mb-4'>
        <TextField className='w-100' name='year' value={year || ''} onChange={(e) => validate(e)} id="outlined-basic" label="Year (Yr)" variant="outlined" />
        </div>

        { !isYear &&
         <div>
          <p className='text-danger'>Invalid Input</p>
        </div>}

        <div className='mt-4'>
          <Stack direction="row" spacing={2}>

          <Button type='submit' disabled ={isPrinciple && isRate && isRate ? false : true} className='bg-success' style={{width:'200px',height:'50'}} variant="contained">Calculate</Button>

          <Button onClick={handleReset} style={{width:'200px',height:'50'}} variant="outlined">Reset</Button>
          </Stack>
        </div>

      </form>
    </div>
    </div>
  );
}

export default App;
