import React, {useState, useEffect} from 'react';
import {useNavigate, useParams, Link} from "react-router-dom";
import "../display/AddEdit.css";
import axios from "axios";
import {toast} from "react-toastify";

const initialState= {
	Description: "",
	Amount: "",
	IncuredBy: "",
}

const AddEdit = () => {
	const [state, setState]= useState(initialState);

	const {Description, Amount, IncuredBy} = state;

	const navigate = useNavigate();

	const {id:ExpenseID} = useParams();

	

	useEffect(() => { 
		axios.get(`http://localhost:5000/Expense/${ExpenseID}`)
		.then((resp) => setState({Description:resp.data.Description, Amount:resp.data.Amount, IncuredBy:resp.data.IncuredBy}));
	}, [ExpenseID]);


	const handleSubmit = (e) => {
		e.preventDefault();
		if(!Description || !Amount || !IncuredBy){
			toast.error('Please provide value into each input field')
		}else{
			if(!ExpenseID){
				axios.post("http://localhost:5000/Expense",{
				Description,
				Amount,
				IncuredBy
			}).then(() => {
				setState({Description:"", Amount:"", IncuredBy:""});
			}).catch((err)=>toast.error(err.response.data));
			toast.success('Expense Added Successfully');

			}else{
				axios.put(`http://localhost:5000/Expense/${ExpenseID}`,{
				Description,
				Amount,
				IncuredBy
			}).then(() => {
				setState({Description:"", Amount:"", IncuredBy:""});
			}).catch((err)=>toast.error(err.response.data));
			toast.success('Expense Updated Successfully');
			}
			
			setTimeout(() => navigate("/Homeex"), 500);
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
				<label htmlFor="Amount">Amount</label>
				<input
				type="number"
				id="Amount"
				name="Amount"
				placeholder="Enter Amount Here"
				value={Amount || ""}
				onChange={handleInputChange}
				/>
				<label htmlFor="IncuredBy">IncuredBy</label>
				<input
				type="text"
				id="IncuredBy"
				name="IncuredBy"
				placeholder="Enter the spendee"
				value={IncuredBy || ""}
				onChange={handleInputChange}
				/>
				<input type="submit" value={ExpenseID ? "Update" : "Save"}/>
				<Link to="/Homeex">
				<input type="button" value="Go Back" /> 
				</Link>
				</form>
		</div>
	);
};

export default AddEdit;