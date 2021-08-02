import React from "react";
import axios from 'axios';
import { setCookie, getCookie, eraseCookie } from '../utils/cookie';
import Logout from './Logout';

export default class ListCakes extends React.Component {

   constructor(props){
      super(props);

      this.state = {
         fields: {},
         errors: {},
         cakeList: [{
           title: "aaa-title",
           description: "aaa-description",
           imageUrl: "aaa-imageUrl"
         }]
      }
      //this.getCakeList();
   }

   getCakeList(){
      axios({
            method: "get",
            url: "http://localhost:8080/cake",
            headers: {
              'Content-Type': 'application/json',
              'Authorization': getCookie('id_token')
            }
      })
      .then((res) => {
         this.state.cakelist = res.data;
         this.setState(this.state);
      }, (error) => {
         let message = "An error occurred while getting cake list."
         if(error.response.data.message){
            message += " Detail: " + error.response.data.message;
         }
         alert(message);
      });
   }

   downloadCakeList(){
      axios({
            method: "get",
            url: "http://localhost:8080/cakes",
            headers: {
              'Content-Type': 'application/json',
              'Authorization': getCookie('id_token')
            }
      })
      .then((res) => {
         this.state.cakelist = res.data;
         this.setState(this.state);
      }, (error) => {
         let message = "An error occurred while downloading cake list."
         if(error.response.data.message){
            message += " Detail: " + error.response.data.message;
         }
         alert(message);
      });
   }

   render(){
      return (
         <div>

            <Logout thisClass={this}/>

            <br />
            <header className="App-header">
               Add Cake or Cakes to Database
            </header>
            <br />

            <table className="form-table">
             <thead className="form-table-body">
               <tr>
                 <th colSpan={3} className="form-table-th">Cake List</th>
               </tr>
               <tr>
                 <th className="form-table-th">Title</th>
                 <th className="form-table-th">Description</th>
                 <th className="form-table-th">Image Url</th>
               </tr>
             </thead>
             <tbody className="form-table-body">
               {this.state.cakeList.length > 0
                  ? this.state.cakeList.map((data, i) => {
                    let dataObj = data;
                     return (
                       <tr key={i}>
                         <td className="form-table-tr">{dataObj.title}</td>
                         <td className="form-table-tr">{dataObj.description}</td>
                         <td className="form-table-tr">{dataObj.imageUrl}</td>
                       </tr>)
                  })
                  : <tr>
                      <td colSpan={4} className="form-table-th">List Empty</td>
                    </tr>
                }

                {this.state.cakeList.length
                   ?  <tr>
                        <td colSpan={3} className="form-table-tr"><button onClick={this.downloadCakeList.bind(this)} className="form-item-height">Download Cake List</button></td>
                      </tr>
                   : ''
                 }
             </tbody>
            </table>
         </div>
   )}
}
