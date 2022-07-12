import ratingStar from '../img/ratingStar.png'


export default function useGetRating() {
    const [rating, ratingStarImgSource] = [5, ratingStar]
    return {
        rating: rating,
        ratingStarImgSource: ratingStarImgSource
    }
}