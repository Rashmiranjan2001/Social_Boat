
import {useState,useEffect } from "react";
import "../style/ProfileCard.css";
import Sapp from "./Sapp";
import axios from "axios";
import Card from "./Card";
import Dashboard from "./Dashboard";


const ProfileCard = (props) => {
    
    function getData(uid){
        axios.get(`https://asia-south1-socialboat-dev.cloudfunctions.net/assignmentGet/?uid=${uid}`).then(response => {
          setdata(response.data.profile);
        })
      }

    const [data, setdata] = useState();
    useEffect(() => {
      getData("hello1")
    }, []);
    console.log(data);
  return (
    <div class="container mt-5">
      <div class="row d-flex justify-content-center">
        <div class="col-md-7" style={{ width: "90%" }}>
          <div class="card p-3 py-4">
          <div className="right"> 
            <img
                src="https://i.imgur.com/bDLhJiP.jpg"
                width="100"
                class="rounded-circle"
              />
              <Card name = {props.name}
               />
             </div>
            <div class="text-center">       
              <img
                src="https://media.istockphoto.com/vectors/gym-logo-template-vector-id972766992"
                width="200"
                class="rounded-circle"
              />
              
              
            </div>
           
            <div class="text-center mt-1">
              <h5 class="mt-1 mb-0">{props.name}</h5>
              <span >{props.role}</span>
              <div class="px-4 mt-1">
                <p class="fonts">{props.description}</p>
              </div>


              <ul class="social-list">
                <li>
                    <a href="https://www.instagram.com/_the__dark__empire_/" target="_blank" ><i class="fab fa-instagram"></i></a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/rashmiranjan-rout-760a7518b/" target="_blank" > <i class="fab fa-linkedin"></i> </a>
                </li>
                <li>
                <a href="https://www.facebook.com/rashmiranjan.rout.792" target="_blank" ><i class="fab fa-facebook"></i></a>
                </li>
              </ul>

              <div class="buttons">
                <Sapp></Sapp>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
