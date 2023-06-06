'use client'
import { ApolloClient, InMemoryCache, gql, useQuery } from '@apollo/client'

// initialize a GraphQL client
const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: 'https://graphql-land.nw.r.appspot.com/graphql'
})

type Match = {
  awayScore: number
  homeScore: number
  venue: {
    venue: string
  }
  awayTeam: {
    club: string
  }
  homeTeam: {
    club: string
  }
  matchId: number
}

type Scoreboard = {
  matches: Match[]
}

const MATCHES_QUERY = gql`
  query MyQuery {
    matches {
      awayScore
      homeScore
      venue {
        venue
      }
      awayTeam {
        club
      }
      homeTeam {
        club
      }
      matchId
    }
  }
`

export default function Page () {
  const { data, loading, error } = useQuery<Scoreboard>(MATCHES_QUERY, {
    client
  })

  if (loading || error) {
    return <p>{error ? error.message : 'Loading...'}</p>
  }

  console.log(data)

  return (
    <div className='overflow-x-auto'>
      <table className='w-full text-left table-auto'>
        <thead className='bg-gray-800 text-white'>
          <tr>
            <th className='border px-4 py-2'>Home Team</th>
            <th className='border px-4 py-2'>Home Score</th>
            <th className='border px-4 py-2'>Away Score</th>
            <th className='border px-4 py-2'>Away Team</th>
            <th className='border px-4 py-2'>Venue</th>
          </tr>
        </thead>
        <tbody>
          {data?.matches.map(match => (
            <tr key={match.matchId}>
              <td className='border px-4 py-2'>{match.homeTeam.club}</td>
              <td className='border px-4 py-2'>{match.homeScore}</td>
              <td className='border px-4 py-2'>{match.awayScore}</td>
              <td className='border px-4 py-2'>{match.awayTeam.club}</td>
              <td className='border px-4 py-2'>{match.venue.venue}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
