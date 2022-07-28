import React, { Fragment } from 'react';

import SideBarItem from '../SideBarItem';

const arr = [
    {
        label: 'Owner',
        link: '/dashboard'
    },
    {
        label: 'Product',
        link: '/branch'
    },
    {
        label: 'Delivery',
        link: '/dashboard'
    },
    {
        label: 'Branch',
        link: '/dashboard'
    },
    {
        label: 'Feedback',
        link: '/dashboard'
    },
    {
        label: 'Stock',
        link: '/branch'
    },
    {
        label: 'Billing',
        link: '/dashboard'
    },
    {
        label: 'Customer',
        link: '/dashboard'
    },
    {
        label: 'Pharmacy',
        link: '/dashboard'
    }
];

const SideBar = () => {
    return(
        <div className="Sidebar">
            {(arr) ?
                arr.map((item, i) => (
                    <Fragment key={i}>
                        <SideBarItem item = {arr[i]} />
                    </Fragment>
                )) : null
            }
        </div>
    );
}

export default SideBar;