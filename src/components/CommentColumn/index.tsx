import { Column, CommentVotesSection, NameUser, TextComment, VoteIcon }  from "../Comments/style";
import { Divider, TextField } from "@mui/material";
import { AiOutlineLike, AiOutlineDislike, AiFillLike, AiFillDislike } from "react-icons/ai";
import { Dispatch, SetStateAction } from "react";
import { capitalize } from "../../utils/capitalize";

type CommentColumnProps = {
  editing: boolean, 
  alunoNome: string, 
  texto: string, 
  commentScreen: string, 
  setCommentScreen: Dispatch<SetStateAction<string>>, 
  upScreen: boolean, 
  downScreen: boolean, 
  upVotes: number, 
  downVotes: number, 
  putVote: (vote:string) => void, 
  deleteVote: () => void, 
}

export const CommentColumn = ({
  editing, 
  alunoNome, 
  texto, 
  commentScreen, 
  setCommentScreen, 
  upScreen, 
  downScreen, 
  upVotes, 
  downVotes, 
  putVote, 
  deleteVote,
}:CommentColumnProps ) => {

  return (
    <Column >
        {
          !editing ?
            <>
              <NameUser> {capitalize(alunoNome)} </NameUser>
              <TextComment> 
                {texto}
                <Divider variant="middle" />
              </TextComment>
            </>
            :
            <TextField
              id="outlined-multiline-flexible"
              multiline
              maxRows={4}
              value={commentScreen}
              autoFocus
              onChange={(e) => setCommentScreen(e.target.value)} />
        }
        <CommentVotesSection>
          <VoteIcon>
            { upScreen ?
                <AiFillLike onClick={deleteVote} /> :
                <AiOutlineLike onClick={() => putVote('up')} />
            }
            <span>{upVotes}</span>
          </VoteIcon>
          <VoteIcon>
            { downScreen ?
                <AiFillDislike onClick={deleteVote} /> :
                <AiOutlineDislike onClick={() =>  putVote('down')} />
            }
            <span>{downVotes}</span>
          </VoteIcon>
        </CommentVotesSection>
      </Column>
  )
}