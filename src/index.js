import React from 'react'
import './style/search.css'
import { searchBoxStyle } from './style/searchStyle'
import { searchIconStyle } from './style/searchStyle'
import { searchInputStyle } from './style/searchStyle'
import { inputAreaStyle } from './style/searchStyle'
import { onchangeSearch } from './search-code/onChangeSearch'
import { searchResultStyle } from './style/searchStyle'

export const EasySearch = ({dataString,setChoosedValue,setOnEnterPress}) => {
  window.addEventListener('load',()=>{
    var check = document.getElementById("search-main-box");
    document.addEventListener("click", (event) =>{
      let value = check.contains(event.target);
      if (value === false)
      {
        document.getElementById("search-result").style.height = "0px";
        var parent = document.getElementById("search-result");
      
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
    <div className="input-area" style={inputAreaStyle}>
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
    <div id="search-result" className="search-result" style={searchResultStyle}></div>
  </div>
  )
}
