import { useState } from "react"


function MyComponent() {

    const [name, setName] = useState("Enter name");
    const [quantity, setQuantity] = useState(0);
    const [comment, setComment] = useState("");
    const [payment, setPayment] = useState("");
    const [shipping, setShipping] = useState("");
    




    function handleNameChange(event) {
        setName(event.target.value);
    }

    function handleQuantityChange(event) {
        setQuantity(event.target.value);
    }

    function handleCommentChange(event) {
        setComment(event.target.value);
    }

    function handlePaymentChange(event) {
        setPayment(event.target.value);
    }

    function handleShipmentChange(event) {
        setShipping(event.target.value);
    }

    return (
        <div>
            <input value={name} onChange={handleNameChange} />
            <p>Name: {name}</p>

            <input value={quantity} on onChange={handleQuantityChange} type="number" />
            <p>Quantity: {quantity}</p>

            <textarea value={comment} onChange={handleCommentChange} placeholder="Write comment" />
            <p>Comment: {comment}</p>

            <select value={payment} onChange={handlePaymentChange}>
                <option value="Select option"></option>
                <option value="Visa">Visa</option>
                <option value="Mastercard">Mastercard</option>
                <option value="Giftcard">Giftcard</option>
            </select>

            <p>Payment: {payment}</p>

            <label>
                <input type="radio" value="Pick Up"
                checked={shipping==="Pick Up"}
                onChange={handleShipmentChange}/>
                Pick Up
                </label>
                <br />
            <label>
            <input type="radio" value="Delivery"
                checked={shipping==="Delivery"}
                onChange={handleShipmentChange}/>
                Delivery
                </label>
<p>Shipping: {shipping}</p>

        </div>
    );
}

export default MyComponent