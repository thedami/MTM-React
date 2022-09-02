import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import "../display/Home.css";
import {toast} from 'react-toastify';
import axios from 'axios';

const Homeex = () => {
	const [data, setData] = useState([]); 

	const loadData = async() => {
		const response = await axios.get("http://localhost:5000/Expense");
		setData(response.data);
	};

	useEffect(() => {         
		loadData();
	}, []);


	const deleteExpense = (ExpenseID) =>{
		if(window.confirm('Are you sure you want to delete that record?')){
			axios.delete(`http://localhost:5000/Expense/${ExpenseID}`);
			toast.success("Expense deleted successfully"); 
			setTimeout(() => loadData(), 500);
		}
	}
	return(
		<div style={{marginTop:"150px"}}>
			<Link to="/addExpense">
				<button className="btn btn-contact">Add Expense</button>
			</Link>



			<table className='styled-table'>
				<thead>
					<tr>
						<th style={{textAlign: "center"}}>ExpenseID</th>
						<th style={{textAlign: "center"}}>Description</th>
						<th style={{textAlign: "center"}}>Amount</th>
						<th style={{textAlign: "center"}}>IncuredBy</th>
						<th style={{textAlign: "center"}}>Action</th>
					</tr>
				</thead>
				<tbody>
					{data.map((item, index) => {
						return(
							<tr key={item.ExpenseID}>
							<th scope='row'>{index+1}</th>
							<td>{item.Description}</td>
							<td>{item.Amount}</td>
							<td>{item.IncuredBy}</td>
							<td>
								<Link to={`/updateex/${item.ExpenseID}`}>
									<button className="btn btn-edit">Edit</button>
								</Link>
									<button className="btn btn-delete" onClick={() => deleteExpense(item.ExpenseID)}>Delete</button>
								<Link to={`/viewex/${item.ExpenseID}`}>
									<button className="btn btn-view">View</button>
								</Link>
							</td>
							</tr>
						)
					})}
				</tbody>
			</table>
			<Link to="/">
				<button className="btn btn-contact">Back to Home</button>
			</Link>
		</div>
	)
}

export default Homeex; 