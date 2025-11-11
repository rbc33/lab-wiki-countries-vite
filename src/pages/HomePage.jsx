import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { BASE_URL } from '../utils/appUtils'
import axios from 'axios'

function HomePage() {
	const [countries, setCountries] = useState([])

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await axios.get(BASE_URL + '/countries')
				setCountries(res.data)
			} catch (error) {
				console.error('Error fetching countries:', error)
			}
		}
		fetchData()
		console.log(countries)
	}, [])

	return (
		<div>
			<Navbar />

			<div
				className="container"
				style={{ maxHeight: '90vh', overflow: 'scroll' }}
			>
				<h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>
					WikiCountries: Your Guide to the World
				</h1>

				<div className="list-group">
					{countries.map((country) => (
						<a
							key={country.alpha3Code}
							className="list-group-item list-group-item-action"
							href={`/${country.alpha3Code}`}
						>
							{country.flag} {country.name.common}
						</a>
					))}
				</div>
			</div>
		</div>
	)
}

export default HomePage
