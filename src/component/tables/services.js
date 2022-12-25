export function getData(apiUrl){
    
    return fetch(apiUrl)
      .then((res) => res.json())

}