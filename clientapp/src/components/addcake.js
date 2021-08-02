import React from "react";
import axios from 'axios';
import { setCookie, getCookie, eraseCookie } from '../utils/cookie';
import Logout from './Logout';

export default class AddCake extends React.Component {

   constructor(props){
      super(props);

      this.state = {
         fields: {},
         errors: {},
         cakeList:[]
      }
   }

   handleValidation(){
      let fields = this.state.fields;
      let errors = {};
      let formIsValid = true;

      //title
      if(!fields["title"]){
         formIsValid = false;
         errors["title"] = "Title cannot be empty";
      }

      //description
      if(!fields["description"]){
         formIsValid = false;
         errors["description"] = "Description cannot be empty";
      }

      this.setState({errors: errors});
      return formIsValid;
   }

   saveACakeToDatabase(e){
      e.preventDefault();

      if(this.handleValidation()){
         let data = JSON.stringify(this.state.fields);

         axios({
            method: "post",
            url: "http://localhost:8080/cake",
            data: data,
            headers: {
              'Content-Type': 'application/json',
              'Authorization': getCookie('id_token')
            }
         })
         .then((res) => {
            alert("Cake is saved successfuly.");

            let stateCopy = this.state;
            let fields = stateCopy.fields;
            fields.title = '';
            fields.description = '';
            fields.imageUrl = '';
            stateCopy.fields = fields;
            this.setState(stateCopy);

         }, (error) => {
            let message = "An error occurred while saving to database."
            if(error.response.data.message){
               message += " Detail: " + error.response.data.message;
            }
            alert(message);
         });
      }
   }

   saveCakesToDatabase(e){
      e.preventDefault();

      let data = this.state.cakeList;

      axios({
         method: "post",
         url: "http://localhost:8080/cakes",
         data: data,
         headers: {
           'Content-Type': 'application/json',
           'Authorization': getCookie('id_token')
         }
      })
      .then((res) => {
         alert("Cakes is saved successfuly.");

         let stateCopy = this.state;
         stateCopy.cakeList = [];
         this.setState(stateCopy);

      }, (error) => {
         let message = "An error occurred while saving to database."
         if(error.response.data.message){
            message += " Detail: " + error.response.data.message;
         }
         alert(message);
      });
   }

   addToList(e){
      e.preventDefault();

      if(this.handleValidation()){
         let data = JSON.stringify(this.state.fields);

         let stateCopy = this.state;
         let list = stateCopy.cakeList;
         list.push(data);
         stateCopy.cakeList = list;
         let fields = stateCopy.fields;
         fields.title = '';
         fields.description = '';
         fields.imageUrl = '';
         stateCopy.fields = fields;
         this.setState(stateCopy);
      }

   }

   deleteCakeFromList(index, e){
      e.preventDefault();

      let stateCopy = this.state;
      let list = stateCopy.cakeList;
      list.splice(index,1);
      stateCopy.cakeList = list;
      this.setState(stateCopy);
   }

   handleChange(field, e){
      let fields = this.state.fields;
      fields[field] = e.target.value;
      this.setState({fields});
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
            <form name="userform">
               <table className="form-table">
                  <tbody className="form-table-body">
                     <tr className="col-md-12">
                        <td className="col-md-6">
                           <label>Title</label>
                        </td>
                        <td className="col-md-6">
                           <input name="title" type="text" size="30"
                              className="form-item-height form-item-border"
                              onChange={this.handleChange.bind(this, "title")}
                              value={this.state.fields["title"]}/>
                        </td>
                     </tr>
                     <tr className="col-md-12">
                        <td className="col-md-6"></td>
                        <td className="col-md-6">
                           <span style={{color: "red"}}>{this.state.errors["title"]}</span>
                        </td>
                     </tr>

                     <tr className="col-md-12">
                        <td className="col-md-6">
                           <label>Description</label>
                        </td>
                        <td className="col-md-6">
                           <input name="description" type="text" size="30"
                              className="form-item-height form-item-border"
                              onChange={this.handleChange.bind(this, "description")}
                              value={this.state.fields["description"]}
                              text={this.state.fields["description"]}/>
                        </td>
                     </tr>
                     <tr className="col-md-12">
                        <td className="col-md-6"></td>
                        <td className="col-md-6">
                           <span style={{color: "red"}}>{this.state.errors["description"]}</span>
                        </td>
                     </tr>

                     <tr className="col-md-12">
                        <td className="col-md-6">
                           <label>Image Url</label>
                        </td>
                        <td className="col-md-6">
                           <input name="imageUrl" type="text" size="30"
                              className="form-item-height form-item-border"
                              onChange={this.handleChange.bind(this, "imageUrl")}
                              value={this.state.fields["imageUrl"]}/>
                        </td>
                     </tr>

                     <tr className="col-md-12">
                        <td className="col-md-6">
                           <button onClick={this.saveACakeToDatabase.bind(this)} className="form-item-height">Save to Database</button>
                        </td>
                        <td className="col-md-6">
                           <button onClick={this.addToList.bind(this)} className="form-item-height">Add to List</button>
                        </td>
                     </tr>
                  </tbody>
               </table>
            </form>

            <br />
            <br />
            <table className="form-table">
             <thead className="form-table-body">
               <tr>
                 <th colSpan={4} className="form-table-th">Cake List</th>
               </tr>
               <tr>
                 <th className="form-table-th">Title</th>
                 <th className="form-table-th">Description</th>
                 <th className="form-table-th">Image Url</th>
                 <th className="form-table-th"></th>
               </tr>
             </thead>
             <tbody className="form-table-body">
               {this.state.cakeList.length > 0
                  ? this.state.cakeList.map((data, i) => {
                    let dataObj = JSON.parse(data);
                     return (
                       <tr key={i}>
                         <td className="form-table-tr">{dataObj.title}</td>
                         <td className="form-table-tr">{dataObj.description}</td>
                         <td className="form-table-tr">{dataObj.imageUrl}</td>
                         <td className="form-table-tr"><button onClick={this.deleteCakeFromList.bind(this,i)} className="form-item-height">Delete</button></td>
                       </tr>)
                  })
                  : <tr>
                      <td colSpan={4} className="form-table-th">List Empty</td>
                    </tr>
                }

                {this.state.cakeList.length
                   ?  <tr>
                        <td colSpan={4} className="form-table-tr"><button onClick={this.saveCakesToDatabase.bind(this)} className="form-item-height">Save Cakes to Database</button></td>
                      </tr>
                   : ''
                 }
             </tbody>
            </table>
         </div>
   )}
}
