import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import { withRouter } from 'react-router'
import { ThemeProvider } from "styled-components";
import { MobileAndTablet, Desktop } from 'react-responsive-simple';
import { GlobalStyles, Theme } from "./util/GlobalStyles";

import HomeContainer from './containers/HomeContainer'
import NewsContainer from './containers/NewsContainer'
import PhotoContainer from './containers/PhotoContainer'
import OpinionContainer from './containers/OpinionContainer'
import SportsContainer from './containers/SportsContainer'
import EyeContainer from './containers/EyeContainer'
import DesignContainer from './containers/DesignContainer'
import AEContainer from './containers/AEContainer'
import SpectrumContainer from './containers/SpectrumContainer'

import NavBar from './components/Navigation/NavBar'
import Footer from './components/Footer'
import ExpandingColumns from './components/ExpandingColumns'
import { test_img } from "./util/TestData";
import { photo_data, opinion_data, NewsTestData, sports_slider_data } from './util/TestData'
import { NavItems, NavItemsWithHome } from "./util/NavItems";

class App extends Component {

  render() {
    const home = () => <HomeContainer />
    const news = () => <NewsContainer NavItems = {NewsTestData.sections} SliderData = { NewsTestData.image_and_text } intro_img = {test_img} />
    const opinion = () => <OpinionContainer />
    const eye = () => <EyeContainer />
    const photo = () => <PhotoContainer photo_data = {photo_data}/>
    const design = () => <DesignContainer />
    const sports = () => <SportsContainer SportsData = {sports_slider_data} />
    const ane = () => <AEContainer />
    const spectrum = () => <SpectrumContainer />

    return (
      <ThemeProvider theme={Theme}>
        <main>
          <GlobalStyles />
            <React.Fragment>
              <Desktop>
                {this.props.location.pathname == "/" ?
                  <NavBar menuItems={NavItems} transparent hideCrown/>
                :
                  <NavBar menuItems={NavItems} />
                }
              </Desktop>
              <MobileAndTablet>
                <NavBar menuItems={NavItemsWithHome} transparent/>
              </MobileAndTablet>
              <Switch>
                <Route exact path="/" component={home} />
                <Route exact path="/news" component={news} />
                <Route exact path="/opinion" component={opinion} />
                <Route exact path="/eye" component={eye} />
                <Route exact path="/photo" component={photo} />
                <Route exact path="/design" component={design} />
                <Route exact path="/sports" component={sports} />
                <Route exact path="/arts-and-entertainment" component={ane} />
                <Route exact path="/spectrum" component={spectrum} />
              </Switch>
              <Footer />
            </React.Fragment>
        </main>
      </ThemeProvider>
    );
  }
}

export default withRouter(App);


