import React from 'react';
import Header from './components/header';
import Footer from './components/footer';

class App extends React.Component {
  constructor (props) {
  	super(props);

  	this.state = {
  	  page: 'default',
  	};

    this.patreon = this.patreon.bind(this);
  }

  patreon() {
  	return this.setState({
  	  page: 'patreon',
  	});
  }

  render() {
  	let pageLayout;

  	if (this.state.page === 'default') {
  	  pageLayout = (
        <div>
          <Default />
        </div>
  	  )
  	}

  	if (this.state.page === 'patreon') {
  	  pageLayout = (
        <div>
          Patreon View
        </div>
  	  )
  	}

  	return (
      <div>
        <Header />
          {pageLayout}
        <Footer />
      </div>
  	);
  }
}

export default App;