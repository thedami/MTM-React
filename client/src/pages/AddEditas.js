import React, {useState, useEffect} from 'react';
import {useNavigate, useParams, Link} from "react-router-dom";
import "../display/AddEdit.css";
import axios from "axios";
import {toast} from "react-toastify";

const initialState= {
	LastName: "",
	FirstName: "",
}

const AddEditas = () => {
	const [state, setState]= useState(initialState);

	const {LastName, FirstName} = state;

	const navigate = useNavigate();

	const {id:AsstID} = useParams();

	

	useEffect(() => { 
		axios.get(`http://localhost:5000/Asst/${AsstID}`)
		.then((resp) => setState({LastName:resp.data.LastName, FirstName:resp.data.FirstName}));
	}, [AsstID]);


	const handleSubmit = (e) => {
		e.preventDefault();
		if(!LastName || !FirstName){
			toast.error('Please provide value into each input field')
		}else{
			if(!AsstID){
				axios.post("http://localhost:5000/Asst",{
				LastName,
				FirstName
			}).then(() => {
				setState({LastName:"", FirstName:""});
			}).catch((err)=>toast.error(err.response.data));
			toast.success('Assistant Added Successfully');

			}else{
				axios.put(`http://localhost:5000/Asst/${AsstID}`,{
				LastName,
				FirstName
			}).then(() => {
				setState({LastName:"", FirstName:""});
			}).catch((err)=>toast.error(err.response.data));
			toast.success('Assistant Updated Successfully');
			}
			
			setTimeout(() => navigate("/Homeas"), 500);
		}
	};
 
	const handleInputChange = (e) => {
		const{name,value} = e.target;
		setState({...state,[name]:value});
	};
	return(
		<div style={{marginTop: "100px"}}>
			<form style={{
				margin: "auto",
				padding: "15px",
				maxWidth: "400px",
				aligncontent: "center",
			}}
			onSubmit={handleSubmit}
			>
				<label htmlFor="LastName">LastName</label>
				<input
				type="text"
				id="LastName"
				name="LastName"
				placeholder="Enter Lastname Here"
				value={LastName || ""}
				onChange={handleInputChange}
				/>
				<label htmlFor="FirstName">FirstName</label>
				<input
				type="text"
				id="FirstName"
				name="FirstName"
				placeholder="Enter Firstname Here"
				value={FirstName || ""}
				onChange={handleInputChange}
				/>
				<input type="submit" value={AsstID ? "Update" : "Save"}/>
				<Link to="/Homeas">
				<input type="button" value="Go Back" /> 
				</Link>
				</form>
		</div>
	);
};

export default AddEditas;