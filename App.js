
import './App.css';

import React from 'react';


import Header from './components/header/Header';
import Body from './components/body/Body';

class App extends React.Component {

constructor(props) {
  super(props)

  this.state = {
    activeTab: -1
  }
  this.changeTab = this.changeTab.bind(this)
  this.examinePath = this.examinePath.bind(this)
}
changeTab(tab) {
  if(this.state.activeTab === tab) {
    return
  }

  switch(tab) {
    case 1:
     default:
      this.setState({ activeTab: 1});
      window.history.pushState(null, "Tab1","/add-contact");
      break;

      case 2: 
      this.setState({ activeTab: 2});
      window.history.pushState(null, "Tab2","/phonebook");
      break;
  }
}
examinePath() {
  switch (window.location.pathname) {
    case "/add-contact": case "":
      default:
      this.setState({activeTab: 1});
      break;

      case "/phonebook": 
      case 2:
      this.setState({activeTab: 2});
      break;
  }
}
componentDidMount(){
  this.examinePath()

  window.onpopstate = this.examinePath
}


  render() {
    return (
      <div id='app-container'>
        <Header changeTab={this.changeTab} tab={this.state.activeTab}></Header>
        <Body tab={this.state.activeTab}></Body>
      </div>
    )
  }
}



export default App;

