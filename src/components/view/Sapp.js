import React, { useEffect, useState } from "react";

import { Card, Input } from "semantic-ui-react";
export default function Sapp() {
  const [APIData, setAPIData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(
      `https://asia-south1-socialboat-dev.cloudfunctions.net/assignmentVideos?q=${search}&numResults=15`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let group = data.results;
        setAPIData(group);
      });
  }, [search]);

  console.log(APIData);
  return (
    <div style={{ padding: 20 }}>
      <Input
        icon="search"
        placeholder="Search..."
        onChange={(e) => setSearch(e.target.value)}
      />
      <Card.Group itemsPerRow={3} style={{ marginTop: 20 }}>
        {Array.isArray(APIData) &&
          APIData.length > 0 &&
          APIData.map((item) => {
            return (
              <Card>
                <Card.Content>
                  {/* <Card.Header>{item.heading}</Card.Header>
                  <Card.Description>{item.text}</Card.Description> */}
                  <video width="720" height="264" controls>
                    <source src={item.video} type="video/mp4" />
                  </video>
                </Card.Content>
              </Card>
            );
          })}
      </Card.Group>
    </div>
  );
}
