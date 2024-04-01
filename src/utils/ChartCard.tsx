import { Chart } from '../dto/HomeDtoInput'
interface Props {
    chart: Chart
}
function ChartCard({ chart }: Props) {
    return (

            <div key={chart.id} className=" mx-2   
             aspect-square h-40 w-40 flex flex-col justify-center  items-center ">
                <img src={chart.image[chart.image.length - 1].link} alt="" className="object-cover rounded-full h-32 " />
                <p className="text-sm  mt-2 font-thin 
                w-40 text-center
                dark:text-white line-clamp-1">{chart.title}</p>
            </div>
    )


}

export default ChartCard