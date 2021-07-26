import axios from 'axios'
import { API_KEY } from './config'

const genres = {
	12: 'Adventure',
	14: 'Fantasy',
	16: 'Animation',
	18: 'Drama',
	27: 'Horror',
	28: 'Action',
	35: 'Comedy',
	36: 'History',
	37: 'Western',
	53: 'Thriller',
	80: 'Crime',
	99: 'Documentary',
	878: 'Science Fiction',
	9648: 'Mystery',
	10402: 'Music',
	10749: 'Romance',
	10751: 'Family',
	10752: 'War',
	10770: 'TV Movie'
}

const API_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc`

const getImagePath = path =>
	`https://image.tmdb.org/t/p/w440_and_h660_face${path}`

const getBackdropPath = path =>
	`https://image.tmdb.org/t/p/w370_and_h556_multi_faces${path}`

export const getMovies = async () => {
	// await axios
	// 	.request({
	// 		method: 'GET',
	// 		url: 'https://imdb8.p.rapidapi.com/auto-complete',
	// 		params: { q: 'g' },
	// 		headers: {
	// 			'x-rapidapi-key':
	// 				'868f8da25bmshf17eeba66e526a7p121126jsn7f7c153213cf',
	// 			'x-rapidapi-host': 'imdb8.p.rapidapi.com'
	// 		}
	// 	})
	// 	.then(function (response) {
	// 		console.log(response.data)
	// 	})
	// 	.catch(function (error) {
	// 		console.error(error)
	// 	})
	return await axios
		.get('https://imdb8.p.rapidapi.com/auto-complete', {
			headers: {
				'x-rapidapi-key':
					'868f8da25bmshf17eeba66e526a7p121126jsn7f7c153213cf',
				'x-rapidapi-host': 'imdb8.p.rapidapi.com'
			},
			params: {
				q: 'the'
			}
		})
		.then(res =>
			res.data.d
				.filter(({ id }) => id !== undefined && id !== null)
				.filter(({ q }) => q === 'feature')
				.map(film => ({
					key: film.id,
					id: film.id,
					title: film.l,
					image: film.i.imageUrl,
					poster: film.i.imageUrl,
					backdrop: film.i.imageUrl,
					rating: film.rank,
					releaseDate: film.y,
					genres: [],
					description: `${film.q}; ${film.rank}, ${film.s}, ${film.y}`
				}))
		)
		.catch(e => {
			console.error(e)
		})

	// const { results } = await fetch(API_URL).then(x => x.json())

	// return results.map(
	// 	({
	// 		id,
	// 		original_title,
	// 		poster_path,
	// 		backdrop_path,
	// 		vote_average,
	// 		overview,
	// 		release_date,
	// 		genre_ids
	// 	}) => ({
	// 		key: String(id),
	// 		title: original_title,
	// 		poster: getImagePath(poster_path),
	// 		backdrop: getBackdropPath(backdrop_path),
	// 		rating: vote_average,
	// 		description: overview,
	// 		releaseDate: release_date,
	// 		genres: genre_ids.map(genre => genres[genre])
	// 	})
	// )
}
