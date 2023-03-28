class UserForm extends React.Component {
        render() {
          return (
            <form className="user-form">
              <label>
                Name:
                <input type="text" name="name" required />
              </label>
              <label>
                Email:
                <input type="email" name="email" required />
              </label>
              <label>
                Password:
                <input type="password" name="password" required />
              </label>
              <button type="submit">Submit</button>
            </form>
          );
        }
      }

class App extends React.Component {
        render() {
          return (
            <div>
             <center> <h1>User Signup</h1> </center>
              <UserForm />
            </div>
          );
        }
      }

      ReactDOM.render(<App />, document.getElementById('app'));
