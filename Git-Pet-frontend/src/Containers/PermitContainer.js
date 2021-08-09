import React, { PureComponent } from 'react'

class PermitContainer extends PureComponent {
    
    state = {
        
    }
    render() {
        let order =this.props.order
        return (
            <div>
                <p> Order:{order.id}</p>
                <p>User ID:{order.user_id}</p>
                <p>Seller ID:{order.seller_id}</p>
                <p>Pet ID:{order.pet_id}</p>
                <p>Price:{order.price}</p>
                <p>Requested:{order.created_at}</p>
                <button>Approve</button>
            </div>
        )
    }
}

export default PermitContainer