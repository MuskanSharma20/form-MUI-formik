import React from 'react';
import { Container, Typography, Paper, TextField, FormControl, Button, MenuItem, Select, InputLabel, FormControlLabel, Radio, FormLabel, RadioGroup, Stack } from '@mui/material';
import pic from './Images/paint.png';
import {useFormik} from 'formik'

function InfoForm() {

  const formik = useFormik({
    initialValues: 
     {  userName:'',
     address:'',
     country:'',
     hobbies: [],
     gender:''
    
    }
    ,
    onSubmit: (values,{ resetForm })=>{
      console.log(values ,'form values')
      const message = `
      User Name: ${values.userName}
      Address: ${values.address}
      Country: ${values.country}
      Hobbies: ${values.hobbies.join(', ')}
      Gender: ${values.gender}
    `;
      alert("Form Submitted Successfully !!!!" + message )
      resetForm();
    }
   
  });



  return (
    <div style={{
      backgroundImage: `url(${pic})`,
      backgroundRepeat: 'no-repeat', backgroundSize: '70%', backgroundPosition: 'center',
      minHeight: '100vh', display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Container maxWidth="xs" >

       

          <Paper elevation={10} sx={{ padding: '22px' }} >

            {/* heading */}
            <Typography component="h1" variant="h4"  >
              Personal Details
            </Typography>

   
   <form onSubmit={formik.handleSubmit}>

  
   {/* textFields */} 
   < TextField margin="normal" required fullWidth variant='filled' label="User Name" name="userName" autoFocus value={formik.values.userName} onChange={formik.handleChange} />
   <TextField margin="normal" required fullWidth name="address" label="Address" multiline rows={3}  variant='filled' value={formik.values.address} onChange={formik.handleChange} />

   {/* {/* dropdowns */}
   <Stack direction="row" spacing={4} sx={{ p: '10px' }}>
     <FormControl fullWidth>
       <InputLabel id='country' >Country</InputLabel>
       <Select required label="Country" name='country' value={formik.values.country} onChange={formik.handleChange}  >
         <MenuItem value={"india"}>INDIA</MenuItem>
         <MenuItem value={"us"}>	United States</MenuItem>
         <MenuItem value={"canada"}>CANADA</MenuItem>
       </Select>
     </FormControl>

     <FormControl fullWidth>
       <InputLabel id='hobbies' >Hobbies</InputLabel>
       <Select required label="Hobies" multiple  name='hobbies' value={formik.values.hobbies} onChange={formik.handleChange} >
         <MenuItem value={"singing"}>Singing</MenuItem>
         <MenuItem value={"painting"}>	Painting</MenuItem>
         <MenuItem value={"playingSports"}>Playing Sports</MenuItem>
         <MenuItem value={"other"}>Other</MenuItem>
       </Select>
     </FormControl>
   </Stack> 

   <FormControl>
     <FormLabel >Gender</FormLabel>
     < RadioGroup row name="gender" required value={formik.values.gender} onChange={formik.handleChange} >
       <FormControlLabel value="female" control={<Radio />} label="Female" />
       <FormControlLabel value="male" control={<Radio />} label="Male" />
       <FormControlLabel value="lgbtqia" control={<Radio />} label="LGBTQIA+" />
     </RadioGroup>
   </FormControl>

   {/* submitBtn */}
   < Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} >
     Submit
   </Button>
   </form>

          </Paper>
       
      </Container>
    </div>
  );
}

export default InfoForm;
