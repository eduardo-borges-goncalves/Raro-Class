export interface TVideo {
  id: string,
  nome: string,
  url: string,
  thumbUrl: string,
  descricao?: string,
  createdAt?: string,
  duracao: string,
  dataPublicacao?: string,
  topico: string,
  tags?: string[]
}
