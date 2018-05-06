import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log('构造函数只执行一次');
    this.handleNum = this.handleNum.bind(this);
    this.handleTitle = this.handleTitle.bind(this);
    this.state = {
      num: 1,
      title: 'Demo'
    };
  }
  handleNum() {
    this.setState({
      num: this.state.num + 1,
    });
  }
  handleTitle() {
    if (this.state.num % 2 === 0) {
      this.setState({
        title: '偶数'
      });
    } else {
      this.setState({
          title: '奇数'
        });
    }
  }
  render() {
    return (
      <div>
        <p>推荐写法，性能较优</p>
        { this.state.num }
        <button onClick={this.handleNum}>修改数字</button>
        <button onClick={this.handleTitle}>修改标题</button>
        <Demo style={this.style} name={this.state.title} />
      </div>
    );
  }
}

class Demo extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    // eslint-disable-next-line
    if (nextProps.name === this.props.name) {
      return false
    }
    return true;
  }
  render() {
    console.log('Demo render 执行中');
    return (
      <div>
        <h2>I am Demo,{ this.props.name }</h2>
      </div>
    );
  }
}
export default App;
