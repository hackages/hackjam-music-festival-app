import React, {Component} from 'react';
import {FlatList, Text, View} from 'react-native';
import axios from 'axios';
import {serverUrl} from '../config/server';
import ArtistRow from './ArtistRow';

class Artists extends Component {
  state = {
    artists: []
  };

  async componentDidMount(){
    const {data: artists} = await axios.get(`${serverUrl}/artists`);
    console.log('artists', artists);
    this.setState({artists});
  }

  renderItem = ({item}) => {
    return <ArtistRow artist={item}/>
  };

  renderSeparator = () => (
    <View style={{ height: 1, backgroundColor: "grey", marginLeft: 80 }} />
  );

  renderHeader = () => (
    <View
      style={{ height: 30, backgroundColor: "#5E5EB4", justifyContent: "center", alignItems: 'center' }}
    >
      <Text style={{color: 'white'}}> All Artists</Text>
    </View>
  );

  render() {
    const {artists} = this.state;
    return <View>
      <FlatList
        data={artists}
        renderItem={this.renderItem}
        ItemSeparatorComponent={this.renderSeparator}
        ListHeaderComponent={this.renderHeader}
        keyExtractor={item => item.id}
      />
    </View>
  }
}

export default Artists;
