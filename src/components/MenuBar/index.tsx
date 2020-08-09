import React from 'react';

import Button from '../Button';

import {
    Container,
    TopSide,
    Logo,
    MenuButton,
    HomeIcon,
    BellIcon,
    EmailIcon,
    FavoriteIcon,
    ProfileIcon,
    BotSide,
    Avatar,
    ExitIcon,
    ProfileData
} from './styles';

const MenuBar: React.FC = () => {
    return (
        <Container>
            <TopSide>
                <Logo />
                <MenuButton>
                    <HomeIcon />
                    <span>Página Inicial</span>
                </MenuButton>
                <MenuButton>
                    <BellIcon />
                    <span>Notificações</span>
                </MenuButton>
                <MenuButton>
                    <EmailIcon />
                    <span>Mensagens</span>
                </MenuButton>
                <MenuButton>
                    <FavoriteIcon />
                    <span>Favoritados</span>
                </MenuButton>
                <MenuButton>
                    <ProfileIcon className="active" />
                    <span>Perfil</span>
                </MenuButton>

                <Button>
                    <span>Tweetar</span>
                </Button>
            </TopSide>

            <BotSide>
                <Avatar />
                <ProfileData>
                    <strong>Diego Napoli</strong>
                    <span>@diego._napoli</span>
                </ProfileData>

                <ExitIcon />
            </BotSide>
        </Container>
    );
}

export default MenuBar;