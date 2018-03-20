import React, {Component} from 'react';
import {SectionList, View, Text, FlatList} from 'react-native'
import PropTypes from 'prop-types';
import axios from 'axios';
import moment from 'moment';

import {serverUrl} from '../config/server';
import ArtistRow from '../artists/ArtistRow';

// TODO display Stage details
// stageDetails is a concatenation of stage information: schedules and artists

class StageDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stageId: props.match.params.id,
      stageDetails: [],
      stage: null
    };
  }

  renderItem = ({item: {artist, start, end}}) => {
    return <ArtistRow artist={artist}>
      <Text style={{color: 'grey'}}>{`${moment(start).format('HH:mm')} - ${moment(end).format('HH:mm')}`}</Text>
    </ArtistRow>
  }

  renderSeparator = () => (
    <View style={{ height: 1, backgroundColor: "grey", marginLeft: 80 }} />
  );

  renderHeader = () => (
    <View
      style={{ height: 30, backgroundColor: "#5E5EB4", justifyContent: "center", alignItems: 'center' }}
    >
      <Text style={{color: 'white'}}>RENDER STAGE NAME AND DATE HERE </Text>
    </View>
  );

  render() {
    const {stageDetails} = this.state;
    return <View>
      <FlatList
        data={stageDetails}
        renderItem={this.renderItem}
        ItemSeparatorComponent={this.renderSeparator}
        ListHeaderComponent={this.renderHeader}
      />
    </View>
  }
}

StageDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
}

export default StageDetails;