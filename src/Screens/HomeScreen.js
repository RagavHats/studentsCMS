import React , { useState , useEffect } from 'react';
import { Card , Container , CardBody , CardHeader } from 'reactstrap';
import {getstudentsList , deleteProduct} from "../helper/core";

import { Link } from "react-router-dom";
const HomeScreen = () => {

    const [students, setstudents] = useState([]);
    const [error, seterror] = useState(false);
    
    const AllMyStudents = () =>{
        getstudentsList().then(data =>{
                if(data.error){
                    seterror(data.error);
                }else{
                    setstudents(data);
                }
            }
        )
    }
    
    

    const deleteThisProduct = productId => {
        deleteProduct(productId).then(data => {
        if (data.error) {
            console.log(data.error);
        } else {
           AllMyStudents();
        }
        });
    };



    useEffect(() => {
        AllMyStudents()
    }, [])
    return(
        <Container>
         <br/>
            <Card className="col-8">
                <CardHeader>
                    <div className="row">
                        <div className="col-6">
                            <h3>List of Students </h3>
                        </div>
                        <div className="col-6">
                            <div className="row">
                                <input type="text" class="form-control col-6" 
                                    placeholder="Filter ..."
                                   
                                   
                                />
                                &nbsp;
                                <button class="btn btn-sm btn-primary col-3"   >Search</button>
                            </div>
                        </div>
                    </div> 
                    
                        
                       
                </CardHeader>
                <CardBody>


                    <table className="table table-stripped">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Student Name</th>
                                <th>Class </th>
                                <th>Area - Latitude </th>
                                <th>Area - Longitude </th>
                                <th>Edit </th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            
                                {
                                    students.map((item, index)=>{
                                        const srcr =item._id;
                                        const Imageurl = item.photo.data ? "http://localhost:5000/user/photo/" + srcr
    : "";
                                        return(
                                        <tr key={index} value={index}>

                                            <td><img
                                                src={Imageurl} class="rounded-circle img-fluid img-tumbnail "
                                                style={{width:'50%'}} ></img></td>
                                            <td>{item.username}</td>
                                            <td>{item.class_name}</td>
                                            <td>{item.latitude}</td>
                                            <td>{item.longitude}</td>
                                            <td> <Link to={`/update/${item._id}`}
                                            className="fa fa-edit" id={index} style={{color:'blue',fontSize:'20px',cursor:'pointer'}}
                                            
                                            
                                            ></Link></td>
                                            <td><i className="fa fa-trash" id={index} style={{color:'red',fontSize:'20px' , cursor:'pointer'}}
                                                onClick={() => {
                                                    deleteThisProduct(item._id);
                                                    }}
                                            ></i></td>
                                        </tr>
                                        )
                                    })
                                }
                            
                        </tbody>
                    </table>
                </CardBody>
            </Card>
        </Container>
        
    );
};

export default HomeScreen;