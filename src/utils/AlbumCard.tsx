// AlbumCard.js
import React from 'react';
import { Album } from '../dto/HomeDtoInput';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../redux/store';
import { activateSidebar } from '../redux/sidepanel/SidePanelSlice';
import { fetchAlbumDetailsAsyncThunk } from '../redux/slices/AlbumFetchSlice';

interface Props {
  album: Album;
  className?: string | undefined
}

const AlbumCard: React.FC<Props> = ({ album, className }) => {

  const dispatch: AppDispatch = useDispatch()

  const fetchAlbumsInfo = (id:string ) => {
    dispatch(activateSidebar())
    dispatch(fetchAlbumDetailsAsyncThunk(id))
  }
  return (
    <div key={album.id} className={`${className} bg-white m-2 rounded-b-lg 
    rounded-lg hover:scale-105 transition-transform shadow-md aspect-square h-40 w-40 flex-shrink-0 flex-grow-1 relative `}
      onClick={()=>fetchAlbumsInfo(album.id)}
    >
      <img src={album.image[album.image.length - 1].link} alt="" className="object-cover rounded-lg w-full h-full" />
      <div className="p-2  absolute bottom-0 line-clamp-1 
      rounded-b-lg bg-blue-gray-50 w-full backdrop-blur-sm bg-dark-gray-2/30 dark:text-white">
        <p className="text-sm font-thin  line-clamp-1 ">{album.name}</p>
      </div>
    </div>
  );
};



export default AlbumCard;
