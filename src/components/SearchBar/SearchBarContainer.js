// You do not need to change any code in this file
import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faHeart, faCircle, faCompass } from '@fortawesome/free-regular-svg-icons'
import "./SearchBar.css";
import data from '../../dummy-data.js'

const SearchBar = () => {

const [searchTerm, setSearchTerm] = useState('')


const usernameArray = data.map(dataObj => {
   return dataObj.username
})

const filterUsers = usernameArray => {
  return usernameArray.filter(item => {
    if (!searchTerm) {
      return item
    }
    if item.toLowerCase().includes(searchTerm.toLowerCase())) {
      return item 
    }
  }
  

}

// const filterFriends = friends => {
//   return friends.filter(friendObj => {
//     if (!searchTerm) {
//       return friendObj
//     }
//     if (friendObj.name.toLowerCase().includes(searchTerm.toLowerCase())) {
//       return friendObj
//     }
//   })
// }


  return (
    <div className="search-bar-wrapper">
      <div className="social">
        <FontAwesomeIcon icon={faInstagram} />
      </div>
      <form className="search-form">
        <input
          type="text"
          placeholder="Search"
        />
      </form>
      <div className="social-wrapper">
        <div className="social">
          <FontAwesomeIcon icon={faCompass} />
        </div>
        <div className="social">
          <FontAwesomeIcon icon={faHeart} />
        </div>
        <div className="social">
          <FontAwesomeIcon icon={faCircle} />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;


