import {  Playlist } from '../dto/HomeDtoInput'
interface Props {
    playlist: Playlist
}
function PlaylistCard({ playlist }: Props) {
    return (

        <div key={playlist.id} className="m-2 relative aspect-video h-36  ">
            <img src={playlist.image[playlist.image.length - 1].link} alt="" className="w-full  object-cover  aspect-video rounded-md " />
            <div className="p-2  absolute bottom-0 line-clamp-1 
      rounded-b-lg bg-blue-gray-50 w-full backdrop-blur-sm bg-dark-gray-2/30 dark:text-white">
        <p className="text-sm font-thin  line-clamp-1 ">{playlist.title}</p>
            </div>
        </div>
    )


}

export default PlaylistCard