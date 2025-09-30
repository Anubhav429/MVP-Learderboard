import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import axios from "axios";
import { calculateMVPScore } from "./src/utils/calculateMVP";
import { Player, Event, PlayerWithScore } from "./src/types";
import Leaderboard from "./src/components/Leaderboard";


export default function LeaderboardScreen() {
  const [players, setPlayers] = useState<PlayerWithScore[]>([]);
  const [loading, setLoading] = useState(true);
  const [showTopPerformers, setShowTopPerformers] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);

        // Step 1: Fetch players.json
        const playersRes = await axios.get<Player[]>("/players.json");
        const playersData = playersRes.data;

        // Step 2: Fetch events.json AFTER players
        const eventsRes = await axios.get<Event[]>("/events.json");
        const eventsData = eventsRes.data;

        // Step 3: Calculate scores
        const scoredPlayers = calculateMVPScore(playersData, eventsData);
        setPlayers(scoredPlayers);
      }
      catch (error) {
        console.error("Error fetching leaderboard data:", error);
      } 

      finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const filteredPlayers = showTopPerformers ? players.filter((p) => p.mvpScore >= 20) : players;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Most Valuable Player (MVP) Score</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => setShowTopPerformers((prev) => !prev)}
      >
        <Text style={styles.buttonText}>Toggle Top Performers</Text>
      </TouchableOpacity>

      {loading ? (
        <ActivityIndicator
          size="large"
          color="#0000ff"
          style={{ marginTop: 20 }}
        />
      ) : (
        <Leaderboard players={filteredPlayers} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 50 },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#4A90E2",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    shadowRadius: 3,
    marginVertical: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
