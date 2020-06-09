import Axios from "axios";

export const  getstudentsList = () => {
   return fetch("http://localhost:5000/user/" , {method:"GET"})
            .then(response => {
                return response.json();
            })
            .catch(err => console.log(err))
}


export const deleteProduct = productId  =>{

    return fetch(`http://localhost:5000/user/delete/${productId}`, {
    method: "DELETE",

  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));

}


export const createastudent = product  =>{
  return fetch("http://localhost:5000/user/add/", {
    method: "POST",
    headers:{
      Accept : "application/json"
    },
    body: product
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
}


//get a product

export const getPStudent= productId => {
  return fetch(`http://localhost:5000/user/student/${productId}`, {
    method: "GET"
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};

export const updateProduct = (userId , product) =>{
  return fetch(`http://localhost:5000/user/add/${userId}`, {
    method: "PUT",
    headers:{
      Accept : "application/json"
    },
    body: product
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
}


