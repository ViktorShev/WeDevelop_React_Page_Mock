export default function useGetRating() {
    const [rating, ratingStarImgSource] = [5, "src\\img\\ratingStar.png"]
    return {
        rating: rating,
        ratingStarImgSource: ratingStarImgSource
    }
}