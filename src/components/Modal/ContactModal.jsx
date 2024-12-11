import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Fade from "@material-ui/core/Fade";
import { makeStyles, Modal } from "@material-ui/core";
import { useForm, Controller } from "react-hook-form";
import { useForm as useFormCarry } from "@formcarry/react";
import "./modalc.css";
import emailjs from 'emailjs-com';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    border: "2px solid purple",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    backgroundColor: "#191227",
  },
}));

export default function TransitionsModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [isError, setIsError] = React.useState(false);

  useEffect(() => {
    emailjs.init('wl9-Sym5InwSTlrQH');
  }, []);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const { handleSubmit, control, reset } = useForm({
    defaultValues: {
      name: '',
      email: '',
      message: ''
    }
  });

  const onSubmit = (data) => {
    setIsError(false);
    let templateParams = {
      from_name: data.name,
      from_email: data.email,
      message: data.message
    };
    
    emailjs.send('service_6ruq5yf', 'template_ol1brze', templateParams)
    .then(function (response) {
      setIsSubmitted(true);
      reset();
    }, function (error) {
      setIsSubmitted(true);
      if (error.response && error.response.status === 400) {
        setIsError(true);
        // console.error('Bad Request:', error);
      } else {
        setIsError(true);
        // console.error('FAILED...', error);
      }
      reset();
    });
  };

  return (
    <>
      {isSubmitted ? (
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropProps={{ timeout: 500 }}
        >
          <Fade in={open}>
            <div className={classes.paper} style={{ textAlign: "Center" }}>
              <div style={{ color: "red" }}>
                {isError ? "Sorry! Unable to send the message at the moment. Please try again later." : "Thank you! I received your message."}
              </div>
            </div>
          </Fade>
        </Modal>
      ) : (
        <div>
          <Button
            variant="primary"
            target="_blank"
            data-aos="fade-down"
            onClick={handleOpen}
            style={{ marginTop: "-20px" }}
          >
            Click To Send Message
          </Button>
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropProps={{ timeout: 500 }}
          >
            <Fade in={open}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className={classes.paper} style={{ textAlign: "center" }}>
                  <h2 id="transition-modal-title" style={{ color: "white" }}>
                    Send Message
                  </h2>
                  <Controller
                    name="name"
                    control={control}
                    render={({ field }) => (
                      <input
                        type="text"
                        placeholder="Write Your Name"
                        className="input-nilp"
                        {...field}
                        required
                      />
                    )}
                  />
                  <Controller
                    name="email"
                    control={control}
                    render={({ field }) => (
                      <input
                        type="email"
                        placeholder="Write Your Email"
                        className="input-nilp"
                        {...field}
                        required
                      />
                    )}
                  />
                  <Controller
                    name="message"
                    control={control}
                    render={({ field }) => (
                      <textarea
                        placeholder="Write here..."
                        className="input-nilp2"
                        {...field}
                        required
                      />
                    )}
                  />
                  <br /><br />
                  <Button type="submit" style={{ width: "60%" }}>
                    SEND
                  </Button>
                </div>
              </form>
            </Fade>
          </Modal>
        </div>
      )}
    </>
  );
}
