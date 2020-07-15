import React from 'react';

function App() {

  const anchorProps = {
    target: "_blank", 
    rel: "noopener noreferrerr"
  }

    return (
      <div className="container flex justify-center fixed top-0 left-0 right-0 bottom-0 p3">
        <div className="flex-main flex flex-column justify-center">
          <p>I'm Brooke Scarlett Yalof, a full-stack engineer and digital designer based in New York City. Currently, I'm developing a design system <a href="https://github.com/mongodb/leafygreen-ui" {...anchorProps}>@MongoDB</a>.</p>
          <p>I'm interested in building beautiful interfaces for users, and creating a more inclusive Internet.</p>
          
          <p>
          <span className="icon" role="img" aria-label="pile of books">📚</span>The Brother's Karamazov, Giovanni's Room, A Moveable Feast, <a href="https://www.theinfatuation.com/new-york" {...anchorProps}>The Infatuation </a>
          </p>

          <p>
            <span className="icon" role="img" aria-label="globe">🌎</span>Yoga, <a href="https://outintech.com/" {...anchorProps}>Out In Tech</a>, Cooking, Traveling, Film
          </p>

          
           
          <p>
            <a className="mr1" href="https://github.com/brookescarlett" {...anchorProps}>Github</a>
            <a className="mr1" href="https://medium.com/@brookeyalof2017" {...anchorProps}>Medium</a>
            <a className="mr1" href="mailto:bsyalof@gmail.com">Email</a>
          </p>
        </div>
        <div className="flex-minor flex justify-end">
          <span className='yin-yang'></span>
        </div>
      </div>
    );

}

export default App;
