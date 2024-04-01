 
import { TopQueryResult } from '../../dto/SearchDtoInput'
interface Props {
    topQueryResult: TopQueryResult
}
function TopQueryResultCard({
    topQueryResult
}: Props) {
    return (
        <div key={topQueryResult.id} className={`${""} bg-white m-2 rounded-lg shadow-md aspect-square h-60 w-60 flex-shrink-0 flex-grow-1 relative `}>
            <img src={topQueryResult.image[topQueryResult.image.length - 1].link} alt="" className="object-cover rounded-t-lg w-full h-full rounded-lg " />
            <div className="p-2  absolute bottom-0 line-clamp-1 bg-blue-gray-50 w-full backdrop-blur-sm bg-white/30 rounded-b-md">
                <p className="text-lg font-thin text-black line-clamp-1 ">{topQueryResult.title}</p>
            </div>
        </div>
    )
}

export default TopQueryResultCard