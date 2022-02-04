import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import { Input } from '@material-ui/core'

export default function Card() {
  const [open, setOpen] = useState(false);
  
    const [modalStyle] = useState(getModalStyle);
  function getModalStyle() {
    const top = 50;
    const left = 50;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }
  const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));
  const classes = useStyles();
  const [description , setDescription] = useState('');
	const [LinkedIn, setLinkedIn] = useState('');
	const [fb , setFb] = useState('');
  return (
    <>
      <div>
        <Dropdown>
          <Dropdown.Toggle class="p-3 mb-2 bg-light text-dark">
            ranjan201
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Button onClick={() => setOpen(true)}>Edit profile</Button>
            <Dropdown.Item href="#">Logout</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Modal open={open} onClose={() => setOpen(false)}>
          <center style={modalStyle} className={classes.paper}>
            <img
              src=""
              alt=""
            />
            <form className="signUp">
              <Input
                type="text"
                placeholder="username"
                
              />

              <Input
                type="text"
                placeholder="Description"
              />

              <Input
                type="text"
                placeholder="LinkIn"
                
                
              />
              <Input
                type="password"
                placeholder="fb"
                
                
              />
              <br />
              <br />
              
              <Button type="submit">
                Update
              </Button>
            </form>
          </center>
        </Modal>
      </div>
    </>
  );
}
