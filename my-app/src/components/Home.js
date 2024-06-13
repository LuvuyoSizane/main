import React, { Fragment } from "react";
import {Button,Table} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';
import Employees from "./Employees";

function Home(){
    return (
        <Fragment>
            <div style={{margin:'10rem'}}>
                <Table striped bordered hover>
                    <thead>
                       <tr>
                        <th>
                            Name
                        </th>
                        <th>
                            Age
                        </th>
                        </tr> 
                    </thead>
                    <tbody>
                        {
                        Employees && Employees.length>0    
                        ?
                        Employees.map((item)=>{
                            return(
                                <tr>
                                    <td>
                                        {item.Name}
                                    </td>
                                    <td>
                                        {item.Age}
                                    </td>
                                </tr>
                            )
                        })
                        :
                        "No data available"
                        }
                    </tbody>
                </Table>
            </div>

        </Fragment>

    )
}
export default Home