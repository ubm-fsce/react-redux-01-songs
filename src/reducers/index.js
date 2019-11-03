import { combineReducers } from 'redux';
const songsReducer = () => {
  return [
    { title: 'No scrubs', duration: '4.05' },
    { title: 'Macerena', duration: '2.05' },
    { title: 'All Stars', duration: '3.09' },
    { title: 'I want it that way', duration: '6.08' }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});