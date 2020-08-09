import React from 'react';

import {
    Container,
    Retweeted,
    Body,
    Avatar,
    Content,
    Header,
    Description,
    Icons,
    Status,
    CommentIcon,
    RetweetIcon,
    LikeIcon,
    Dot,
    ImageContent
} from './styles';

const Tweet: React.FC = () => {
    return (
        <Container>
            <Retweeted>
                Você retweetou
            </Retweeted>

            <Body>
                <Avatar />
                <Content>
                    <Header>
                        <strong>Diego Napoli</strong>
                        <span>@diego._napoli</span>
                        <Dot />
                        <time>27 de jun</time>
                    </Header>
                    <Description>Lorem Ipsum Dolor</Description>
                    <ImageContent />
                    <Icons>
                        <Status>
                            <CommentIcon />
                            18
                        </Status>
                        <Status>
                            <RetweetIcon />
                            18
                        </Status>
                        <Status>
                            <LikeIcon />
                            999
                        </Status>
                    </Icons>
                </Content>
            </Body>
        </Container>
    );
}

export default Tweet;