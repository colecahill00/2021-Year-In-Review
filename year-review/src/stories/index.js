import React from 'react';
import { storiesOf } from '@storybook/react';

import PageIntro from '../components/PageIntro.js';
import Article from '../components/Article.js';
import ImageBoxSlider from '../containers/ImageBoxSlider';
import SportSlide from '../components/SportSlide.js';
import SportsSlideShow from '../containers/SportsSlideShow';
import PhotoGrid from '../components/PhotoGrid.js';
import ImageBox from '../components/ImageBox/ImageBox';
import GenericPanelLayout from '../containers/GenericPanelLayout';
import HomePage from '../components/HomePage.js';
import ExpandingColumns from '../components/ExpandingColumns';

// Data for testing

// A url for a testing image
const test_img = "https://placekitten.com/301/301"
const test_url = "http://cs.columbia.edu"
const img = "http://www.availableideas.com/wp-content/uploads/2015/07/flowers-wallpapers-hd-desktop-beautiful-back-grounds.jpg";
const test_wide_pic = "https://picsum.photos/1500/800"

const opinion_data = [
	{
		img_src: test_wide_pic,
		title: "Op-ED"
	},
	{
		img_src: test_wide_pic,
		title: "Love Actualized"
	},
	{
		img_src: test_wide_pic,
		title: "Columns"
	},
	{
		img_src: test_wide_pic,
		title: "Debate"
	}
]

// Data for imageSlider
const image_slider_data = 
[
	{
		title: "Title1",
		author: "Author1",
		url: test_url,
		img_src: test_img
	},
	{
		title: "Title2",
		author: "Author2",
		url: test_url,
		img_src: test_img
	},
	{
		title: "Title3",
		author: "Author3",
		url: test_url,
		img_src: test_img
	},
	{
		title: "Title4",
		author: "Author4",
		url: test_url,
		img_src: test_img
	},
	{
		title: "Title5",
		author: "Author5",
		url: test_url,
		img_src: test_img
	},
]

const flip_data = [
{
	front_image: img,
	author: "Ben LaZebnik",
	section: "| YOU HAVE MY WORD",
	back_image: test_img,
	title: "Disconnected from death",
	body: "colleges like columbia-and most of modern society-are wrapped up with the concerns of the physical world and thus have a tendency to see the end goal as material wealth..."
},
]

// Data for sportSlider
const sports_slider_data = 
[
	{
		title: "Title1",
		author: "Author1",
		url: test_url,
		img_src: test_wide_pic
	},
	{
		title: "Title2",
		author: "Author2",
		url: test_url,
		img_src: test_wide_pic
	},
	{
		title: "Title3",
		author: "Author3",
		url: test_url,
		img_src: test_wide_pic
	},
	{
		title: "Title4",
		author: "Author4",
		url: test_url,
		img_src: test_wide_pic
	},
	{
		title: "Title5",
		author: "Author5",
		url: test_url,
		img_src: test_wide_pic
	},
]

// Test Storybook
storiesOf('Test', module).add('Test', () => (<h1>Hello</h1>))

// Test Page Intro
storiesOf('PageIntro', module).add('PageIntro', () => <PageIntro title1="title" text1="blurb" title2="title" text2="blurb" img_src={test_img} />)

// Test Article
storiesOf('ImageBoxSlider', module).add('Article', () => <Article title="title" author="blurb" url={test_url} img_src={test_img}/>)

// Test ImageBoxSlider
storiesOf('ImageBoxSlider', module).add('ImageBoxSlider', () => (<ImageBoxSlider data = {image_slider_data} />))

// Test SportsSlide
storiesOf('SportsSlideShow', module).add('SportSlide', () => <SportSlide title="title" author="blurb" url={test_url} img_src={test_img}/>)

// Test SportsSlideShow
storiesOf('SportsSlideShow', module).add('SportsSlideShow', () => (<SportsSlideShow data = {sports_slider_data} />))

//Test PhotoGrid
storiesOf('PhotoGrid', module).add('PhotoPanel', () => <PhotoGrid data={image_slider_data} />)

//Test Flip Image-Box
storiesOf('PhotoGrid', module).add('Photo', () => <ImageBox/>)

// Test Generic Panel Layout
storiesOf('ImageBoxSlider', module).add("GenericPanelLayout",() => <GenericPanelLayout data = {image_slider_data}/>)
                                        
// Test Home Page
storiesOf('HomePage', module).add('HomePage',() => <HomePage img_src={test_wide_pic}/>)

// Test ExpandingColumns
storiesOf('ExpandingColumns', module).add("ExpandingColumns",() => <ExpandingColumns data = {opinion_data}/>)

