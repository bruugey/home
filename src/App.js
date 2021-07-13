import React from "react";

function App() {
  const anchorProps = {
    target: "_blank",
    rel: "noopener noreferrerr"
  };

  return (
    <div className="fixed top-0 left-0 bottom-0 right-0 flex flex-column justify-center container px4">
      <p>
        Hi, I'm <span className="bold">Brooke Scarlett Yalof</span>. I am a
        user-first software engineer, based in New York City, who is passionate
        about building accessible, purposeful and inclusive experiences on the
        web. Currently, I am working on the Dashboard Experience at{" "}
        <a href="https://stripe.com/" {...anchorProps}>
          Stripe
        </a>
        . Previously, I built a{" "}
        <a href="https://github.com/mongodb/leafygreen-ui" {...anchorProps}>
          Design System at MongoDB
        </a>
        .
      </p>

      <p>
        Reach out if you want to talk about web accessibility, queer literature,
        or where to see live music (mostly Grateful Dead cover bands).
      </p>

      <p>
        <span className="mr1" role="img" aria-label="call me emoji">
          🤙
        </span>
        <a href="https://github.com/brookescarlett" {...anchorProps}>
          Github
        </a>
        ,{"  "}
        <a href="mailto:bsyalof@gmail.com" {...anchorProps}>
          Email
        </a>
      </p>
    </div>
  );
}

export default App;
