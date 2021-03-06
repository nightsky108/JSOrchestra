"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//initialize react
//make sure jquery works

//creates a blank div, appends it to the body of JSFiddle.net
$("<div id='jsOrchestra'></div>").appendTo("body");
var robotoTag = $('<link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">');
var quicksandTag = $('<link href="https://fonts.googleapis.com/css?family=Quicksand" rel="stylesheet">');
$('head').append(robotoTag);
$('head').append(quicksandTag);

var Router = ReactRouter.BrowserRouter;
var Match = ReactRouter.Match;
var Link = ReactRouter.Link;

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        this.props.children
      );
    }
  }]);

  return App;
}(React.Component);

var Splash = function (_React$Component2) {
  _inherits(Splash, _React$Component2);

  function Splash() {
    _classCallCheck(this, Splash);

    return _possibleConstructorReturn(this, (Splash.__proto__ || Object.getPrototypeOf(Splash)).apply(this, arguments));
  }

  _createClass(Splash, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { id: "splashScreen" },
        React.createElement(
          Link,
          { to: "/codefuture/oo2sv7sL/lessons" },
          React.createElement(
            "button",
            { id: "splashBtn" },
            "START"
          )
        )
      );
    }
  }]);

  return Splash;
}(React.Component);

var LessonList = function (_React$Component3) {
  _inherits(LessonList, _React$Component3);

  function LessonList() {
    _classCallCheck(this, LessonList);

    return _possibleConstructorReturn(this, (LessonList.__proto__ || Object.getPrototypeOf(LessonList)).apply(this, arguments));
  }

  _createClass(LessonList, [{
    key: "getInitialState",
    value: function getInitialState() {
      return {
        selected: 'p1'
      };
    }
  }, {
    key: "onItemClick",
    value: function onItemClick(event) {
      event.preventDefault();
      this.setState({ selectedItem: event.currentTarget.dataset.id });

      var elementId = event.target.id;
      switch (elementId) {
        case 'panel1':
          $('#currentState').removeClass();
          $('#currentState').addClass(elementId + 'Class');
          break;
        case 'panel2':
          $('#currentState').removeClass();
          $('#currentState').addClass(elementId + 'Class');
          break;
        case 'panel3':
          $('#currentState').removeClass();
          $('#currentState').addClass(elementId + 'Class');
          break;
        case 'panel4':
          $('#currentState').removeClass();
          $('#currentState').addClass(elementId + 'Class');
          break;
        case 'panel5':
          $('#currentState').removeClass();
          $('#currentState').addClass(elementId + 'Class');
          break;
        case 'panel6':
          $('#currentState').removeClass();
          $('#currentState').addClass(elementId + 'Class');
          break;
        case 'panel7':
          $('#currentState').removeClass();
          $('#currentState').addClass(elementId + 'Class');
          break;
        case 'panel8':
          $('#currentState').removeClass();
          $('#currentState').addClass(elementId + 'Class');
          break;
      }
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { id: "lessonList" },
        React.createElement(
          "div",
          { id: "twoRows" },
          React.createElement(
            "div",
            { id: "lessonDesc" },
            React.createElement(
              Link,
              { to: "/codefuture/oo2sv7sL/tutor" },
              React.createElement("div", { id: "currentState", "class": "panel1Class" })
            )
          ),
          React.createElement(
            "div",
            { id: "container" },
            React.createElement(
              "div",
              { onClick: this.onItemClick.bind(this), id: "panel1", className: "panel" },
              "1"
            ),
            React.createElement(
              "div",
              { onClick: this.onItemClick.bind(this), id: "panel2", className: "panel" },
              "2"
            ),
            React.createElement(
              "div",
              { onClick: this.onItemClick.bind(this), id: "panel3", className: "panel" },
              "3"
            ),
            React.createElement(
              "div",
              { onClick: this.onItemClick.bind(this), id: "panel4", className: "panel" },
              "4"
            ),
            React.createElement(
              "div",
              { onClick: this.onItemClick.bind(this), id: "panel5", className: "panel" },
              "5"
            ),
            React.createElement(
              "div",
              { onClick: this.onItemClick.bind(this), id: "panel6", className: "panel" },
              "6"
            ),
            React.createElement(
              "div",
              { onClick: this.onItemClick.bind(this), id: "panel7", className: "panel" },
              "7"
            ),
            React.createElement(
              "div",
              { onClick: this.onItemClick.bind(this), id: "panel8", className: "panel" },
              "8"
            )
          )
        )
      );
    }
  }]);

  return LessonList;
}(React.Component);

var TutorApp = function (_React$Component4) {
  _inherits(TutorApp, _React$Component4);

  function TutorApp() {
    _classCallCheck(this, TutorApp);

    return _possibleConstructorReturn(this, (TutorApp.__proto__ || Object.getPrototypeOf(TutorApp)).apply(this, arguments));
  }

  _createClass(TutorApp, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "render",
    value: function render() {
      return React.createElement("div", null);
    }
  }]);

  return TutorApp;
}(React.Component);

ReactDOM.render(React.createElement(
  Router,
  null,
  React.createElement(Match, { exactly: true, pattern: "/codefuture/oo2sv7sL/", component: Splash }),
  React.createElement(Match, { pattern: "/codefuture/oo2sv7sL/lessons", component: LessonList }),
  React.createElement(Match, { pattern: "/codefuture/oo2sv7sL/tutor", component: TutorApp })
), document.getElementById('jsOrchestra'));