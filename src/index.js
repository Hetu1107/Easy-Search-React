import React from 'react'
import './style/search.css'
import { searchBoxStyle } from './style/searchStyle'
import { searchIconStyle } from './style/searchStyle'
import { searchInputStyle } from './style/searchStyle'
import { onchangeSearch } from './search-code/onChangeSearch'

export const EasySearch = ({dataString,setChoosedValue,setOnEnterPress}) => {
  window.addEventListener('load',()=>{
    let check = document.getElementById("search-main-box");
    document.body.addEventListener("click", (event) => {
      if (check.contains(event.target)) {
          
      } else {
        document.getElementById("search-result").style.height = "0px";
            let parent = document.getElementById("search-result");
            while (parent.firstChild) {
              parent.removeChild(parent.firstChild);
            }
      }
    });
  })
  return (
    <div
    className="search-main-box"
    id="search-main-box"
    style={searchBoxStyle}
  >
    <div className="input-area">
    <input
      onFocus={() => {
        document.getElementById("search-result").style.height = "300px";
        let e = document.getElementById("search-input-box").value;
        onchangeSearch(dataString, e,setChoosedValue);
      }}
      onKeyDown={(e)=>{
        if (e.key === 'Enter') {
            setOnEnterPress(e.target.value); 
        }
      }}
      className="search-input-box"
      id="search-input-box"
      type="text"
      style={searchInputStyle}
      onChange={(e) => onchangeSearch(dataString, e.target.value,setChoosedValue)}
    />
    <img
      className="search-icon"
      style={searchIconStyle}
      src="https://cdn1.iconfinder.com/data/icons/hawcons/32/698956-icon-111-search-512.png"
    />
    </div>
    <div id="search-result" className="search-result"></div>
  </div>
  )
}
