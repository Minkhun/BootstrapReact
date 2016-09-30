import React, { Component } from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import {
    Button,ButtonGroup,
    Form,FormGroup,ControlLabel,FormControl,
    HelpBlock,Checkbox,Radio,Grid,Row,Col
        } from 'react-bootstrap';

class App extends Component {
  
  state = {
    name:"",
    color:"",
    movies:[],
    games:[],
    gender:"",
    phone:""
  };
  
  onChange = (fieldName)=>{
    return(event)=>{
      var state=this.state;
      state[fieldName]=event.target.value;
      this.setState(state);
    }
  };
  
  checkboxChange = (fieldName)=>{
    return (event)=>{
    var targetArray = this.state[fieldName];
    if(targetArray.indexOf(event.target.value)>=0)
    targetArray.splice(
      targetArray.indexOf(event.target.value),1
    );
    else
    targetArray.push(event.target.value);
    var state = this.state;
    state[fieldName]=targetArray;
    this.setState(state);
  }
};


  
  render() {
    return (
      <div className="container">
        <div className="page-header">    
          <h2>Student Survey!!!</h2>
        </div>
        <p className="jumbotron">
        
        <Grid>
        <Row>
          <Col md={6}>
        
        <Form>
        <FormGroup>
        <ControlLabel> Name:</ControlLabel>
        <FormControl type="text"
                       placeholder="type your name here...."
                       value={this.state.name}
                       onChange={this.onChange('name')}
                       />
         <HelpBlock>use to identify you</HelpBlock>
      </FormGroup>
      
        
        
        <FormGroup>
        <ControlLabel> Choose Favorite Color</ControlLabel>
        <FormControl componentClass="select" 
                      placeholder="Name here..."
                      value={this.state.color}
                       onChange={this.onChange('color')} >                  
                      <option value="Red">Red</option>
                      <option value="Green">Green</option>
                      <option value="Blue">Blue</option>
        
        </FormControl>
        </FormGroup>
        
        <FormGroup>
        <ControlLabel>Favorite  Movie</ControlLabel>
        <Checkbox value="The Walking Dead"
       checked={this.state.movies.indexOf('The Walking Dead')>=0 ? true:false}  
                  onChange={this.checkboxChange('movies')}>
                  The Walking Dead
        </Checkbox>        
        <Checkbox value="Train to Busan"
        checked={this.state.movies.indexOf('Train to Busan')>=0 ? true:false}  
                  onChange={this.checkboxChange('movies')}>
                  Train to Busan
         </Checkbox>     
        <Checkbox value = "Resident Evil"
        checked={this.state.movies.indexOf('Resident Evil')>=0 ? true:false}  
                  onChange={this.checkboxChange('movies')}>
                 Resident Evil
         </Checkbox>     
        </FormGroup>
        
        <FormGroup>
        <ControlLabel>Gender </ControlLabel>
        <Radio name="gender" value="Male"
           onChange={this.onChange('gender')}>Male  
        </Radio>           
        <Radio name="gender" value="Female"
         onChange={this.onChange('gender')}>Female
         </Radio>
        </FormGroup>      
       
           </Form>
           
           
           
           
        
           <FormGroup>       
        <ControlLabel> Course: </ControlLabel>
        <FormControl type="text"
                       placeholder="type your course here.... "
                       value={this.state.course}
                       onChange={this.onChange('course')}
                       />             
                        
        <HelpBlock>use to identify you</HelpBlock>
        </FormGroup>
        
         <FormGroup>
        <ControlLabel>Favorite  Games</ControlLabel>
          <Checkbox value = "Pokemon Go"
        checked={this.state.games.indexOf('Pokemon Go')>=0 ? true:false}  
                  onChange={this.checkboxChange('games')}>
                 Pokemon Go
         </Checkbox> 
         <Checkbox value = "Clash of Clans"
        checked={this.state.games.indexOf('Clash of Clans')>=0 ? true:false}  
                  onChange={this.checkboxChange('games')}>
                 Clash of Clans         
         </Checkbox>    
         <Checkbox value = "Flappy Bird"
        checked={this.state.games.indexOf('Flappy Bird')>=0 ? true:false}  
                  onChange={this.checkboxChange('games')}>
                 Flappy Bird         
         </Checkbox> 
         <Checkbox value = "Shadow Fight"
        checked={this.state.games.indexOf('Shadow Fight')>=0 ? true:false}  
                  onChange={this.checkboxChange('games')}>
                 Shadow Fight        
         </Checkbox>       
         </FormGroup>
         
          <FormGroup>
        <ControlLabel>Phone </ControlLabel>
         <Radio name="phone" value="IPhone"
         onChange={this.onChange('phone')}>IPhone
         </Radio>
         <Radio name="phone" value="Samsung"
         onChange={this.onChange('phone')}>Samsung
         </Radio>
         <Radio name="phone" value="Nokia"
         onChange={this.onChange('phone')}>Nokia
         </Radio>
         </FormGroup>
        
           
           <ButtonGroup>
          <Button bsStyle="info"><span className="glyphicon glyphicon-info-sign"></span>  Info Button  </Button>        
           <Button bsStyle="primary"> Primary Button </Button>
           <Button bsStyle="warning"> Warning Button </Button>
           <Button bsStyle="danger"> Error Button </Button>
           </ButtonGroup>  
           
           </Col>
           <Col md={6}>
           <strong>Name : {this.state.name}</strong><br/>
           <strong>Color : {this.state.color}</strong><br/>
           <strong>Movies : {
             this.state.movies.map((item,i)=>{
               return <div>
               <span className="label label-primary">{item}</span>
               </div>
             })
            }</strong><br/>
           <strong>Gender : {this.state.gender}</strong><br/>
           <strong>Course : {this.state.course}</strong><br/>
           <strong>Games : {
             this.state.games.map((item,i)=>{
               return <div>
               <span className="label label-warning">{item}</span>
               </div>
             })
            }</strong><br/>
            
           <strong>Phone : {this.state.phone}</strong><br/>    
           </Col>
           </Row>
           </Grid>
        </p>
      </div>
    );
  }
}






export default App;


