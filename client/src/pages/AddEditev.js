import React, {useState, useEffect} from 'react';
import {useNavigate, useParams, Link} from "react-router-dom";
import "../display/AddEdit.css";
import axios from "axios";
import {toast} from "react-toastify";

const initialState= {
	Description: "",
	Date: "",
	Time: "",
	Venue: "",
	Country: "",
	Address: "",
}

const AddEditev = () => {
	const [state, setState]= useState(initialState);

	const {Description, Date, Time, Venue, Country, Address} = state;

	const navigate = useNavigate();

	const {id:EventID} = useParams();

	

	useEffect(() => { 
		axios.get(`http://localhost:5000/Event/${EventID}`)
		.then((resp) => setState({Description:resp.data.Description, Date:resp.data.Date, Time:resp.data.Time,
			Venue:resp.data.Venue, Country:resp.data.Country, Address:resp.data.Address}));
	}, [EventID]);


	const handleSubmit = (e) => {
		e.preventDefault();
		if(!Description || !Date || !Time || !Venue || !Country || !Address){
			toast.error('Please provide value into each input field')
		}else{
			if(!EventID){
				axios.post("http://localhost:5000/Event",{
				Description,
				Date,
				Time,
				Venue,
				Country,
				Address
			}).then(() => {
				setState({Description:"", Date:"", Time:"", Venue:"", Country:"", Address:""});
			}).catch((err)=>toast.error(err.response.data));
			toast.success('Event Added Successfully');

			}else{
				axios.put(`http://localhost:5000/Event/${EventID}`,{
				Description,
				Date,
				Time,
				Venue,
				Country,
				Address
			}).then(() => {
				setState({Description:"", Date:"", Time:"", Venue:"", Country:"", Address:""});
			}).catch((err)=>toast.error(err.response.data));
			toast.success('Event Updated Successfully');
			}
			
			setTimeout(() => navigate("/Homeev"), 500);
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
				<label htmlFor="Date">Date <br/></label>
				<input
				type="date"
				id="Date"
				name="Date"
				placeholder="Enter Date Here"
				value={Date || ""}
				onChange={handleInputChange}
				/>
				<br/>
				<label htmlFor="Time">Time</label>
				<input
				type="text"
				id="Time"
				name="Time"
				placeholder="Enter Time"
				value={Time || ""}
				onChange={handleInputChange}
				/>
				<br/>
				<label htmlFor="Venue">Venue</label>
				<input
				type="text"
				id="Venue"
				name="Venue"
				placeholder="Enter Venue"
				value={Venue || ""}
				onChange={handleInputChange}
				/>
				<label htmlFor="Country">Country</label>
				<input
				type="text"
				id="Country"
				name="Country"
				placeholder="Enter Country"
				value={Country || ""}
				onChange={handleInputChange}
				/>
				<label htmlFor="Address">Address</label>
				<input
				type="text"
				id="Address"
				name="Address"
				placeholder="Enter Address"
				value={Address || ""}
				onChange={handleInputChange}
				/>
				<input type="submit" value={EventID ? "Update" : "Save"}/>
				<Link to="/Homeev">
				<input type="button" value="Go Back" /> 
				</Link>
				</form>
		</div>
	);
};

export default AddEditev;