import { FC } from "react";
import { SpinnerImg, LoadingContainer } from './styles'

interface LoadingProps {
    size: number;
}

const Spinner =  require('../../assets/gifs/Spinner.gif')

const LoadingSpinner: FC<LoadingProps> = ({ size }) => {

    return ( 
        <LoadingContainer>
            <SpinnerImg src={Spinner} alt="loading..." size={size}/>  
        </LoadingContainer>
              
    )
}

export default LoadingSpinner