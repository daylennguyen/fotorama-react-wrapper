// @auth daylen nguyen
// @date 3/21/19
import React from "react";
import ReactDOM from "react-dom";

/*                      */
/*    Helper Functions
/*                        */

/*
 Use vanilla js to manually import dependencies
 in: uri of cdn
 out: link or script html elements (string)
*/
const generateCDNImportString = URI => {
  let script;
  let uriExtension = URI.slice(-4).toLowerCase();
  // check the uri file extension
  if (uriExtension == ".css") {
    script = document.createElement("link");
    script.rel = "stylesheet";
    script.href = URI;
  } else if (uriExtension.includes(".js")) {
    script = document.createElement("script");
    script.type = "text/javascript";
    script.src = URI;
    script.async = true;
  } else {
    return -1; // error
  }
  console.log(script);
  return script;
};

/* use vanilla js to add dep. to the head of the document */
const addToHead = ele => {
  if (!document.head.contains(ele)) {
    document.head.appendChild(ele);
    return 1;
  } else {
    return 0;
  }
};

// No children provided? just show some example photos
const example = (
  <>
    <img src="https://s.fotorama.io/1.jpg" />
    <img src="https://s.fotorama.io/2.jpg" />
    <img src="https://s.fotorama.io/3.jpg" />
  </>
);

class Fotorama extends React.Component {
  // import those dep!
  componentDidMount() {
    if (this.props.imp) {
      const dep = [
        "https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js",
        "https://cdnjs.cloudflare.com/ajax/libs/fotorama/4.6.4/fotorama.css",
        "https://cdnjs.cloudflare.com/ajax/libs/fotorama/4.6.4/fotorama.js"
      ];
      dep
        .map(uri => {
          return generateCDNImportString(uri);
        })
        .map(cdnTag => {
          return addToHead(cdnTag);
        });
    }
  }

  render() {
    const { children, className, ...otherProps } = this.props;
    let appendFotorama = `${className} fotorama`;
    return (
      <div className={appendFotorama} {...otherProps}>
        {children ? children : example}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Fotorama />, rootElement);
