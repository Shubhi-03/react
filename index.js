//-------------creating nested elements-------------
//-------------adding siblings----------------------
const heading = React.createElement(
    "div",
    {id: "parent"},
    [React.createElement(
        "h1",
        {id : "child"},
        "hi,H1 it is"),
        React.createElement(
            "h2",
            {id : "child"},
            "hi,H2 it is")
        ]  
     
);
// const heading = React.createElement(
//     "h1",
//  {id : "heading"},
//  "hello react!" 
//  );
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);