import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ mySelectedSong }) => {
  if (!mySelectedSong) {
    return <div>Select a song</div>
  }
  return (
    <div>
      <h3> Details for :</h3 >
      <p>
        Tile : {mySelectedSong.title}
      </p>
      <p>
        Duration : {mySelectedSong.duration}
      </p>

    </div >
  );
};

const mapStateToProps = (state) => {
  return { mySelectedSong: state.selectedSong };
}

export default connect(mapStateToProps)(SongDetail);