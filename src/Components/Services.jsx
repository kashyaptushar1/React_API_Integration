import axios from "./utils/axios";

import { useEffect , useState } from "react"


function Services() {


  const [ setprodects] = useState([]);

  const getUser = async () => {
    
    axios
      .get("/users")
      .then((Users) => {
        console.log(Users);
        setprodects(Users.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(()=>{
    getUser()
    console.log("Hello")
  },[])
  
  return (
    <div>
     <button  >GetUser</button>
    </div>
  )
}

export default Services
