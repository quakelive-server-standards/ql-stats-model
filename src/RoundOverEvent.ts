import { TeamType } from './types/TeamType'

export class RoundOverEvent {

  matchGuid: string
  round: number
  teamWon: TeamType
  time: number
  warmup: boolean // how can there be a round in warmup mode?
    
  static fromQl(data: any): RoundOverEvent {
    let event = new RoundOverEvent

    event.matchGuid = data['MATCH_GUID']
    event.round = data['ROUND']
    event.teamWon = TeamType[data['TEAM_WON']] || data['TEAM_WON']
    event.time = data['TIME']
    event.warmup = data['WARMUP']

    return event
  }
}
