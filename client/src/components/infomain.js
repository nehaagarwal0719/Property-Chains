import React  , {Component} from 'react';
import { BrowserRouter as Router,Switch, Route} from "react-router-dom";
import {Link} from "react-router-dom";
import Bid from './bid.js';
import Info from './info.js';
import Moment from 'react-moment';
var FontAwesome = require('react-fontawesome')

class infoMain extends Component{

  constructor (props){
    super(props) 
    this.state ={
      account:'',
      loading : true
    }
  }

  render()
  {
    return(
       <div id="content">
             {this.props.ledgers.map((ledger,key1)=>{
                 if(this.props.lidd==ledger.p_id){
                    return(
                      <div class="container">
                        <div class="row">
                           <div class="card one bg-light  card1 ">
                             <div class="card-body">
                                <div class="row">
                                  <label class="col-lg-2 ">Owner:</label>
                                  <label className="col-lg-10">{ledger.new_owner}</label>
                               </div>
                               <div class="row">
                                 <label class="col-lg-2">Time:</label>
                                 <label className="col-lg-10"><Moment unix>{ledger.time}</Moment></label>
                              </div>
                            </div>
                          </div>
                        </div>
                         <FontAwesome
                        className='super-crazy-colors'
                        name='arrow-down arrow1'
                        size='5x'

                      />
                      </div> 

                        );
                          }
                   })}
               <div class="card one bg-light  card1 ">
                             <div class="card-body two">
                               Property Created
                               <FontAwesome
                                className='super-crazy-colors'
                                name='home'
                                size='3x'

                              />
                            </div>
                          </div>
        </div>
    );
  }
}


export default infoMain;
