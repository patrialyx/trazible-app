import React, { Component } from 'react';
import Navbar from './Navbar_donor'

import Card from "react-bootstrap/Card";
import BaldCypress from "../bald-cypress.jpg"
import './DonorLogic.css';



class DonorLogic extends Component {
    constructor(props) {
      super(props)
    }
  

    render() {
      return (
      <div>
        <div class="flexbox-container" id="content">
        <div class="row mt-5 mb-5 ml-5 mr-10">
        {this.props.products.map((product, key) => {
          return (
          <Card style={{ width: '20rem' }} key={key}>
            <Card.Img variant="top" src={BaldCypress} />
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                <p>&nbsp;</p>
                {product.price.toString()}
              </Card.Text>
              <a href="http://localhost:3000/buy" class="btn btn-primary" role="button">
                  Plant
              </a>
            </Card.Body>
          </Card>
          )
          }
        )
        }
        </div>
        )
         
       </div>
       </div>
     )
   }
 }

export default DonorLogic;