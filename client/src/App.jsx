import "./App.css";

function App() {
  return (
    <>
      <div className="container">
        <h3>CRUD Application with React.js Frontend and Node.js Backend</h3>
        <div className="input-search">
          <input type="search" />
          <button className="btn green">Add Record</button>
        </div>  
          <table className="table">
            <thead>
              <th>S.No</th>
              <th>Name</th>
              <th>Age</th>
              <th>City</th>
              <th>Edit</th>
              <th>Delete</th>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Aakash</td>
                <td>22</td>
                <td>Kanyakumari</td>
                <td><button className="btn green">Edit</button></td>
                <td><button className="btn red">Delete</button></td>
              </tr>
              <tr>
                <td>2</td>
                <td>Aakash</td>
                <td>22</td>
                <td>Kanyakumari</td>
                <td><button className="btn green">Edit</button></td>
                <td><button className="btn red">Delete</button></td>
              </tr>
              <tr>
                <td>3</td>
                <td>Aakash</td>
                <td>22</td>
                <td>Kanyakumari</td>
                <td><button className="btn green">Edit</button></td>
                <td><button className="btn red">Delete</button></td>
              </tr>
              <tr>
                <td>4</td>
                <td>Aakash</td>
                <td>22</td>
                <td>Kanyakumari</td>
                <td><button className="btn green">Edit</button></td>
                <td><button className="btn red">Delete</button></td>
              </tr>
              <tr>
                <td>5</td>
                <td>Aakash</td>
                <td>22</td>
                <td>Kanyakumari</td>
                <td><button className="btn green">Edit</button></td>
                <td><button className="btn red">Delete</button></td>
              </tr>
            </tbody>
          </table>
      </div>
    </>
  );
}

export default App;
