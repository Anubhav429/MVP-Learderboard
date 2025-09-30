
#  MVP Leaderboard App

This is a **React Native app built with Expo** that displays a leaderboard of players and their MVP scores.  
It fetches player and event data from local `.json` files  using Axios and calculates scores dynamically.

---

##  Features
- Fetch players and events from JSON or API.
- Calculate **MVP scores** based on events.
- Display leaderboard using `FlatList`.
- Clean UI with player name and score.
- Modular and reusable TypeScript components.

- data/players.json
[
  { "id": 1, "name": "John Doe" },
  { "id": 2, "name": "Jane Smith" }
  .
  .
  .
  .
]

data/events.json
[
  { "playerId": 1, "points": 20 },
  { "playerId": 2, "points": 15 }
  .
  .
  .
  .
  .
]
This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

