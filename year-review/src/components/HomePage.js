import React, { Component } from 'react';
import styled from 'styled-components';
import Background from '../assets/homepg1500x800.png';
import whitemasthead from '../assets/whitemasthead.png';
import { MobileAndTablet, Desktop } from 'react-responsive-simple';
import "react-responsive-carousel/lib/styles/carousel.css";
import { Carousel } from 'react-responsive-carousel';
import HomepagePhotos from '../util/HomepagePhotos'


let MobileContainer = styled.div`
  width: 100vw;
  height: calc(100vh - 48px);
`
let HomePageContainer= styled(MobileContainer)`
  display: flex;
  background-size: cover;
`
let LeftDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`
let LeftTitleDiv = styled.div`
  margin-left: 10vw;
`
let LeftTitle = styled.h1`
  word-spacing: 100vw;
  line-height: 7rem;
  color: ${props => props.theme.white};
  text-shadow: ${props => props.theme.shadow};
`
let MobileLeftTitle = styled(LeftTitle)`
  margin-top: 1rem;
  line-height: 4rem;
`
let YearDiv = styled.div`
  margin-left: 10vw;
`
let Year = styled.h3`
  color: ${props => props.theme.white};
  text-shadow: ${props => props.theme.shadow};
`
let RightDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;;
  align-items: flex-end;
  padding-right: 5vw;
  margin-right: 5vw;
`
let SectionTitleDiv = styled.a`
  text-decoration: none;
`
let SectionTitle = styled.h3`
  color: ${props => props.theme.white};
  text-shadow: ${props => props.theme.shadow};
  
  &:hover {
    color: ${props => props.theme.blue};
    cursor: pointer;
  }
`
let LogoDiv = styled.a`
  position: absolute;
  margin: 5vh 10vw;
  z-index: 1;
  
  &:hover {
    opacity: 0.8;
  }
`
let SpecLogo = styled.img`
  height: 25px;
`

let CarouselWrapper = styled.div`
  position: absolute;
  z-index: -1;
  width: 100vw;
  @media(max-width:992px){
    margin-left: -50vh;
    width: 150vh;
  }
`

export default class HomePage extends Component {
  constructor(props){
    super(props);

    this.getSections = this.getSections.bind(this);
  }

  getSections() {
    return this.props.menuItems.map((e, i) => 
      <SectionTitleDiv key={i} href={e.link}>
        <SectionTitle>{e.name}</SectionTitle>
      </SectionTitleDiv>
    );
  }

  render() {
    return (
      <React.Fragment>
        <MobileAndTablet>
          <MobileContainer>
            <HomePageContainer>
            <CarouselWrapper>
              <Carousel
                showArrows={false}
                showStatus={false}
                showThumbs={false}
                autoPlay={true}
                infiniteLoop={true}
                interval={2000}
                showIndicators={false}
                width={"100%"}
              >
                  {HomepagePhotos.map((el, i)=>
                    <div key={i}>
                      <img src={el} />
                    </div>
                  )}
                </Carousel>
              </CarouselWrapper>
              <LeftDiv>
                <YearDiv>
                  <Year>2018 - 2019</Year>
                </YearDiv>
                <LeftTitleDiv>
                  <MobileLeftTitle>
                    YEAR IN REVIEW
                  </MobileLeftTitle>
                </LeftTitleDiv>
              </LeftDiv>
            </HomePageContainer>
          </MobileContainer>
        </MobileAndTablet>

        <Desktop>
          <LogoDiv href="https://www.columbiaspectator.com/" target="_blank">
            <SpecLogo src={whitemasthead}/>
          </LogoDiv>
          <CarouselWrapper>
              <Carousel
                showArrows={false}
                showStatus={false}
                showThumbs={false}
                autoPlay={true}
                infiniteLoop={true}
                interval={2000}
                showIndicators={false}
                width={"100%"}
              >
                  {HomepagePhotos.map((el, i)=>
                    <div key={i}>
                      <img src={el} />
                    </div>
                  )}
                </Carousel>
              </CarouselWrapper>
          <HomePageContainer>
            <LeftDiv>
              <YearDiv>
                <Year>2018 - 2019</Year>
              </YearDiv>
              <LeftTitleDiv>
                <LeftTitle>
                  YEAR IN REVIEW
                </LeftTitle>
              </LeftTitleDiv>
            </LeftDiv>
            
            <RightDiv>
              {this.getSections()}
            </RightDiv>
          </HomePageContainer>
        </Desktop>
      </React.Fragment>
    );
  }
}