import React from "react";
import ReactDOM from "react-dom";
// import "./styles.css";
class Fotorama extends React.Component {
  constructor(props) {
    super(props);
  }

  // Use vanilla js to manually import dependencies
  manImportDep(URI) {
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
    } else {
      return -1; // error
    }
    script.async = true;
    console.log(script);
    this.addToHead(script);
  }

  // use vanilla js to add dep. to the head of the document
  addToHead(ele) {
    if (!document.head.contains(ele)) {
      document.head.appendChild(ele);
      return 1;
    } else {
      return 0;
    }
  }

  // import those dep!
  componentDidMount() {}
  render() {
    const dep = [
      "https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js",
      "https://cdnjs.cloudflare.com/ajax/libs/fotorama/4.6.4/fotorama.css",
      "https://cdnjs.cloudflare.com/ajax/libs/fotorama/4.6.4/fotorama.js"
    ];
    dep.map(uri => {
      this.manImportDep(uri);
    });
    console.log(document.head);
    return (
      <div
        className="fotorama"
        data-nav="thumbs"
        data-width="100%"
        data-ratio="800/600"
        data-navposition="top"
        data-allowfullscreen="true"
        data-keyboard="true"
      >
        <a href="https://s.fotorama.io/1.jpg" />
        <a href="https://s.fotorama.io/2.jpg" />
        <a href="https://s.fotorama.io/3.jpg" />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Fotorama />, rootElement);
