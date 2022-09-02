import React, {useState, useEffect} from 'react';
import {useNavigate, useParams, Link} from "react-router-dom";
import "../display/AddEdit.css";
import axios from "axios";
import {toast} from "react-toastify";

const initialState= {
	EventID: "",
	ArtistID: "",
	Date: "",
}

const AddEdit = () => {
	const [state, setState]= useState(initialState);

	const {EventID, ArtistID, Date} = state;

	const navigate = useNavigate();

	const {id:ScheduleID} = useParams();

	

	useEffect(() => { 
		axios.get(`http://localhost:5000/Schedule/${ScheduleID}`)
		.then((resp) => setState({EventID:resp.data.EventID, ArtistID:resp.data.ArtistID, Date:resp.data.Date}));
	}, [ScheduleID]);


	const handleSubmit = (e) => {
		e.preventDefault();
		if(!EventID || !ArtistID || !Date){
			toast.error('Please provide value into each input field')
		}else{
			if(!ScheduleID){
				axios.post("http://localhost:5000/Schedule",{
				EventID,
				ArtistID,
				Date
			}).then(() => {
				setState({EventID:"", ArtistID:"", Date:""});
			}).catch((err)=>toast.error(err.response.data));
			toast.success('Schedule Added Successfully');

			}else{
				axios.put(`http://localhost:5000/Schedule/${ScheduleID}`,{
				EventID,
				ArtistID,
				Date
			}).then(() => {
				setState({EventID:"", ArtistID:"", Date:""});
			}).catch((err)=>toast.error(err.response.data));
			toast.success('Schedule Updated Successfully');
			}
			
			setTimeout(() => navigate("/Homesc"), 500);
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
				<label htmlFor="EventID">EventID</label>
				<input
				type="number"
				id="EventID"
				name="EventID"
				placeholder="Enter Event ID Here"
				value={EventID || ""}
				onChange={handleInputChange}
				/>
				<label htmlFor="ArtistID">ArtistID</label>
				<input
				type="number"
				id="ArtistID"
				name="ArtistID"
				placeholder="Enter Artist ID Here"
				value={ArtistID || ""}
				onChange={handleInputChange}
				/>
				<label htmlFor="Date">Date<br/><br/></label>
				<input
				type="date"
				id="Date"
				name="Date"
				placeholder="Select date here"
				value={Date || ""}
				onChange={handleInputChange}
				/>
				<input type="submit" value={ScheduleID ? "Update" : "Save"}/>
				<Link to="/Homesc">
				<input type="button" value="Go Back" /> 
				</Link>
				</form>
		</div>
	);
};

export default AddEdit;