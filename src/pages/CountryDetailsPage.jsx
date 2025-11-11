import { Link, useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../utils/appUtils'

function CountryDetails() {
	const { id } = useParams()
	const [country, setCountry] = useState(null)

	useEffect(() => {
		const fetchData = async () => {
			const res = await axios.get(BASE_URL + `/countries/${id}`)
			setCountry(res.data)
		}
		fetchData()
		console.log(country)
	}, [])

	console.log(country)
	console.log(country)

	return (
		<div>
			<Navbar />
			<h1>Country Details</h1>
			{country && (
				<div className="container">
					<p style={{ fontSize: '24px', fontWeight: 'bold' }}>
						Country Details
					</p>

					<h1>{country?.name?.common}</h1>

					<table className="table">
						<thead></thead>
						<tbody>
							<tr>
								<td style={{ width: '30%' }}>Capital</td>
								<td>{country?.capital[0]}</td>
							</tr>
							<tr>
								<td>Area</td>
								<td>
									{country?.area} km
									<sup>2</sup>
								</td>
							</tr>
							<tr>
								<td>Borders</td>
								<td>
									<ul>
										{country?.borders?.map((borderCode) => (
											<li key={borderCode}>
												<Link href={`/${borderCode}`}>{borderCode}</Link>
											</li>
										))}
									</ul>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			)}
		</div>
	)
}

export default CountryDetails
