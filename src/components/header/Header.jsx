import './header.css'
import foodMenu from "../../../public/Food menu .pdf"

const Header = () => {
  return (
    <div className='header'>
        {/* LOGO */}
     <div className='logoContainer'>
        <img src="./logo.png" alt="" />
        <span>Café 4Key.</span>
     </div>
        {/* DOWNLOAD */}
       <div className="downloadConatiner">
        <a href={foodMenu} target='_blank'>
            <button>Download Menu🍕</button>
        </a>
        <a href="#contact">
            <button>Say Hello👋</button>
        </a>
       </div>
    </div>
  )
}

export default Header