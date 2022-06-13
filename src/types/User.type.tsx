import { RepositoryNode } from "./RepositoryNode.type"

export type User = {
  avatarUrl: string,
  bio: string,
  name: string,
  login: string,
  repositories: Array<RepositoryNode>
}

