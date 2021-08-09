import React, { PureComponent } from 'react'

class RequestContainer extends PureComponent {
    
    
    state = {
        
    }

    render() {
        let order =this.props.order
        return (
            <div>
                <div id="flex-inline-block">
                    <div class="request-dogs"></div>
                <p> Order:{order.id}</p>
                <p>User ID:{order.user_id}</p>
                <p>Seller ID:{order.seller_id}</p>
                <p>Pet ID:{order.pet_id}</p>
                <p>Price:{order.price}</p>
                <p>Requested:{order.created_at}</p>
                <button>forfeit</button>
                </div>
                
            </div>
        )
    }
}

export default RequestContainer