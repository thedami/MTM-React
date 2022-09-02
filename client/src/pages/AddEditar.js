import React, {useState, useEffect} from 'react';
import {useNavigate, useParams, Link} from "react-router-dom";
import "../display/AddEdit.css";
import axios from "axios";
import {toast} from "react-toastify";

const initialState= {
	LastName: "",
	FirstName: "",
	Gender: "",
	Address: "",
	Telephone: "",
	Email: "",
	AManagerID: "",
}

const AddEditar = () => {
	const [state, setState]= useState(initialState);

	const {LastName, FirstName, Gender, Address, Telephone, Email, AManagerID} = state;

	const navigate = useNavigate();

	const {id:ArtistID} = useParams();

	

	useEffect(() => { 
		axios.get(`http://localhost:5000/Artist/${ArtistID}`)
		.then((resp) => setState({LastName:resp.data.LastName, FirstName:resp.data.FirstName, Gender:resp.data.Gender
			,Address:resp.data.Address, Telephone:resp.data.Telephone, Email:resp.data.Email, AManagerID:resp.data.AManagerID}));
	}, [ArtistID]);


	const handleSubmit = (e) => {
		e.preventDefault();
		if(!LastName || !FirstName || !Gender || !Address || !Telephone || !Email || !AManagerID){
			toast.error('Please provide value into each input field')
		}else{
			if(!ArtistID){
				axios.post("http://localhost:5000/Artist",{
				LastName,
				FirstName,
				Gender,
				Address,
				Telephone,
				Email,
				AManagerID
			}).then(() => {
				setState({LastName:"", FirstName:"", Gender:"", Address:"", Telephone:"", Email:"", AManagerID:""});
			}).catch((err)=>toast.error(err.response.data));
			toast.success('Artist Added Successfully');

			}else{
				axios.put(`http://localhost:5000/Artist/${ArtistID}`,{
				LastName,
				FirstName,
				Gender,
				Address,
				Telephone,
				Email,
				AManagerID
			}).then(() => {
				setState({LastName:"", FirstName:"", Gender:"", Address:"", Telephone:"", Email:"", AManagerID:""});
			}).catch((err)=>toast.error(err.response.data));
			toast.success('Artist Updated Successfully');
			}
			
			setTimeout(() => navigate("/Homear"), 500);
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
				<label htmlFor="LastName">Lastname</label>
				<input
				type="text"
				id="LastName"
				name="LastName"
				placeholder="Enter Lastname Here"
				value={LastName || ""}
				onChange={handleInputChange}
				/>
				<label htmlFor="FirstName">Firstname</label>
				<input
				type="text"
				id="FirstName"
				name="FirstName"
				placeholder="Enter Firstname Here"
				value={FirstName || ""}
				onChange={handleInputChange}
				/>
				<label htmlFor="Gender">Gender</label>
				<input
				type="text"
				id="Gender"
				name="Gender"
				placeholder="Enter Gender"
				value={Gender || ""}
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
				<label htmlFor="Telephone">Telephone</label>
				<input
				type="number"
				id="Telephone"
				name="Telephone"
				placeholder="Enter Telephone"
				value={Telephone || ""}
				onChange={handleInputChange}
				/>
				<label htmlFor="Email">Email<br/></label>
				<input
				type="text"
				id="Email"
				name="Email"
				placeholder="Enter Email"
				value={Email || ""}
				onChange={handleInputChange}
				/>
				<br/>
				<label htmlFor="AManagerID">ManagerID</label>
				<input
				type="number"
				id="AManagerID"
				name="AManagerID"
				placeholder="Enter AManagerID"
				value={AManagerID || ""}
				onChange={handleInputChange}
				/>
				<input type="submit" value={ArtistID ? "Update" : "Save"}/>
				<Link to="/Homear">
				<input type="button" value="Go Back" /> 
				</Link>
				</form>
		</div>
	);
};

export default AddEditar;