import React from 'react'
import "./Header.css"
import HomeIcon from "@material-ui/icons/Home";
import FlashOnIcon from "@material-ui/icons/FlashOn"
import LiveTvIcon from "@material-ui/icons/LiveTv"
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary"
import SearchIcon from "@material-ui/icons/Search"
import PersonOutlineIcon from "@material-ui/icons/PersonOutline"
import {Link} from 'react-router-dom'

function Header() {
  return (
    <div className="header">

      <div className="header_icons">

        <Link to="/" className="header_link">
          <div className="header_icon header_icon--active">
            <HomeIcon />
            <p>Home</p>
          </div>
        </Link>

        <Link to="/watched" className="header_link">
          <div className="header_icon">
            <LiveTvIcon />
          <p>Watched Movies</p>
          </div>
        </Link>


        <Link to="/watchlist" className="header_link">
          <div className="header_icon">
            <VideoLibraryIcon />
          <p>Collections</p>
          </div>
        </Link>


        <Link to="/add" className="header_link">
          <div className="header_icon">
            <SearchIcon />
            <p>Search</p>
          </div>
        </Link>


        <div className="header_icon">
          <PersonOutlineIcon />
          <p>Account</p>
        </div>

      </div>
      <img
      src="https://press.hulu.com/wp-content/uploads/2020/02/hulu-white.png"
      alt=""
      />
    </div>
  )
}

export default Header
