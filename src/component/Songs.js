import React from 'react'

const Songs = () => {
    let playlist = [
        {
            singer : 'Sidhu Moosewala',
            song : 'Drippy',
            Language: 'Punjabi'
        },
        {
            singer : 'Drake',
            song : 'Life is Good',
            Language: 'English'
        },
        {
            singer : 'Divine',
            song : '3:59',
            Language: 'Hindi'
        },
        {
            singer : 'Karan Aujla',
            song : 'God its okay',
            Language: 'Punjabi'
        }
    ]
  return (
    <>
        <table className='table table-striped'>
           <thead>
              <tr>
                <th>Singer</th>
                <th>Song</th>
                <th>Language</th>
              </tr>
           </thead>
           <tbody>
        {
            playlist.map((elem,index) => (
             <tr key={index}>
                <td>{elem.singer}</td>
                <td>{elem.song}</td>
                <td>{elem.Language}</td>
             </tr>
            ))
        }
           </tbody>
        
        </table>
    </>
  )
}

export default Songs