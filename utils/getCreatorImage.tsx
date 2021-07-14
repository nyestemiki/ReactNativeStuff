import { BY } from '../components/AppCard/types'
import images from '../constants/images'

export default function getCreatorImage(by: BY) {
	switch (by) {
		case BY.ME:
			return images.byMe
		case BY.BY_PROGRAMMERS:
			return images.byByProgrammers
		case BY.WILLIAM_CANDILLON:
			return images.byWilliamCandillon
		default:
			return null
	}
}
