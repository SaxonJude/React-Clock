class App extends React.Component {
  getTime() {
      setInterval(() => {
      const date = new Date().toLocaleTimeString();
      ReactDOM.render(date, document.querySelector('#root'))
    }, 1000)
  }
  
  render() {
    return (
      <div>
        {this.getTime()}
      </div>
    );
  }
};

ReactDOM.render(<App />, document.querySelector('#root'));
