import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import "../display/Home.css";
import {toast} from 'react-toastify';
import axios from 'axios';

const Home = () => {
	const [data, setData] = useState([]); 

	const loadData = async() => {
		const response = await axios.get("http://localhost:5000/news");
		setData(response.data);
	};

	useEffect(() => {         
		loadData();
	}, []);


	const deleteNews = (NewsID) =>{
		if(window.confirm('Are you sure you want to delete that record?')){
			axios.delete(`http://localhost:5000/news/${NewsID}`);
			toast.success("News deleted successfully"); 
			setTimeout(() => loadData(), 500);
		}
	}
	return(
		<div style={{marginTop:"150px"}}>
			<Link to="/addNews">
				<button className="btn btn-contact">Add News</button>
			</Link>



			<table className='styled-table'>
				<thead>
					<tr>
						<th style={{textAlign: "center"}}>NewsID</th>
						<th style={{textAlign: "center"}}>Source</th>
						<th style={{textAlign: "center"}}>Contents</th>
						<th style={{textAlign: "center"}}>ArtistID</th>
						<th style={{textAlign: "center"}}>Action</th>
					</tr>
				</thead>
				<tbody>
					{data.map((item, index) => {
						return(
							<tr key={item.NewsID}>
							<th scope='row'>{index+1}</th>
							<td>{item.Source}</td>
							<td>{item.Contents}</td>
							<td>{item.ArtistID}</td>
							<td>
								<Link to={`/update/${item.NewsID}`}>
									<button className="btn btn-edit">Edit</button>
								</Link>
									<button className="btn btn-delete" onClick={() => deleteNews(item.NewsID)}>Delete</button>
								<Link to={`/view/${item.NewsID}`}>
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

export default Home; 