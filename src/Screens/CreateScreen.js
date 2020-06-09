import React , { useState , useEffect } from 'react';
import { Card , Container , CardBody , CardHeader } from 'reactstrap';
import {createastudent} from "../helper/core";


const CreateScreen =()=>{
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
    createastudent(formData).then(data => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
          
      }
    })
   
  }

  const handleChange = name => event => {
    const value = name === "photo" ? event.target.files[0] : event.target.value;
formData.set(name, value);
    setValues({ ...values, [name]: value });
   
  };

  const preload = () => {
   setValues({ ...values, formData: new FormData() });
  }
useEffect(() => {
    preload();
  }, []);


    return (
        <Container>
         <br/>
            <Card className="col-8">
                <CardHeader>Add Students</CardHeader>
                <CardBody>
                    <form  >
                        <span></span>
                        <div className="form-group">
                            
                            Profile Photo :  &nbsp;&nbsp;&nbsp;&nbsp;
                            <input
                                onChange={handleChange("photo")}
                                type="file"
                                name="photo"
                                accept="image"
                                placeholder="choose a file"
                            />
                            
                        </div>
                        <div className="form-group">
                            <input
                            onChange={handleChange("username")}
                            name="username"
                            className="form-control"
                            placeholder="Name"
                            value={username}
                            />
                        </div>
                        <div className="form-group">
                            <input
                            onChange={handleChange("class_name")}
                            name="class_name"
                            className="form-control"
                            placeholder="Class "
                            value={class_name}
                            />
                        </div>
                        <div className="form-group">
                            <input
                            onChange={handleChange("latitude")}
                            name="latitude"
                            className="form-control"
                            placeholder="Area Latitude"
                            value={latitude}
                            />
                        </div>
                        <div className="form-group">
                            <input
                            onChange={handleChange("longitude")}
                            type="text"
                            name="longitude"
                            className="form-control"
                            placeholder="Area Logitude"
                            value={longitude}
                            />
                        </div>
                        

                        <button
                            type="submit"
                            onClick={onSubmit}
                            className="btn btn-outline-success mb-3"
                        >
                            Add Students
                        </button>
                        </form>
                </CardBody>
            </Card>
        </Container>
    )

}

export default CreateScreen;