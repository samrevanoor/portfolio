import "./Main.css";

const Main = () => {
  return (
    <>
      <div className="container">
        <div className="content">
          <span className="title">description</span> ={" "}
          <span className="brace">{"{"}</span> <br />
          &nbsp; <span className="title">name:</span>{" "}
          <span className="value">"sam revanoor"</span>, <br />
          &nbsp; <span className="title">job:</span>{" "}
          <span className="value">"software engineer at trint"</span>
          , <br />
          &nbsp; <span className="title">tech_stack:</span>{" "}
          <span className="brace">{"["}</span>
          <span className="value">"javascript"</span>,
          <span className="value">"typescript"</span>,
          <span className="value">"react"</span>,
          <span className="value">"aws"</span>,
          <span className="value">"docker"</span>,
          <span className="value">"terraform"</span>,
          <span className="value">"serverless"</span>,
          <span className="value">"python"</span>,
          <span className="value">"mongodb"</span>
          <span className="brace">{"]"}</span>, <br />
          &nbsp; <span className="title">github:</span>{" "}
          <span className="value">
            <a
              href="https://github.com/samrevanoor/"
              target="_blank"
              rel="noreferrer"
            >
              "/samrevanoor"
            </a>
          </span>
          , <br />
          &nbsp; <span className="title">projects:</span>{" "}
          <span className="brace">{"["}</span>
          <span className="value">
            <a
              href="https://wordlez.samrevanoor.com"
              target="_blank"
              rel="noreferrer"
            >
              "wordlez"
            </a>
          </span>
          ,
          <span className="value">
            <a
              href="https://jeopardy.samrevanoor.com"
              target="_blank"
              rel="noreferrer"
            >
              "game of thrones jeopardy"
            </a>
          </span>
          <span className="brace">{"]"}</span>, <br />
          <span className="brace">{"}"}</span>
        </div>
      </div>
    </>
  );
};

export default Main;
