/**
 *
 * @authors Your Name (you@example.org)
 * @date    2018-10-15 19:33:02
 * @version $Id$
 */
//html渲染
ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('root')
);
//组件基本写法
class App extends from Component{
	constructor(props) {
	    super(props);
	    this.state = {date: new Date()};
	  }
	render(){
		return (

		)
	}
}
export default App
//组件传props的两种写法
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

const element = <Welcome name="Sara" />;

function App() {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
    </div>
  );
}
ReactDOM.render(
  element,//<App />
  document.getElementById('root')
);
//
