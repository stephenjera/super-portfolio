'use client'
import React, { useState, useEffect} from 'react'
import { request, gql } from 'graphql-request'

type Match = {
  homeTeam: {
    club: string
  }
  awayScore: number
  homeScore: number
  venue: {
    venue: string
  }
  awayTeam: {
    club: string
  }
  matchId: number
}

type ScoreboardProps = {
  matches: Match[]
}

const Scoreboard: React.FC = () => {
    const [matches, setMatches] = useState<Match[]>([])
    const [loading, setLoading] = useState(true)
  
    useEffect(() => {
      const fetchMatches = async () => {
        const query = gql`
          query MyQuery {
            matches {
              homeTeam {
                club
              }
              awayScore
              homeScore
              venue {
                venue
              }
              awayTeam {
                club
              }
              matchId
            }
          }
        `
        const data: ScoreboardProps = await request(
          'https://graphql-land.nw.r.appspot.com/graphql',
          query
        )
        setMatches(data.matches)
        setLoading(false)
      }
  
      fetchMatches()
    }, [])
  
    if (loading) {
      return <p>Loading data...</p>
    }
  
    return (
        <table className="w-full h-full flex flex-col items-center text-left table-auto">
        <tbody>
          {matches.map(match => (
            <tr key={match.matchId}>
              <td className="border px-4 py-2">{match.homeTeam.club}</td>
              <td className="border px-4 py-2 text-center">{match.homeScore}</td>
              <td className="border px-4 py-2 text-center">{match.awayScore}</td>
              <td className="border px-4 py-2">{match.awayTeam.club}</td>
              <td className="border px-4 py-2">{match.venue.venue}</td>
            </tr>
          ))}
        </tbody>
      </table>
      
    )
  }
  

export default Scoreboard
