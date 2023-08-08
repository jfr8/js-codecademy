const team = {
    _players: [
      {firstName: 'Fernando', lastName: 'Ramone', age: 33}, 
      {firstName: 'Fernanda', lastName: 'Ramone', age: 19}, 
      {firstName: 'Selah', lastName: 'Ramone', age: 3}
      ],
    _games: [
      {opponent: 'x', teamPoints: 2, oppenentPoints: 1},
      {opponent: 'y', teamPoints: 3, oppenentPoints: 2},
      {opponent: 'z', teamPoints: 4, oppenentPoints: 3}
    ],
  
    get players() {
      return this._players
    },
  
    get games() {
      return this._games
    },
  
    addPlayer(newFirstName, newLastName, newAge) {
     this._players.push( {
        firstName: newFirstName,
        lastName: newLastName,
        age: newAge
     })
    },
  
    addGame(newOpponent, newTeamPoints, newOpponentPoints) {
      this._games.push({
        opponent: newOpponent,
        teamPoints: newTeamPoints,
        oppenentPoints: newOpponentPoints
      })
    }
  }
  
  team.addPlayer('Bugs', 'Bunny', 76)
  team.addGame('Titans', 100, 98)
  console.log(team.players)
  console.log(team.games)
  
  
  
  