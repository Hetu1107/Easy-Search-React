import styles from '../styles.module.css'
export function onchangeSearch(dataString,e,setChoosedValue){
    const values = dataString.split(',');
    const result = [];
    for(let i in values){
        if(values[i].includes(e)){
            result.push(values[i]);
        }
    }
    const parent = document.getElementById("search-result");
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
    if(result.length == 0){
        let a = document.createElement('span');
        a.innerHTML = "not found";
        a.className = styles.text;
        a.id = 'search-span'
        document.getElementById('search-result').appendChild(a);
        return;
    }
    else{
    for(let i in result){
        if(i+1==8){
            break;
        }
        else{
            let a = document.createElement('span');
        a.innerText = result[i];
        a.className = styles.text;
        a.id = `search-span-${i}`;
        a.addEventListener('click',()=>{
            setChoosedValue(result[i]);
        })
        a.addEventListener('mouseover',()=>{
            document.getElementById(`search-span-${i}`).style.backgroundColor = 'rgba(0, 0, 0, 0.164)';
        })
        a.addEventListener('mouseout',()=>{
            document.getElementById(`search-span-${i}`).style.backgroundColor = 'white';
        })
        document.getElementById('search-result').appendChild(a);
        }
    }
    return;
}
}