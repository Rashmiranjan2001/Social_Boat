import React, { useState,useEffect } from "react";
import "../style/Home.css";
import ProfileCard from "../view/ProfileCard";


const Home = () => {
  const [name,setName] = useState("RASHMIRANJAN ROUT");
  
  useEffect(() => {
    function postData(){
      fetch({
        method: "post",
        url : "https://asia-south1-socialboat-dev.cloudfunctions.net/assignmentPost",
      }).then(response =>{
        setName(response)
      })
    }
  }, []);
  
  
  return (
    <div>
      <ProfileCard
        name={name}
        role="fitness influencer"
        description="Stay fit stay Healthy"
      />
      
    </div>
  );
};

export default Home;
