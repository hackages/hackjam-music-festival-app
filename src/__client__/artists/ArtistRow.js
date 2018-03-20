import React from 'react';
import {Image, Text, View, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

// TODO: Display Artists Image and Name
const ArtistRow = ({
  artist
}) => (
  <View style={styles.row}>
  </View>
);

ArtistRow.propTypes = {
  artist: PropTypes.object.isRequired
};

export default ArtistRow;

const styles = StyleSheet.create({
  row: { flexDirection: "row", alignItems: "center", padding: 12 },
  picture: { width: 50, height: 50, borderRadius: 25, marginRight: 18 },
  primaryText: {
    fontWeight: "bold",
    fontSize: 14,
    color: "black",
    marginBottom: 4
  },
  secondaryText: { color: "grey" }
});