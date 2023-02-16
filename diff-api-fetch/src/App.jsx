const api = "https://jsonplaceholder.typicode.com/posts";

const App = () => {

     fetch(api).then((res) => res.json()).then((data) => console.log(data));
      return (
            <div className="App">
                  <p>Fetching data. Check Console..!</p>
            </div>
      );
}

export default App
