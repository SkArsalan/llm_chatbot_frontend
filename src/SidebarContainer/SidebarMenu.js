import { useState } from "react"


function SidebarMenu({title, submenu, path, label}) {
    const [isSubmenuOpen, setSubmenuOpen] = useState(false);
    
    //If Submenu exists, render Collapsible menu
    if (submenu){
        return (
            <li className={isSubmenuOpen ? 'active' : ''}>
          <a
            to="#"
            onClick={() => setSubmenuOpen(!isSubmenuOpen)}
            className="dropdown-toggle"
            aria-expanded = {isSubmenuOpen}
          >
            {title}
          </a>
          <ul className={`collapse list-unstyled small-font ${isSubmenuOpen ? 'show' : ''}`} id="homeSubmenu">
            {submenu.map((item, index) => <li key={index}><a to={item.path}>{item.label}</a></li> )}
            

          </ul>
        </li>
        )
    }
    return (
        <li><a to={path}>{label}</a></li>
    )
}

export default SidebarMenu
