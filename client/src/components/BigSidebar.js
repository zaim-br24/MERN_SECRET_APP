import {GrClose} from 'react-icons/gr'
import { useAppContext } from '../context/appContext'
import Wrapper from '../assets/Styles/BigSidebarWrapper'
import NavLinks from './NavLinks';


const BigSidebar = () => {
  const { toggleOverly } = useAppContext()
  return (
    <Wrapper>
      <div className='sidebar-container' >
         <div className='close-btn'> <GrClose/> </div>
        <div className='content'>
          <NavLinks insertText={true} toggleOverly={toggleOverly}/>
        </div>
      </div>
      
    </Wrapper>
  )
}

export default BigSidebar