import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './App.css';

function Form() {
	const [name , setName] = useState('');
	const [picture, setPicture] = useState('');
	const [description , setDescription] = useState('');
	const [LinkIn, setLinkedIn] = useState('');
	const [fb , setFb] = useState('');

	
	const handleNameChange =(e)=>{
	setName(e.target.value);
	}
	
	const handlePicChange =(e)=>{
    setPicture(e.target.value);
	}
	
	const handleDescpChange =(e)=>{
    setDescription(e.target.value);
	}
	
	const handleLinkedInChange =(e)=>{
    setLinkedIn(e.target.value);
	}
	
	const handleConfFbChange =(e)=>{
    setFb(e.target.value);
	}
	
	const handleSubmit=(e)=>{

	

	}
    return (
	<div className="App">
	<header className="App-header">
	<form onSubmit={(e) => {handleSubmit(e)}}>
	
	<img src="/gfg.png" />
		<label >
		Name:
		</label><br/>
		<input type="text" value={name} required onChange={(e)
			=> {handleNameChange(e)}} /><br/>
		
		<label >
		Age:
		</label><br/>
		<input type="text" value={picture} required onChange={(e)
			=> {handlePicChange(e)}} /><br/>
			
		<label>
		Description:
		</label><br/>
		<input type="email" value={description} required onChange={(e)
				=> {handleDescpChange(e)}} /><br/>
		<label>
		LinkedIn:
		</label><br/>
		<input type="password" value={LinkIn} required onChange={(e)
			=> {handleLinkedInChange(e)}} /><br/>
			
		<label>
		fb:
		</label><br/>
		<input type="text" value={fb} required onChange={(e)
			=> {handleConfFbChange(e)}} /><br/>
				
		<input type="submit" value="Submit"/>
	</form>
	</header>
	</div>
);
}

export default Form;
