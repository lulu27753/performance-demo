import React from 'react';
import './App.css';

let obj = {name: 1};
let obj1 = {name: 1};
function compareObj(obj1, obj2) {
  // 如果引用地址相同，则是同一个对象
  if (obj1 == obj2) {
    return true;
  }
  // 如果两个对象的key值长度不等，则不可能相等
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }
  // 如果两个对象其中有一个key的值不等，则两个对象不等
  for (let key in obj1) {
    if (obj1[key] !== obj2[key]) {
      return false
    }
  }
  return true;
}

console.log('比较两个对象是否相等', compareObj(obj, obj1));



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

class Demo extends React.PureComponent {
  // shouldComponentUpdate(nextProps, nextState) {
  //   // eslint-disable-next-line
  //   if (nextProps.name === this.props.name) {
  //     return false
  //   }
  //   return true;
  // }
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
