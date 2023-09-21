import {
    homeLight,
    bookmarkLight,
    addSquareLight, 
    clipshotLight,
    watchLight,
    redoosLight,
  } from '../assets/icons/index'

  
  const links = [
    {id:1,path: '/', text: 'Home',icon: <img className="icon" alt='sidebar-icon' src={homeLight}/>   },
    {id:2,path: '/redoos', text: 'Redoos', icon: <img className="icon" alt='sidebar-icon' src={redoosLight}/>},
    {id:3,path: '/clipshots',text: 'Clipshots',icon: <img className="icon" alt='sidebar-icon' src={clipshotLight}/>, showRecommendation: false },
    {id:4,path: '/watch', text: 'Watch',icon: <img className="icon" alt='sidebar-icon' src={watchLight}/>},   
    {id:5,path: 'submit', text: 'Create a Post',icon: <img className="icon" alt='sidebar-icon' src={addSquareLight}/>, overly: true},
    {id:6,path: '/saved-list', text:'Saved List', icon: <img className="icon" alt='sidebar-icon' src={bookmarkLight}/>}

  ];
 

  export default links