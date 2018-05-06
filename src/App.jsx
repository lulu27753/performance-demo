import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log('构造函数只执行一次');
    this.handleClick = this.handleClick.bind(this)
    this.state = {
      num: 1,
      title: 'Demo'
    }
    this.style = {
      color: 'red'
    }
  }
  handleClick() {
    // console.log('test');
    this.setState({
      num: this.state.num + 1,
    });
  }
  render() {
    const item = {demo: 'demo'}
    console.log('render');
    return (
      <div>
        <h2>每一次渲染render bind都会执行一次, {this.state.num}</h2>
        <button onClick={this.handleClick.bind(this)}>按钮1</button>

        <p>下面两种情况是一样的，每一次渲染render 都要重新生成一个对象传递</p>
        <button onClick={() => this.handleClick()}>按钮2</button>
        <Demo style={{color: 'red'}} name={{demo: 'demo'}} />

        <p>如果只需要传递一个属性，但是却额外传递了其他的属性进去也是不推荐的</p>
        <Demo title={this.state.title} />
        <Demo {...this.state} />

        <p>推荐写法，性能较优</p>
        <button onClick={this.handleClick}>推荐写法</button>
        <Demo style={this.style} name={{item}} />
      </div>
    );
  }
}


class Demo extends React.Component {
  render() {
    console.log('Demo render 执行中');
    return (
      <div>
        <h2>I am Demo</h2>
      </div>
    );
  }
}
export default App;
