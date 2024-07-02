import { useState } from "react";
import "../styles/CallToAction.css";
import { toast, ToastContainer } from 'react-toastify';
import { TextField, Button, Container, Typography} from '@mui/material';
import 'react-toastify/dist/ReactToastify.css';

export default function CallToAction() {
  
  const [formData, setFormData] = useState({
      name: '',
      email: '',
      content: ''
    });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
    ...formData,
    [name]: value
    });
  }; 
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (! re.test(String(formData.email).toLowerCase()) ) {
      toast.error('Invalid email address', {
        className: 'custom-toast',
        bodyClassName: 'custom-toast-container'
        }
      );
      return;
    }
  };

  return (
  <div className="contact-container">
          Any idea to colaborate? Looking forward to hear from you:

    <Container maxWidth="sm">
      <Typography variant="h3 " component="h3" sx={{mb:1}} gutterBottom>
      </Typography>
      <form onSubmit={handleSubmit}>
        <div style={{display:"flex"}}>
        <TextField
      fullWidth
      margin="normal"
      label="Name"
      name="name"
      value={formData.name}
      onChange={handleChange}
      required
      sx={{
        '& .MuiInputBase-root': {
          color: 'white', 
        },
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: 'white',  
          },
          '&:hover fieldset': {
            borderColor: 'primary.light', 
          },
         
        },
        '& .MuiInputLabel-root': {
          color: 'white',  
        },
        '& .MuiInputLabel-root.Mui-focused': {
          color: 'white',  
        },
      }}
    />
        <TextField
          fullWidth
          margin="normal"
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
          sx={{
            ml:"10px",
            '& .MuiInputBase-root': {
              color: 'white',  
            },
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: 'white',  
              },
              '&:hover fieldset': {
                borderColor: 'primary.light', 
              },
             
            },
            '& .MuiInputLabel-root': {
              color: 'white',  
            },
            '& .MuiInputLabel-root.Mui-focused': {
              color: 'white',
            },
          }}
         
          />
        </div>

        <TextField
          fullWidth
          margin="normal"
          label="Content"
          name="content"
          multiline
          rows={4}
          value={formData.content}
          onChange={handleChange}
          required
          sx={{
            '& .MuiInputBase-root': {
              color: 'white',  
            },
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: 'white', 
              },
              '&:hover fieldset': {
                borderColor: 'primary.light', 
              },
             
            },
            '& .MuiInputLabel-root': {
              color: 'white', 
            },
            '& .MuiInputLabel-root.Mui-focused': {
              color: 'white', 
            },
          }}
        />
          <Button
            variant="contained"
            color="primary"
            type="submit"
          >
            Submit
          </Button>
      </form>
    </Container>
    
    <ToastContainer />

  </div>
  )
}

 