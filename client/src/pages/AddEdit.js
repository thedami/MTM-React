import React, {useState, useEffect} from 'react';
import {useNavigate, useParams, Link} from "react-router-dom";
import "../display/AddEdit.css";
import axios from "axios";
import {toast} from "react-toastify";

const initialState= {
	Source: "",
	Contents: "",
	ArtistID: "",
}

const AddEdit = () => {
	const [state, setState]= useState(initialState);

	const {Source, Contents, ArtistID} = state;

	const navigate = useNavigate();

	const {id:NewsID} = useParams();

	

	useEffect(() => { 
		axios.get(`http://localhost:5000/news/${NewsID}`)
		.then((resp) => setState({Source:resp.data.Source, Contents:resp.data.Contents, ArtistID:resp.data.ArtistID}));
	}, [NewsID]);


	const handleSubmit = (e) => {
		e.preventDefault();
		if(!Source || !Contents || !ArtistID){
			toast.error('Please provide value into each input field')
		}else{
			if(!NewsID){
				axios.post("http://localhost:5000/news",{
				Source,
				Contents,
				ArtistID
			}).then(() => {
				setState({Source:"", Contents:"", ArtistID:""});
			}).catch((err)=>toast.error(err.response.data));
			toast.success('News Added Successfully');

			}else{
				axios.put(`http://localhost:5000/news/${NewsID}`,{
				Source,
				Contents,
				ArtistID
			}).then(() => {
				setState({Source:"", Contents:"", ArtistID:""});
			}).catch((err)=>toast.error(err.response.data));
			toast.success('News Updated Successfully');
			}
			
			setTimeout(() => navigate("/Home"), 500);
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
				<label htmlFor="Source">Source</label>
				<input
				type="text"
				id="Source"
				name="Source"
				placeholder="Enter Source Here"
				value={Source || ""}
				onChange={handleInputChange}
				/>
				<label htmlFor="Contents">Contents</label>
				<input
				type="text"
				id="Contents"
				name="Contents"
				placeholder="Enter Content Here"
				value={Contents || ""}
				onChange={handleInputChange}
				/>
				<label htmlFor="ArtistID">ArtistID</label>
				<input
				type="number"
				id="ArtistID"
				name="ArtistID"
				placeholder="Enter Artist ID"
				value={ArtistID || ""}
				onChange={handleInputChange}
				/>
				<input type="submit" value={NewsID ? "Update" : "Save"}/>
				<Link to="/Home">
				<input type="button" value="Go Back" /> 
				</Link>
				</form>
		</div>
	);
};

export default AddEdit;