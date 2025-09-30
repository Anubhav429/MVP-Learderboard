
import React from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';
import { PlayerWithScore } from '../types';

interface Props {
  players: PlayerWithScore[];
}

export default function Leaderboard({ players }: Props) {
  return (
    <FlatList
      data={players}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={styles.row}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.score}>{item.mvpScore}</Text>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 12,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  name: {
    fontSize: 16,
  },
  score: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});
