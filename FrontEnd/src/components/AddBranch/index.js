import React, { Component } from 'react';
import axios from 'axios';
import "react-datepicker/dist/react-datepicker.css";
import BranchNavBar from '../BranchNavBar';
import swal from '@sweetalert/with-react'



export default class CreateStock extends Component {
    constructor(props) {
        super(props);


        this.onChangeItemcode = this.onChangeItemcode.bind(this);
        this.onChangeProductname = this.onChangeProductname.bind(this);
        this.onChangeDiscription = this.onChangeDiscription.bind(this);
        this.onChangeUnitprice = this.onChangeUnitprice.bind(this);
        this.onChangeqty = this.onChangeqty.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            Itemcode: '',
            Productname: '',
            Discription: '',
            Unitprice: '',
            qty: '',
            Stock: []
        }
    }
 //set the Itemcode

 onChangeItemcode(e) {
    this.setState({
        Itemcode: e.target.value
    })
}

//set the Productname

onChangeProductname(e) {
        this.setState({
            Productname: e.target.value
        })
    }
    //set Discription
onChangeDiscription(e) {
    this.setState({
        Discription: e.target.value
    })
}

//set Unitprice

onChangeUnitprice(e) {
    this.setState({
        Unitprice: e.target.value
    })
}

//Set qty

onChangeqty(e) {
    this.setState({
        qty: e.target.value
    })
}





//submit Function

onSubmit(e) {
    e.preventDefault();

    const Stock = {
        Itemcode: this.state.Itemcode,
        Productname: this.state.Productname,
        Discription: this.state.Discription,
        Unitprice: this.state.Unitprice,
        qty: this.state.qty
    }

    console.log(Stock);

    axios.post('http://localhost:5000/Stock/add', Stock)
        .then(res => console.log(res.data));


    swal({
            title: "Done!",
            text: "Stock Successfully Added",
            icon: "success",
            button: "Okay!"
        })
        .then((value) => {
            swal(window.location = '/');
        });

    // window.location = '/create';

}
    render() {
        return ( <div ><BranchNavBar/>
            <h3 > New Stock </h3> <form onSubmit = { this.onSubmit } >
            <div className = "form-group" style = { { marginBottom: '15px' }} >

            <label >Item code: </label>
            <input type = "text"
            required className = "form-control"
            placeholder = "Enter Item code"
            value = { this.state.Itemcode }
            onChange = { this.onChangeItemcode }/>
             </div >
             
              <div className = "form-group" >
            <label >  Product Name: </label> 
            <input type = "text"
            required className = "form-control"
            placeholder = "Enter Product Name"
            value = { this.state.Productname }
            onChange = { this.onChangeProductname }/> </div > 
             <div className = "form-group" >
            <label > Description: </label> 
            <input type = "text"
            required className = "form-control"
            placeholder = "Enter Description"
            //maxlength = "10"
            value = { this.state.Discription }
            onChange = { this.onChangeDiscription}/>
            </div > 
             <div className = "form-group" >
            <label >  Unit Price:: </label>
             <input type = "number"
            className = "form-control"
            placeholder = "Enter  Unit Price:"
            value = { this.state.Unitprice }
            onChange = { this.onChangeUnitprice }/> </div > 
             <div className = "form-group" >
           
            <div className = "form-group" >
            <label > Qty: </label> <
            input type = "number"
            required className = "form-control"
            placeholder = "Enter Qty"
            value = { this.state.qty }
            onChange = { this.onChangeqty }/>  </div> 

            
            
            
            
            
            </div > <div className = "form-group" >
            <input type = "submit"
            value = "Create"
            className = "btn btn-primary" />
            </div> </form > </div>
        );
    }
}