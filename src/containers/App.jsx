import React, { Component } from 'react'

//redux
import { connect } from 'react-redux'
import { setSearchField, requestRobots } from '../redux/actions'

//components
import CardList from '../components/CardList'
import Scroll from '../components/Scroll'
import SearchBox from '../components/SearchBox'

//css
import 'tachyons'
import './App.css'

//error catch
import ErrorBoundary from '../components/ErrorBoundary'

export class App extends Component {
  componentDidMount() {
    this.props.onRequestRobots()
  }

  filteredRobots = () => {
    const { searchField, robots } = this.props
    return robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase())
    })
  }

  render() {
    const { onSearchChange, isPending } = this.props
    return isPending ? (
      <h1>Loading...</h1>
    ) : (
      <div className="tc">
        <h1 className="f1">RoboFriends</h1>
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          <ErrorBoundary>
            <CardList robots={this.filteredRobots()} />
          </ErrorBoundary>
        </Scroll>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    erorr: state.requestRobots.error,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: event => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
