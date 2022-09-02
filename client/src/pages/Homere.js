import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import "../display/Home.css";
import {toast} from 'react-toastify';
import axios from 'axios';

const Homere = () => {
	const [data, setData] = useState([]); 

	const loadData = async() => {
		const response = await axios.get("http://localhost:5000/Recommendation");
		setData(response.data);
	};

	useEffect(() => {         
		loadData();
	}, []);


	const deleteRecommendation = (RecommendationID) =>{
		if(window.confirm('Are you sure you want to delete that record?')){
			axios.delete(`http://localhost:5000/Recommendation/${RecommendationID}`);
			toast.success("Recommendation deleted successfully"); 
			setTimeout(() => loadData(), 500);
		}
	}
	return(
		<div style={{marginTop:"150px"}}>
			<Link to="/addRec">
				<button className="btn btn-contact">Add Recommendation</button>
			</Link>



			<table className='styled-table'>
				<thead>
					<tr>
						<th style={{textAlign: "center"}}>RecommendationID</th>
						<th style={{textAlign: "center"}}>Description</th>
						<th style={{textAlign: "center"}}>DateReceived</th>
						<th style={{textAlign: "center"}}>Action</th>
					</tr>
				</thead>
				<tbody>
					{data.map((item, index) => {
						return(
							<tr key={item.RecommendationID}>
							<th scope='row'>{index+1}</th>
							<td>{item.Description}</td>
							<td>{item.DateReceived}</td>
							<td>
								<Link to={`/updatere/${item.RecommendationID}`}>
									<button className="btn btn-edit">Edit</button>
								</Link>
									<button className="btn btn-delete" onClick={() => deleteRecommendation(item.RecommendationID)}>Delete</button>
								<Link to={`/viewre/${item.RecommendationID}`}>
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

export default Homere; 