import React from "react";

const Profile : React.FC = () => {
    return(
        <img
        src="https://i.imgur.com/MK3eW3As.jpg"
        alt="Katherine Johnson"
      />   
     )
}

const Gallery: React.FC = () => {
  return (
  <section>
<h1>Amazing scientists</h1>
<Profile/>
<Profile/>
<Profile/>
<Profile/>

  </section>
  )
};

export default Gallery;
