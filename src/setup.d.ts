import { Weather } from '../lib/index'
import { Town, TownBasics } from '../lib/town/_common'

type Building = import('../lib/buildings/_common').Building
type Faction = import('../lib/faction/_common').Faction
type NPC = import('../lib/npc-generation/_common').NPC

export interface Setup {
  renderWeather(town: Town, biome: string, weather: Weather): void
  createWeather(town: Town, biome: string, weather: Weather): Weather
  toCelsius(temperature: number): string;
  init(): void
  initMisc(): void
  npcTaxRate(town: Town, npc: NPC): number
  profile(obj: NPC | Building | Faction, base?: string, type?: string): string

  createName(parameters: CreateNameParameters): string
  createSocialClass(town: Town, npc: NPC): void
  firstCharacter(word: string): string

  npcDeath(town: Town, npc: NPC, base?: Partial<NPC>): NPC
  createDeadNPC(town: Town, base?: Partial<NPC>): NPC

  createStartBuildings(town: Town): void
  createStartFactions(town: Town): void
  createFaction(town: Town): Faction
  createTownBiome(base: Partial<Town>): TownBasics
  createTown(base: TownBasics): Town
  createCastle(town: Town): Building
  createTownName(town: Town): string
}

export interface CreateNameParameters {
  race?: string
  gender?: string
  firstOrLast?: string
}

export interface Customer {
  relationshipDescription: string
  relationships: {
    building: {
      relationship: string
      reciprocalRelationship?: string
    }
    associatedNPC: {
      relationship: string
      reciprocalRelationship?: string
    }
  }
  base?: Partial<NPC>
  description(brothel: Building, npc: NPC): string
}

export interface History {
  data: {
    key: string
    passageName: string
    objectType: string
    linkDescription: string
  },
  passageName: string,
  linkDescription: string
}
