import React, {useState, useEffect} from 'react';
import {useNavigate, useParams, Link} from "react-router-dom";
import "../display/AddEdit.css";
import axios from "axios";
import {toast} from "react-toastify";

const initialState= {
	LastName: "",
	FirstName: "",
	AsstID: "",
}

const AddEditam = () => {
	const [state, setState]= useState(initialState);

	const {LastName, FirstName, AsstID} = state;

	const navigate = useNavigate();

	const {id:AManagerID} = useParams();

	

	useEffect(() => { 
		axios.get(`http://localhost:5000/AManager/${AManagerID}`)
		.then((resp) => setState({LastName:resp.data.LastName, FirstName:resp.data.FirstName, AsstID:resp.data.AsstID}));
	}, [AManagerID]);


	const handleSubmit = (e) => {
		e.preventDefault();
		if(!LastName || !FirstName || !AsstID){
			toast.error('Please provide value into each input field')
		}else{
			if(!AManagerID){
				axios.post("http://localhost:5000/AManager",{
				LastName,
				FirstName,
				AsstID
			}).then(() => {
				setState({LastName:"", FirstName:"", AsstID:""});
			}).catch((err)=>toast.error(err.response.data));
			toast.success('Artist Manager Added Successfully');

			}else{
				axios.put(`http://localhost:5000/AManager/${AManagerID}`,{
				LastName,
				FirstName,
				AsstID
			}).then(() => {
				setState({LastName:"", FirstName:"", AsstID:""});
			}).catch((err)=>toast.error(err.response.data));
			toast.success('Artist Manager Updated Successfully');
			}
			
			setTimeout(() => navigate("/Homeam"), 500);
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
				<label htmlFor="AsstID">AsstID</label>
				<input
				type="number"
				id="AsstID"
				name="AsstID"
				placeholder="Enter Assistant ID"
				value={AsstID || ""}
				onChange={handleInputChange}
				/>
				<input type="submit" value={AManagerID ? "Update" : "Save"}/>
				<Link to="/Homeam">
				<input type="button" value="Go Back" /> 
				</Link>
				</form>
		</div>
	);
};

export default AddEditam;