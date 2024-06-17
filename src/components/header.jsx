import { useState } from 'react'
import { slide as Menu } from 'react-burger-menu';

const Header = () => {
    let  [isClosed, setClosed] = useState();

    const closeMenuHandler = () => {
        if (isClosed === false) {
            setClosed(true);
        } else {
            setClosed(false);
        }
    }
    return (
        <>
          <Menu isOpen={isClosed} width={230}>
          <a href="#about" alt="about" onClick={closeMenuHandler}>
          About
        </a>
        <a href="#cats" alt="gallery of cat images" onClick={closeMenuHandler}>
          Cats
        </a>
        <a href="#profile" alt="Profile" onClick={closeMenuHandler}>
          Profile
        </a>

        <div>
          <ul className="bm-burger-socialsnav">
            <li>
              <a
                className="bm-burger-socialsnav-item"
                href="https://github.com/AlejandraValdivia"
                alt="Alejandra's Github"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className=" bm-item fab fa-github-alt " />
              </a>
            </li>
            <li>
              <a
                className="bm-burger-socialsnav-item"
                href="https://www.linkedin.com/in/alejandra-valdivia-developer/"
                alt="Alejandra's LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className=" bm-item fab fa-linkedin-in " />
              </a>
            </li>
            <li>
              <a
                className="bm-burger-socialsnav-item"
                href="https://dev.to/alejandravaldivia"
                alt="Alejandra's Blog"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className=" bm-item fab fa-dev " />
              </a>
            </li>
          </ul>
        </div>
          </Menu>
        </>
    )
}    
export default Header