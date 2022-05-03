import { FC } from "react";
import { ButtonNav, Menu, Nav, Unavailable } from "./style";
import { useAuthentication } from "../../context/index"

interface VideoNavigationProps {
    handleChangeVisible: (text: string) => void;
    showSection: string
}

export const VideoNavigation: FC<VideoNavigationProps> = ({ handleChangeVisible, showSection }) => {

    const { authData } = useAuthentication()
    const handleChangeNav = (visible: string) => {
        handleChangeVisible(visible)
    }

    return (
        <Menu>
            {authData.access_token ?
                <Nav>
                    <>
                        <ButtonNav
                            selected={showSection === 'comentarios'}
                            onClick={() => handleChangeNav('comentarios')}>
                            Comentários
                        </ButtonNav>
                        <ButtonNav
                            selected={showSection === 'proximos'}
                            onClick={() => handleChangeNav('proximos')}>
                            Próximos vídeos
                        </ButtonNav>
                    </>
                </Nav>
                :
                <Unavailable>
                    Dados Disponíveis apenas para usuários logados.
                </Unavailable>
            }
        </Menu>
    )
}