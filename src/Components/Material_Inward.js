import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Button} from 'react-bootstrap';


class Material_Inward extends Component
 {

  Clicked(e)
  {
    e.preventDefault();
    const inward = {
      id: 1,
      voucher_no: document.getElementById('voucher_no').value,
      date: document.getElementById('date').value,
      inward_invoice_no: document.getElementById('inward_invoice').value,
      party_name: document.getElementById('party_name').value,
      item_name: document.getElementById('item_name').value,
      quantity: document.getElementById('qty').value,
      per_unit_price: document.getElementById('unit_price').value,
      material_type_id: document.getElementById('material_type').value
    }
    console.log(document.getElementById('btn_click').value());
  }

  render()
  {
    return (
      <div>
        <form onSubmit = {this.Clicked.bind(this)}>
          Voucher No. <input type="text" placeholder="Voucher No." id="voucher_no"/>
          <br/>
          <br/>
          Date. <input type="text" placeholder="Date" id="date"/>
          <br/>
          <br/>
          Inward Invoice No. <input type="text" placeholder="Inward Invoice No." id="inward_invoice"/>
          <br/>
          <br/>
          Party Name <input type="text" placeholder="Party Name" id="party_name"/>
          <br/>
          <br/>
          Item Name <input type="text" placeholder="Item Name" id="item_name"/>
          <br/>
          <br/>
          Quantity <input type="text" placeholder="Quantity" id="qty"/>
          <br/>
          <br/>
          Price/unit <input type="text" placeholder="Price/unit" id="unit_price"/>
          <br/>
          <br/>
          Material type <input type="text" placeholder="Material Type" id="material_type"/>
          <br/>
          <br/>
          <button type="submit" bsSize="small">Insert</button>
        </form>
      </div>
    )
  }
}

export default Material_Inward;
