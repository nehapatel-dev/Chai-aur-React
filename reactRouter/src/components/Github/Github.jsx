
import React, { useState, useEffect } from 'react';
function Github(){
  const [data, setData] = useState({})
  useEffect(() => {
    fetch('https://api.github.com/users/nehapatel-dev')
    .then(response => response.json())
    .then(data => {
      console.log(data);
      setData(data)
    })
    
  },[])
  return(
    <div className= 'text-center m-4 bg-gray-600 text-white p-4 text-3xl'>GitHub Followers: {data.followers}
    <img src={data.avatar_url} alt="Git picture"/>
    </div>
  )
}

export default Github