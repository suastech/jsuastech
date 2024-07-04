import { useRef, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { TextField, Button, Container, Typography } from "@mui/material";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";

export default function CallToAction() {
  const formRef = useRef();
  const [isLoading, setIsLoading] = useState(false)

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    content: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();    
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!re.test(String(formData.email).toLowerCase())) {
      toast.error("Invalid email address", {
        className: "custom-toast",
        bodyClassName: "custom-toast-container",
        autoClose: 2000,
      });
      return;
    }
    setIsLoading(true);
    emailjs.sendForm("service_zlzok61", "template_mdga1xg", formRef.current, {
        publicKey: "hnPNkDjQXdQhSTL0s",
      })
      .then(() => {
        toast.success(
          "Thank you for reaching out. I will get in touch with you as soon as possible",
          {
            className: "custom-toast",
            bodyClassName: "custom-toast-container",
            autoClose: 3000,
            isClosable: true,
            position: "top-center",
          }
        );
        setIsLoading(false)
        setFormData({
          name: "",
          email: "",
          content: "",
        });
      })
      .catch((error) => {
        setIsLoading(false)
        toast.error("Internal server error. Please try again later", {
          className: "custom-toast",
          bodyClassName: "custom-toast-container",
          autoClose: 2000,
        });
      });
  };

  return (
    <div className="contact-container">

    {isLoading && 
      <div className="loading-container">
        <span className="loading-effect"></span>
      </div>
    }

    <Container maxWidth="sm" className={isLoading? "disabled-box":""}>
      Any idea to colaborate? Looking forward to hear from you:

        <Typography
          variant="h3 "
          component="h3"
          sx={{ mb: 1 }}
          gutterBottom
        ></Typography>
        <form ref={formRef} onSubmit={handleSubmit}>
          <div className="input-wrap"  >
            <TextField
              fullWidth
              margin="normal"
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              sx={{
                "& .MuiInputBase-root": {
                  color: "white",
                },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "white",
                  },
                  "&:hover fieldset": {
                    borderColor: "primary.light",
                  },
                },
                "& .MuiInputLabel-root": {
                  color: "white",
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "white",
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
              id="email-input"
             
              required
              sx={{
                ml: { xs: 0, sm: '5px' },
                "& .MuiInputBase-root": {
                  color: "white",
                },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "white",
                  },
                  "&:hover fieldset": {
                    borderColor: "primary.light",
                  },
                },
                "& .MuiInputLabel-root": {
                  color: "white",
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "white",
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

              "& .MuiInputBase-root": {
                color: "white",
              },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "white",
                },
                "&:hover fieldset": {
                  borderColor: "primary.light",
                },
              },
              "& .MuiInputLabel-root": {
                color: "white",
              },
              "& .MuiInputLabel-root.Mui-focused": {
                color: "white",
              },
            }}
          />
          <Button variant="contained" color="primary" type="submit" sx={{m: "10px"}}>
            Submit
          </Button>
        </form>
      </Container>
      <ToastContainer />
    </div>
  );
}
