import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import BranchNavBar from '../BranchNavBar';







const Stock = props => ( <tr >
    <td > { props.Stock.Itemcode } </td> 
    <td > { props.Stock.Productname } </td>
    <td > { props.Stock.Discription } </td> 
    <td > { props.Stock.Unitprice } </td> 
    <td > { props.Stock.qty } </td> <td >
    <Link to = { "/edit/" + props.Stock._id } > Edit </Link> | <a href=" " onClick={() => { props.deleteStock(props.Stock._id) }}>Delete</a > 
    </td > </tr> 
)

export default class StockList extends Component {
    constructor(props) {
        super(props);


        this.state = {
            Stock: []
        };
    }



    componentDidMount() {
        axios.get('http://localhost:5000/Stock/')
            .then(response => {
                this.setState({ Stock: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    getPosts() {
        axios.get('http://localhost:5000/Stock/')
            .then(response => {
                this.setState({ Stock: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }



    StockList() {
        return this.state.Stock.map(currentStock => {
            return <Stock Stock = { currentStock }
            deleteStock = { this.deleteStock }
            key = { currentStock._id }
            />;
        })
    }


    deleteStock(id) {
        if (window.confirm('Are you sure?')) {
            axios.delete('http://localhost:5000/Stock/' + id)
                .then(response => { console.log(response.data) });

            this.setState({
                Stock: this.state.Stock.filter(el => el._id !== id)
            })
        }
    }





    handleSearchArea = (e) => {

        const searchKey = e.currentTarget.value;

        axios.get('http://localhost:5000/Stock/').then(response => {


            const resultt = response.data
            const result = resultt.filter((props) =>
                props.Productname.includes(searchKey)
            )

            this.setState({ Stock: result })

        });

    }
    
    render() {
        return ( <
            div className = "container" >

            <BranchNavBar/>
            
    
            <div style = {
                { float: 'none'}
            } > 
           
            </div>  <br/>
            
            <
            div className = "row" >
            <
            div className = "col-lg-9 mt-2 mb-2" >
            <
            h4 > All Stock </h4> </
            div > <
            div className = "col-lg-3 mt-2 mb-2" >
            <
            input className = "form-control"
            type = "search"
            placeholder = "Search by Product Name"
            name = "searchQuery"
            onChange = { this.handleSearchArea } >
            </
            input> </
            div > </
            div>


            <
            table class="table table-bordered table-white" >
            <
            thead className = "thead-light" >
            <
            tr >
            <th > Item Code </th> 
            <th > Product Name </th> <
            th > Description </th> <
            th > Unit Price </th> <
            th > Quantity </th> < 
            th > Action </th>  </
            tr > </
            thead> <
            tbody >
            
            {
                this.state.Stock.map(props =>
                    <
                    tr key = { props.id } >
                    <
                    td > { props.Itemcode } </td> <
                    td > { props.Productname } </td>  <
                    td > { props.Discription } </td>  < 
                    td > { props.Unitprice } </td>  < 
                    td > { props.qty } </td>  <   

                    td >
                    <
                    Link to = { "/branch/update/" + props._id } >  <Button variant = "warning btn-sm"> Edit </Button> </Link>  
                    <a href="" onClick={() => { this.deleteStock(props._id) }}> <Button variant = "danger btn-sm"> Delete </Button> </a > 
                    </
                    td >

                    </tr>
                )

            }

            </tbody> </
            table >

            <
            div style = {
                { float: 'right' }
            } >

            <
            Link to = "/add-branch" >
            <button type="button" class="btn btn-success" variant = "primary" > New Stock </button>
            </
            Link >
            </div>

            

            </div>
        )
    }
}