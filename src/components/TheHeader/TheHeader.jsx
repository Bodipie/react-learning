import "./TheHeader.css";


// links has name & url

function TheHeader({links}) {
  return (
    <header className="the-header">
      <nav>
        <ul>
            {
                links.map(({url, name}) => (
                  <li>
                    <a href={url}>{name}</a>
                  </li>
                ))
            }
        </ul>
      </nav>
    </header>
  );
}

export default TheHeader;