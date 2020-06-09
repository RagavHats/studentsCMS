import React , { useState , useEffect } from 'react';
import { Card , Container , CardBody , CardHeader } from 'reactstrap';
import { getPStudent , updateProduct} from "../helper/core";

const UpdateScreen =({match})=>{
    
const [values, setValues] = useState({
    username: "",
    class_name: "",
    longitude: "",
    latitude: "",
    photo: "",
    loading: false,
    error: "",
    createdProduct: "",
    getaRedirect: false,
    formData: ""
  });


  const {
    username,
    class_name,
    longitude,
    latitude,
    photo,
    loading,
    error,
    createdProduct,
    getaRedirect,
    formData
  } = values;

    

  const onSubmit = event => {
    event.preventDefault();
    setValues({ ...values, error: "", loading: true });
    updateProduct(match.params.userId, formData).then(data => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        console.log(data);
      }
    });
   
  }

  const handleChange = name => event => {
      const value = name === "photo" ? event.target.files[0] : event.target.value;
    formData.set(name, value);
    setValues({ ...values, [name]: value });
   
  };

  const preload = (productId) => {
    getPStudent(productId).then(data => {
         if (data.error) {
            setValues({ ...values, error: data.error });
        } else {
            setValues({
            ...values , 
            username : data.username,
            class_name : data.class_name,
            longitude : data.longitude,
            latitude : data.latitude,
            createdProduct : data._id,
            formData : new FormData()
         });
      }
    })
  }
useEffect(() => {
     preload(match.params.userId);
  }, []);

const srcr =createdProduct;
const Imageurl =  "http://localhost:5000/user/photo/" + srcr ;

    return (
        <Container>
         <br/>
            <Card className="col-8">
                <CardHeader>Add Students</CardHeader>
                <CardBody>
                    <form  >
                        <div className="row">
                            <div className="form-group">
                                
                                Profile Photo1 :  &nbsp;&nbsp;&nbsp;&nbsp;
                                <input
                                    onChange={handleChange("photo")}
                                    type="file"
                                    name="photo"
                                    accept="image"
                                    placeholder="choose a file"
                                />

                            </div>
                            <img className="col-2" src={Imageurl} />
                        </div>
                        <br/>
                        <div className="row">
                            <label className= "col-3"> Name  </label>
                            <div className="form-group col-8">
                                <input
                                onChange={handleChange("username")}
                                name="username"
                                className="form-control"
                                placeholder="Name"
                                value={username}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <label className= "col-3"> Class  </label>
                            <div className="form-group col-8">
                                <input
                                onChange={handleChange("class_name")}
                                name="class_name"
                                className="form-control"
                                placeholder="Class "
                                value={class_name}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <label className= "col-3"> Latitude  </label>
                            <div className="form-group col-8">
                                <input
                                onChange={handleChange("latitude")}
                                name="latitude"
                                className="form-control"
                                placeholder="Area Latitude"
                                value={latitude}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <label className= "col-3"> Name  </label>
                            <div className="form-group col-8">
                                <input
                                onChange={handleChange("longitude")}
                                type="text"
                                name="longitude"
                                className="form-control"
                                placeholder="Area Logitude"
                                value={longitude}
                                />
                            </div>
                        </div>
                        

                        <button
                            type="submit"
                            onClick={onSubmit}
                            className="btn btn-outline-success mb-3"
                        >
                            Update Students
                        </button>
                        </form>
                </CardBody>
            </Card>
        </Container>
    )

}

export default UpdateScreen;