import React, {useState, useEffect} from 'react';
import {useNavigate, useParams, Link} from "react-router-dom";
import "../display/AddEdit.css";
import axios from "axios";
import {toast} from "react-toastify";

const initialState= {
	Description: "",
	DateReceived: "",
}

const AddEditre = () => {
	const [state, setState]= useState(initialState);

	const {Description, DateReceived} = state;

	const navigate = useNavigate();

	const {id:RecommendationID} = useParams();

	

	useEffect(() => { 
		axios.get(`http://localhost:5000/Recommendation/${RecommendationID}`)
		.then((resp) => setState({Description:resp.data.Description, DateReceived:resp.data.DateReceived}));
	}, [RecommendationID]);


	const handleSubmit = (e) => {
		e.preventDefault();
		if(!Description || !DateReceived){
			toast.error('Please provide value into each input field')
		}else{
			if(!RecommendationID){
				axios.post("http://localhost:5000/Recommendation",{
				Description,
				DateReceived,
			}).then(() => {
				setState({Description:"", DateReceived:""});
			}).catch((err)=>toast.error(err.response.data));
			toast.success('Recommendation Added Successfully');

			}else{
				axios.put(`http://localhost:5000/Recommendation/${RecommendationID}`,{
				Description,
				DateReceived,
			}).then(() => {
				setState({Description:"", DateReceived:""});
			}).catch((err)=>toast.error(err.response.data));
			toast.success('Recommendation Updated Successfully');
			}
			
			setTimeout(() => navigate("/Homere"), 500);
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
				<label htmlFor="Description">Description</label>
				<input
				type="text"
				id="Description"
				name="Description"
				placeholder="Enter Description Here"
				value={Description || ""}
				onChange={handleInputChange}
				/>
				<label htmlFor="DateReceived"><strong>Date Received</strong><br/><br/></label>
				<input
				type="date"
				id="DateReceived"
				name="DateReceived"
				placeholder="Enter Date received here"
				value={DateReceived || ""}
				onChange={handleInputChange}
				/>
				<input type="submit" value={RecommendationID ? "Update" : "Save"}/>
				<Link to="/Homere">
				<input type="button" value="Go Back" /> 
				</Link>
				</form>
		</div>
	);
};

export default AddEditre;