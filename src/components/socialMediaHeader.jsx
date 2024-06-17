const MediaHeader = () => {
    return (
        <>
       <nav>
        <ul className="media-header">
            <li>
            <a
                href="https://github.com/AlejandraValdivia"
                alt="Alejandra's Github"
                target="_blank"
                rel="noopener noreferrer"
            >
                <i className="fab fa-github-alt"></i>
            </a>
            </li>
            <li>
            <a
                href="https://www.linkedin.com/in/alejandra-valdivia-developer/"
                alt="Alejandra's LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
            >
                <i className="fab fa-linkedin-in"></i>
            </a>
            </li>
            <li>
            <a
                href="https://dev.to/alejandravaldivia"
                alt="Alejandra's Blog"
                target="_blank"
                rel="noopener noreferrer"
            >
                <i className="fab fa-dev"></i>
            </a>
            </li>
        </ul>
       </nav> 
        </>
    )
}

export default MediaHeader