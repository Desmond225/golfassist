import React from 'react';
import BannerImage from '../../assets/banner.jpg' 
import CustomButton from '../custom-button/customButton';
import { withRouter, Link } from 'react-router-dom';
import "./banner.scss";

const Banner = () => (
    <div className="banner" style={{backgroundImage: `url(${BannerImage})`}}>
        <CustomButton>
            <Link to="/play">Play golf</Link>
        </CustomButton>
    </div>
)

export default withRouter(Banner);