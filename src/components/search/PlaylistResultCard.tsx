 
import { PlaylistResult } from '../../dto/SearchDtoInput'
interface Props {
    playlist: PlaylistResult
}
function PlaylistResultCard({ playlist }: Props) {
    return (

        <div key={playlist.id} className="m-2 relative aspect-video h-52 ">
            <img src={playlist.image[playlist.image.length - 1].link} alt="" className="w-full  object-cover  aspect-video rounded-md " />
            <div className='absolute bottom-0 bg-blue-gray-100 w-full rounded-b-md backdrop-blur-md'>
                <p className="text-lg font-thin text-center">{playlist.title}</p>
            </div>
        </div>
    )


}

export default PlaylistResultCard