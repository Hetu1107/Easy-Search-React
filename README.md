# easy-react-search

> A library for making search bar filters.

<br>

## what is the use of this ?
```
If you want to make search filter on comma seperated data then this library will help you to do so.

You just have to pass the comma seperated data and on change of input the filter output will be shown below the input box jus like any search bar.
```

<br>

## Install

```bash
npm install --save search-data-react
```

## Usage

```jsx
import React, { useState } from 'react'

// importing styles
import 'search-data-react/dist/index.css'
import { EasySearch } from 'search-data-react'
const App = () => {
  const [choosedValue,setChoosedValue] = useState(''); 
  const [enteredValue,setOnEnterPress] = useState('');
  return (
    <EasySearch dataString='one,two,three,four' setChoosedValue={setChoosedValue} setOnEnterPress={setOnEnterPress}/>
  )
}
```
>data string must be comma seperated values

>choosedValue is the value that user click

>enteredValue is the value of input when user click enter

<br>
<br>

![](hetu.gif)

<br>

## License

MIT © [Hetu1107](https://github.com/Hetu1107)
