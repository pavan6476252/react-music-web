 
import { ArtistResult } from '../../dto/SearchDtoInput'

interface Props {
    artistResult: ArtistResult
}
function ArtistsResultCard({
    artistResult
}: Props) {
    return (


        <div key={artistResult.id} className=" m-2 aspect-square h-56 w-48 ">
            <img src={artistResult.image[artistResult.image.length - 1].link} alt="" className="object-cover rounded-full h-48 w-48 " />
            <p className="text-lg text-center mt-2 font-thin mx-2 line-clamp-1">{artistResult.title}</p>
        </div>
    )


}


export default ArtistsResultCard