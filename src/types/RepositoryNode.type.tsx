import { Fork } from "./Fork.type"
import { LanguageNode } from "./LanguageNode.type"

export type RepositoryNode = {
  description: string,
  id: string,
  name: string,
  url: string,
  stargazerCount: number,
  forks: Fork,
  languages: LanguageNode
}