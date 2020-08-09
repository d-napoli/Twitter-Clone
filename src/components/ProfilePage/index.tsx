import React from 'react';

import Feed from '../Feed';

import { Container,
         Banner,
         Avatar,
         ProfileData,
         LocationIcon,
         CakeIcon,
         Followage,
         EditButton
       }
from './styles';

const ProfilePage: React.FC = () => {
    return (
        <Container>
            <Banner>
                <Avatar />
            </Banner>
            <ProfileData>
                <EditButton outlined>Editar Perfil</EditButton>
                <h1>Diego Napoli</h1>
                <h2>diego._napoli</h2>
                <p>Developer at <a href="https://vale.com">Vale</a></p>
                <ul>
                    <li>
                        <LocationIcon />
                        Belo Horizonte, Brasil
                    </li>
                    <li>
                        <CakeIcon />
                        Nascido(a) em 04 de fevereiro de 2000
                    </li>
                </ul>
                <Followage>
                    <span>
                        seguindo <strong>94</strong>
                    </span>
                    <span>
                        <strong>1.923 </strong>seguidores
                    </span>
                </Followage>
            </ProfileData>

            <Feed />

        </Container>
    );
}

export default ProfilePage;