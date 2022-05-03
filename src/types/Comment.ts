type AlunoProps = {
    id: string,
    admin: boolean,
    nome: string,
    email: string,
    senha: string,
    foto: string
  }

type Vote  = {
  aluno: AlunoProps,
  createdAt: string,
  id: string,
  vote: string,
}

export type TComment = {
    id: string,
    videoId: string,
    texto: string,
    editado: boolean,
    createdAt: string,
    aluno: AlunoProps,
    upVotes: number,
    downVotes: number,
    meuVote: Vote
}
