import React from "react";
import styled from "styled-components"

const Wrapper = styled.div`
    width: 100vw;
    height: 60px;
    display: flex;
    padding: 20px 58px;
    box-sizing: border-box;
`;

const Logo = styled.img`
    height: 100%;
    margin-right: 30px;
`;

const NavText = styled.ul`
    display: flex;
    color: white;
    list-style: none;
    height: 100%;
    flex: 1;
`

const NavTextItem = styled.li`

`

const NavIcon = styled.ul`
    display: flex;
    list-style: none;
    height: 100%;
`

const NavIconItem = styled.ul`
    width: fit-content;
    & > img {
        height: 100%;
    }
`

const Banner = (props) => {
    return (
        <Wrapper>
            <Logo src="https://www.stickpng.com/assets/images/580b57fcd9996e24bc43c529.png"/>
            <NavText>
                <NavTextItem>홈</NavTextItem>
                <NavTextItem>TV 프로그램</NavTextItem>
                <NavTextItem>영화</NavTextItem>
                <NavTextItem>최신 등록 콘텐츠</NavTextItem>
                <NavTextItem>내가 찜한 콘텐츠</NavTextItem>
            </NavText>
            <NavIcon>
                <img src="/search.svg"/>
                <img src="/gift.svg"/>
                <img src="/bell.svg"/>
            </NavIcon>
        </Wrapper>
    )
}

export default Banner;