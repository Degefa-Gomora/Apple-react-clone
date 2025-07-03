import React from 'react'
import Alert from './../Alert/Alert.jsx'
import SectionOne from "./../SectionOne/SectionOne.jsx";
import SectionTwo from "./../SectionTwo/SectionTwo.jsx";
import SectionThree from "./../SectionThree/SectionThree.jsx";
import SectionFour from "./../SectionFour/SectionFour.jsx";
import SectionFive from "./../SectionFive/SectionFive.jsx";
import SectionSix from "./../SectionSix/SectionSix.jsx";
import YouTube from "./../Youtube/YouTube.jsx";
import RatingBlock from "./../RatingBlock/RatingBlock.jsx";

function Home() {
  return (
    <>
      <Alert />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <YouTube />
      <RatingBlock />
    </>
  );
}

export default Home