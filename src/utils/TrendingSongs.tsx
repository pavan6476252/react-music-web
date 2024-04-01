import {  TrendingSong } from '../dto/HomeDtoInput'
interface Props {
    trendingSong: TrendingSong
}
function TrendingSongCard({ trendingSong }: Props) {
    return (

        <div key={trendingSong.id} className="m-2 relative aspect-video h-36   ">
            <img src={trendingSong.image[trendingSong.image.length - 1].link} alt="" className="w-full  object-cover  aspect-video rounded-md" />
            <div className="p-2  absolute bottom-0 line-clamp-1 
      rounded-b-lg bg-blue-gray-50 w-full backdrop-blur-sm bg-dark-gray-2/30 dark:text-white">
        <p className="text-sm font-thin  line-clamp-1 ">{trendingSong.name}</p>
            </div>
        </div>
    )


}

export default TrendingSongCard