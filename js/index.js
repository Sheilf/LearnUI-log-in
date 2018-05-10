var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Root = function (_React$Component) {
  _inherits(Root, _React$Component);

  function Root(props) {
    _classCallCheck(this, Root);

    return _possibleConstructorReturn(this, (Root.__proto__ || Object.getPrototypeOf(Root)).call(this, props));
  }

  _createClass(Root, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "main",
        null,
        React.createElement(
          "section",
          null,
          React.createElement(LoginPage, { banner: this.props.app })
        )
      );
    }
  }]);

  return Root;
}(React.Component);

var LoginPage = function (_React$Component2) {
  _inherits(LoginPage, _React$Component2);

  function LoginPage(props) {
    _classCallCheck(this, LoginPage);

    return _possibleConstructorReturn(this, (LoginPage.__proto__ || Object.getPrototypeOf(LoginPage)).call(this, props));
  }

  _createClass(LoginPage, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "section",
        { id: "LoginPage" },
        React.createElement(Banner, { banner: this.props.banner }),
        React.createElement(Login, null)
      );
    }
  }]);

  return LoginPage;
}(React.Component);

function Banner(props) {
  return React.createElement(
    "header",
    { id: "Banner" },
    React.createElement(
      "h1",
      null,
      props.banner
    ),
    React.createElement(
      "p",
      null,
      "Build schools studying math.",
      React.createElement("br", null)
    )
  );
}

var Login = function (_React$Component3) {
  _inherits(Login, _React$Component3);

  function Login(props) {
    _classCallCheck(this, Login);

    var _this3 = _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).call(this, props));

    _this3.state = {
      role: ""

    };

    _this3.selectRole = _this3.selectRole.bind(_this3);
    return _this3;
  }

  _createClass(Login, [{
    key: "selectRole",
    value: function selectRole(event) {
      if (event.target.id === "Teacher" || event.target.id === "Student") {
        this.setState({
          role: event.target.id
        });

        var UserPortalContainer = document.getElementById("UserPortal");
        var transitionPortalDefault = document.getElementById("display-default-portal");
        var displayRolePortal = document.getElementById("display-role-portal");

        transitionPortalDefault.style.visibility = "hidden";
        transitionPortalDefault.style.opacity = 0;

        displayRolePortal.style.opacity = 1;
        displayRolePortal.style.visibility = "visible";

        if (event.target.id === "Teacher") {

          UserPortalContainer.style.border = "2px solid #D3A841";
        } else {
          UserPortalContainer.style.border = "2px solid #055829";
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "section",
        { id: "Login", onClick: this.selectRole },
        React.createElement(UserPortal, { role: this.state.role }),
        React.createElement(Role, null)
      );
    }
  }]);

  return Login;
}(React.Component);

var UserPortal = function (_React$Component4) {
  _inherits(UserPortal, _React$Component4);

  function UserPortal(props) {
    _classCallCheck(this, UserPortal);

    var _this4 = _possibleConstructorReturn(this, (UserPortal.__proto__ || Object.getPrototypeOf(UserPortal)).call(this, props));

    _this4.state = {};
    return _this4;
  }

  _createClass(UserPortal, [{
    key: "render",
    value: function render() {
      var roleList = void 0;
      if (this.props.role === "Teacher") {
        roleList = React.createElement(
          "ul",
          { id: "roleList" },
          React.createElement(
            "li",
            null,
            "\u25A2 Track student progress"
          ),
          React.createElement(
            "li",
            null,
            "\u25A2 Improve your cirriculums with student feedback"
          ),
          React.createElement(
            "li",
            null,
            "\u25A2 Provide your students with awesome resources"
          )
        );
      } else if (this.props.role === "Student") {
        roleList = React.createElement(
          "ul",
          { id: "roleList" },
          React.createElement(
            "li",
            null,
            "\u25A2 Use guides, forums, and lectures to study."
          ),
          React.createElement(
            "li",
            null,
            "\u25A2 Practice & earn points to build help build schools."
          ),
          React.createElement(
            "li",
            null,
            "\u25A2 Personalize your account based on your hard work!"
          )
        );
      }
      return React.createElement(
        "section",
        { id: "UserPortal" },
        React.createElement(
          "div",
          { id: "display-default-portal" },
          "LearnUI is a non-profit platform designed to ",
          React.createElement("br", null),
          React.createElement(
            "b",
            null,
            "flip the classroom."
          ),
          React.createElement(
            "p",
            null,
            "Use our modules to improve math understanding while helping us build and repair schools around you!"
          )
        ),
        React.createElement(
          "div",
          { id: "display-role-portal" },
          React.createElement(
            "h2",
            { id: "role-header" },
            " ",
            this.props.role,
            " "
          ),
          roleList,
          React.createElement("br", null),
          React.createElement(
            "div",
            { id: "input-box" },
            React.createElement(
              "p",
              null,
              " Log in"
            ),
            React.createElement(
              "label",
              null,
              "Username \xA0 \xA0"
            ),
            React.createElement("input", { type: "email" }),
            React.createElement("br", null),
            React.createElement("br", null),
            React.createElement(
              "label",
              null,
              "Password \xA0 \xA0  "
            ),
            React.createElement("input", { type: "password" })
          )
        )
      );
    }
  }]);

  return UserPortal;
}(React.Component);

var Role = function (_React$Component5) {
  _inherits(Role, _React$Component5);

  function Role(props) {
    _classCallCheck(this, Role);

    return _possibleConstructorReturn(this, (Role.__proto__ || Object.getPrototypeOf(Role)).call(this, props));
  }

  _createClass(Role, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "section",
        { id: "Role" },
        React.createElement(Teacher, null),
        React.createElement(Student, null)
      );
    }
  }]);

  return Role;
}(React.Component);

var Teacher = function (_React$Component6) {
  _inherits(Teacher, _React$Component6);

  function Teacher(props) {
    _classCallCheck(this, Teacher);

    return _possibleConstructorReturn(this, (Teacher.__proto__ || Object.getPrototypeOf(Teacher)).call(this, props));
  }

  _createClass(Teacher, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "section",
        { id: "Teacher", className: "role-buttons" },
        "Teacher"
      );
    }
  }]);

  return Teacher;
}(React.Component);

var Student = function (_React$Component7) {
  _inherits(Student, _React$Component7);

  function Student(props) {
    _classCallCheck(this, Student);

    return _possibleConstructorReturn(this, (Student.__proto__ || Object.getPrototypeOf(Student)).call(this, props));
  }

  _createClass(Student, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "section",
        { id: "Student", className: "role-buttons" },
        "Student"
      );
    }
  }]);

  return Student;
}(React.Component);

ReactDOM.render(React.createElement(Root, { app: "LearnUI" }), document.getElementById("react-root"));

var xspacing = 4; // Distance between each horizontal location
var w; // Width of entire wave
var theta = 0.0; // Start angle at 0
var amplitude = 250.0; // Height of wave
var period = 125.0; // How many pixels before the wave repeats
var dx; // Value for incrementing x
var yvalues; // Using an array to store height values for the wave

//P5.JS functions for background animation;
function windowResized() {
  console.log("Resizing");
  resizeCanvas(windowWidth, windowHeight);
}
function setup() {

  //set up acts as a constructor.
  //You can set var canvas = createCanvas(x,y) here
  createCanvas(windowWidth, windowHeight);
  w = width + 16;
  dx = TWO_PI / period * xspacing;
  yvalues = new Array(floor(w / xspacing));
}
function draw() {
  //this loops a draw, about 50-55 fps
  //console.log("a frame is painted " );
  ;
  background(0, 6, 35);
  calcWave();
  renderWave();
}

function calcWave() {
  // Increment theta (try different values for 
  // 'angular velocity' here)
  // if you increase this you'll find yourself traveling thru time
  //try 0.5
  theta += 0.0015;

  // For every x value, calculate a y value with sine function
  var x = theta;
  for (var i = 0; i < yvalues.length; i++) {
    yvalues[i] = sin(x) * amplitude;
    x += dx;
  }
}
function renderWave() {
  noStroke();
  fill(255);
  // A simple way to draw the wave with an ellipse at each location
  for (var x = 0; x < yvalues.length; x++) {
    ellipse(x * xspacing, height / 2 + yvalues[x], 3.97, 3.85);
  }
}