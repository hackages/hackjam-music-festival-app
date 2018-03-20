import artists from '../db/artists.json';

class Artist {
  findAll() {
    console.log('artists', artists);
    return artists;
  }

  findById({artistId}) {
    return artists.find(artist => artist.id === artistId);
  }
}

export default new Artist();