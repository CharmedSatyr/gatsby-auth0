import React from 'react'
import { Router } from '@reach/router'
import { login, logout, isAuthenticated, getProfile } from '../utils/auth'
import { Link } from 'gatsby'

const Home = ({ user }) => <p>Hi, {user.name ? user.name : 'friend'}</p>
const Settings = () => <p>Settings</p>
const Billing = () => <p>Billing</p>

const Account = () => {
  if (!isAuthenticated()) {
    login()
    return <p>Redirecting to login...</p>
  }
  const user = getProfile()
  console.log('user:', user)

  const handleLogout = e => {
    e.preventDefault()
    logout()
  }

  return (
    <>
      <nav>
        <Link to="/account">Home</Link>{' '}
        <Link to="/account/settings">Settings</Link>{' '}
        <Link to="/account/billing">Billing</Link>{' '}
        <a href="#logout" onClick={handleLogout}>
          Log Out
        </a>
      </nav>
      <Router>
        <Home path="/account" user={user} />
        <Settings path="/account/settings" />
        <Billing path="/account/billing" />
      </Router>
    </>
  )
}

export default Account
