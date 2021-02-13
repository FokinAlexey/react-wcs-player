import { Component } from "react";
import React from "react";
import { Paper, TextField } from '@material-ui/core';

class SearchBar extends React.Component{
    state = {
        searchTerm : '',
    }
    render(){
        return(
        <div className="papper">  
               <Paper elevation = {6} style = {{padding:'10px'}}>
           <form>
               <TextField fullWidth label = "Search...">

               </TextField>
           </form>
       </Paper>
        </div>
    
        )
        
    }
}
export default SearchBar