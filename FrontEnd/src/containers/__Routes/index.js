import React from 'react';
import {Switch} from 'react-router-dom';
import PublicRoute from "../_PublicRoute";
import AdminRoute from "../_AdminRoute";
import HomePage from "../HomePage";
import Dashboard from "../Dashboard";
import BranchTable from "../../components/BranchTable";
import AddBranch from "../../components/AddBranch";
import EditBranch from "../../components/EditBranch";


const Routing = () => {
    return (
        <Switch>
            <PublicRoute exact path='/'
                            component={HomePage}/>
            <AdminRoute exact path='/dashboard'
                        component={Dashboard}/>
            <AdminRoute exact path='/branch'
                        component={BranchTable}/>
            <AdminRoute exact path='/add-branch'
                        component={AddBranch}/>
            <AdminRoute exact path='/branch/update/:id'
                        component={EditBranch}/>
        </Switch>
    );
}

export default Routing;