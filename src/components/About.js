import React, { useEffect } from "react";
import img from "./images/undraw_proud_self_1ddv.svg";
import { useHistory } from 'react-router-dom';

const About = () => {
const history =useHistory();
  const callAbout = async () => {
    try {
      const res = await fetch('/about', {
        
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type":"application/json",
        },
        credentials: "include",
      });
       
      const data =await res.json();
      console.log(data);

      if(!res.status === 200){
        const  error =new Error (res.error);
        throw error;
      }

    } catch (err) {
      console.log(err);
      history.push('/login')
    }
  };

  useEffect(() => {
    callAbout();
  });

  return (
    <>
      <div className="about-container">
      <form  method="GET">
      <div className="container">
          <div className="about-content mx-auto col-10">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-12">
                <div className="image text-center p-3">
                  <img src={img} className="img-fluid" alt="" />
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-12 pt-5 pe-5">
                <h1>hello world,</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Soluta delectus ex asperiores illum voluptatum veritatis
                  aperiam porro explicabo, dolore dolorum quos veniam minus
                  pariatur incidunt animi, non quaerat? Exercitationem quis ex
                  sequi adipisci culpa dolores odio commodi mollitia, quisquam
                  qui similique placeat minima iste quam eligendi officiis!
                  Culpa sequi sapiente quod voluptas? Vero voluptate corporis
                  quae soluta? Sunt obcaecati ad perferendis vitae voluptatibus
                  officia modi incidunt quod dolores tenetur necessitatibus
                  similique voluptates ipsa, ratione accusantium dolorem
                  expedita soluta dicta nemo facere corporis quisquam in illum
                  perspiciatis. Dignissimos, tempora quos. Assumenda sunt earum
                  amet esse totam nisi asperiores laudantium. Est, nobis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </form>
      </div>
    </>
  );
};

export default About;
