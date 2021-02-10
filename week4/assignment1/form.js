import React from 'react'

class Form extends React.Component {

  
        constructor(props){
            super(props)
            this.state= {          
            }
        }
    
        render(){
    return(

        <form>  
            <div id="input1">
                <label id="label">User Input</label>
                <br/>
                <input
                 type="text"                  
                 value={this.props.userinput} 
                 onChange={this.props.handleChange}/>
                <br/>
            </div> 
        </form>
    )}

}

export default Form

