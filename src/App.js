import React from 'react';
import './App.scss';
import { Switch, Route, Redirect } from 'react-router-dom';
import HomePage from './pages/homepage/homepage';
import PlayPage from './pages/playpage/playpage';
import Header from './components/header/header';
import Auth from './pages/auth/auth';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null
    };
  }

    unsubscribeFromAuth = null;

    componentDidMount() {
      this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
        if (userAuth) {
          const userRef = await createUserProfileDocument(userAuth);

          userRef.onSnapshot(snapShot => {
            this.setState({
              currentUser: {
                id: snapShot.id,
                ...snapShot.data()
              }
            });
            console.log(this.state);
          });
        }

        this.setState({currentUser: userAuth});
      });
    }

    componentWillUnmount() {
      this.unsubscribeFromAuth();
    }

  render() {
    return (
      <div className="App">
          <Header currentUser={this.state.currentUser} />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/play" component={PlayPage} />
            {/* <Route path="/rounds" component={RoundsPage} />
            <Route path="/statistics" component={StatisticsPage} />
            <Route path="/profile" component={ProfilePage} /> */}
            {/* <Route exact path="/signin" render={() => this.props.currentUser ? (<Redirect to="/" />) : (<Auth /> )} /> */}
            <Route exact path="/signin" render={() => <Auth /> } />

          </Switch>
      </div>
    );
  }
}

export default App;
