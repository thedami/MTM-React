import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import "../display/Home.css";
import {toast} from 'react-toastify';
import axios from 'axios';

const Homear = () => {
	const [data, setData] = useState([]); 

	const loadData = async() => {
		const response = await axios.get("http://localhost:5000/Artist");
		setData(response.data);
	};

	useEffect(() => {         
		loadData();
	}, []);


	const deleteArtist = (ArtistID) =>{
		if(window.confirm('Are you sure you want to delete that record?')){
			axios.delete(`http://localhost:5000/Artist/${ArtistID}`);
			toast.success("Artist deleted successfully"); 
			setTimeout(() => loadData(), 500);
		}
	}
	return(
		<div style={{marginTop:"150px"}}>
			<Link to="/addArt">
				<button className="btn btn-contact">Add Artist</button>
			</Link>



			<table className='styled-table'>
				<thead>
					<tr>
						<th style={{textAlign: "center"}}>ArtistID</th>
						<th style={{textAlign: "center"}}>LastName</th>
						<th style={{textAlign: "center"}}>FirstName</th>
						<th style={{textAlign: "center"}}>Gender</th>
						<th style={{textAlign: "center"}}>Address</th>
						<th style={{textAlign: "center"}}>Telephone</th>
						<th style={{textAlign: "center"}}>Email</th>
						<th style={{textAlign: "center"}}>ManagerID</th>
						<th style={{textAlign: "center"}}>Action</th>
					</tr>
				</thead>
				<tbody>
					{data.map((item, index) => {
						return(
							<tr key={item.ArtistID}>
							<th scope='row'>{index+1}</th>
							<td>{item.LastName}</td>
							<td>{item.FirstName}</td>
							<td>{item.Gender}</td>
							<td>{item.Address}</td>
							<td>{item.Telephone}</td>
							<td>{item.Email}</td>
							<td>{item.ManagerID}</td>
							<td>
								<Link to={`/updatear/${item.ArtistID}`}>
									<button className="btn btn-edit">Edit</button>
								</Link>
									<button className="btn btn-delete" onClick={() => deleteArtist(item.ArtistID)}>Delete</button>
								<Link to={`/viewar/${item.ArtistID}`}>
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

export default Homear; 