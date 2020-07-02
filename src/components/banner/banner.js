import React from 'react';
import BannerImage from '../../assets/banner.jpg' 
import CustomButton from '../custom-button/customButton';
import "./banner.scss";

const Banner = () => (
    <div className="banner" style={{backgroundImage: `url(${BannerImage})`}}>
    <CustomButton to="/play">Play golf</CustomButton>
    </div>
)

export default Banner;