import React from "react";
import axios from 'axios';
import Select from "react-dropdown-select";

export default class User extends React.Component {

   constructor(props){
      super(props);

      this.state = {
         fields: {},
         errors: {},
         countryList: []
      }
      this.getCountryList();
   }

   
   getCountryList(){
      axios({
            method: "get",
            url: "/country",
            headers: {'Content-Type': 'application/json'}
      })
      .then((res) => {
         this.state.countryList = res.data;      
         this.setState(this.state);
      }, (error) => {
         let message = "An error occurred while getting country list."
         if(error.response.data.message){
            message += " Detail: " + error.response.data.message;
         }
         alert(message);
      });
   }

   handleValidation(){
      let fields = this.state.fields;
      let errors = {};
      let formIsValid = true;

      //Name
      if(!fields["name"]){
         formIsValid = false;
         errors["name"] = "Name cannot be empty";
      }

      if(typeof fields["name"] !== "undefined"){
         if(!fields["name"].match(/^[a-zA-Z]+$/)){
            formIsValid = false;
            errors["name"] = "Name has only letters";
         }        
      }

      //Sex
      if(!fields["sex"]){
         formIsValid = false;
         errors["sex"] = "Sex cannot be empty";
      }

      //Age
      if(!fields["age"]){
         formIsValid = false;
         errors["age"] = "Age cannot be empty";
      }

      if(typeof fields["age"] !== "undefined"){
         if(fields["age"] < 0){
            formIsValid = false;
            errors["age"] = "Age must be greather than 0";
         }        
      }

      //Country
      if(!fields["country"]){
         formIsValid = false;
         errors["country"] = "Country cannot be empty";
      }

      this.setState({errors: errors});
      return formIsValid;
   }
   
   userFormSubmit(e){
      e.preventDefault();

      if(this.handleValidation()){         
         let data = JSON.stringify(this.state.fields);
        
         axios({
            method: "post",
            url: "/user",
            data: data,
            headers: {'Content-Type': 'application/json'}
         })
         .then((res) => {
            this.props.history.push("/success", {name: res.data.name});
         }, (error) => {
            let message = "An error occurred while applying."
            if(error.response.data.message){
               message += " Detail: " + error.response.data.message;
            }
            alert(message);
         });
      }

   }

   handleChange(field, e){    
      let fields = this.state.fields;
      fields[field] = e.target.value;        
      this.setState({fields});
   }

   handleChangeForCountry(field, e){         
      let fields = this.state.fields;
      fields[field] = e[0].value;        
      this.setState({fields});
   }

   render(){
      return (
         <div>
            <br />
            <header className="App-header">
               Some Useful Government Service       
            </header>
            <br />         
            <form name="userform" onSubmit= {this.userFormSubmit.bind(this)}>
               <table className="form-table">
                  <tbody className="form-table-body">
                     <tr className="col-md-12">
                        <td className="col-md-6">
                           <label>Name</label>
                        </td>
                        <td className="col-md-6">
                           <input name="name" type="text" size="30" 
                              className="form-item-height form-item-border"
                              onChange={this.handleChange.bind(this, "name")} 
                              value={this.state.fields["name"]}/>
                        </td>
                     </tr>
                     <tr className="col-md-12">
                        <td className="col-md-6"></td>
                        <td className="col-md-6">
                           <span style={{color: "red"}}>{this.state.errors["name"]}</span>
                        </td>
                     </tr>

                     <tr className="col-md-12">
                        <td className="col-md-6">
                           <label>Sex</label>
                        </td>
                        <td className="col-md-6">
                           <input type="radio" id="male" name="sex" value="male"
                              onChange={this.handleChange.bind(this, "sex")} />
                           <label>Male</label>
                           <span>  </span>
                           <input type="radio" id="female" name="sex" value="female"
                              onChange={this.handleChange.bind(this, "sex")} />
                           <label >Female</label>                    
                        </td>
                     </tr>
                     <tr className="col-md-12">
                        <td className="col-md-6"></td>
                        <td className="col-md-6">
                           <span style={{color: "red"}}>{this.state.errors["sex"]}</span>
                        </td>
                     </tr>
                     
                     <tr className="col-md-12">
                        <td className="col-md-6">
                           <label>Age</label>
                        </td>
                        <td className="col-md-6">
                           <input name="age" type="number"
                              className="form-item-height form-item-border"
                              onChange={this.handleChange.bind(this, "age")} 
                              value={this.state.fields["age"]}/>
                        </td>
                     </tr>
                     <tr className="col-md-12">
                        <td className="col-md-6"></td>
                        <td className="col-md-6">
                           <span style={{color: "red"}}>{this.state.errors["age"]}</span>
                        </td>
                     </tr>

                     <tr className="col-md-12">
                        <td className="col-md-6">
                           <label>Country</label>
                        </td>
                        <td className="col-md-6">
                           <Select name="country"
                              className="form-item-height form-item-border"
                              options={this.state.countryList}  
                              onChange={this.handleChangeForCountry.bind(this, "country")}
                              value={this.state.fields["country"]}
                              placeholder="Select a country" />
                        </td>
                     </tr>
                     <tr className="col-md-12">
                        <td className="col-md-6"></td>
                        <td className="col-md-6">
                           <span style={{color: "red"}}>{this.state.errors["country"]}</span>
                        </td>
                     </tr>

                     <tr className="col-md-12">
                        <td className="col-md-6">
                           <button type="submit" className="form-item-height">Apply</button>
                        </td>
                        <td className="col-md-6"></td>
                     </tr>
                  </tbody>
               </table>
            </form>
         </div>
   )}
}

