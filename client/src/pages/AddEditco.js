import React, {useState, useEffect} from 'react';
import {useNavigate, useParams, Link} from "react-router-dom";
import "../display/AddEdit.css";
import axios from "axios";
import {toast} from "react-toastify";

const initialState= {
	StartDate: "",
	EndDate: "",
	RoyaltyPercentage: "",
	ContractTerms: "",
}

const AddEditco = () => {
	const [state, setState]= useState(initialState);

	const {StartDate, EndDate, RoyaltyPercentage, ContractTerms} = state;

	const navigate = useNavigate();

	const {id:ContractID} = useParams();

	

	useEffect(() => { 
		axios.get(`http://localhost:5000/Contract/${ContractID}`)
		.then((resp) => setState({StartDate:resp.data.StartDate, EndDate:resp.data.EndDate, RoyaltyPercentage:resp.data.RoyaltyPercentage, ContractTerms:resp.data.ContractTerms}));
	}, [ContractID]);


	const handleSubmit = (e) => {
		e.preventDefault();
		if(!StartDate || !EndDate || !RoyaltyPercentage || !ContractTerms){
			toast.error('Please provide value into each input field')
		}else{
			if(!ContractID){
				axios.post("http://localhost:5000/Contract",{
				StartDate,
				EndDate,
				RoyaltyPercentage,
				ContractTerms
			}).then(() => {
				setState({StartDate:"", EndDate:"", RoyaltyPercentage:"", ContractTerms:""});
			}).catch((err)=>toast.error(err.response.data));
			toast.success('Contract Added Successfully');

			}else{
				axios.put(`http://localhost:5000/Contract/${ContractID}`,{
				StartDate,
				EndDate,
				RoyaltyPercentage,
				ContractTerms
			}).then(() => {
				setState({StartDate:"", EndDate:"", RoyaltyPercentage:"", ContractTerms:""});
			}).catch((err)=>toast.error(err.response.data));
			toast.success('Contract Updated Successfully');
			}
			
			setTimeout(() => navigate("/Homeco"), 500);
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
				<label htmlFor="StartDate">Start Date</label>
				<input
				type="date"
				id="StartDate"
				name="StartDate"
				placeholder="Enter Start Date Here"
				value={StartDate || ""}
				onChange={handleInputChange}
				/>
				<label htmlFor="EndDate">EndDate</label>
				<input
				type="date"
				id="EndDate"
				name="EndDate"
				placeholder="Enter End Date Here"
				value={EndDate || ""}
				onChange={handleInputChange}
				/>
				<label htmlFor="RoyaltyPercentage">Royalty Percentage</label>
				<input
				type="number"
				id="RoyaltyPercentage"
				name="RoyaltyPercentage"
				placeholder="Enter Royalty Percentage"
				value={RoyaltyPercentage || ""}
				onChange={handleInputChange}
				/>
				<label htmlFor="ContractTerms">Royalty Percentage</label>
				<input
				type="text"
				id="ContractTerms"
				name="ContractTerms"
				placeholder="Enter Contract Terms"
				value={ContractTerms || ""}
				onChange={handleInputChange}
				/>
				<input type="submit" value={ContractID ? "Update" : "Save"}/>
				<Link to="/Homeco">
				<input type="button" value="Go Back" /> 
				</Link>
				</form>
		</div>
	);
};

export default AddEditco;