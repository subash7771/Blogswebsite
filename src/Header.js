import { useEffect, useState } from "react";
import {Link} from "react-router-dom";

export default function Header() {
  const [username,setUsername] = useState(null);
  useEffect(() => {
    fetch('http://localhost:4000/profile', {
      credentials: 'include',
    }).then(Response => {
      Response.json().then(userInfo => {
        setUsername(userInfo.username);
      });
    });
  }, []);
  
  function logout() {
    fetch('http://localhost:4000/logout', {
      credentials: 'include',
      method: 'POST',
    })
  }

    return(
        <header>
        <Link to="/" className="logo">My Blogs</Link>
        <nav>
          {username && (
            <>
            <link to="/create"> Create New Post for Subash Blogs</link>
            <a onClick={logout}>Logout</a>
            </>
          )}
          {!username && (
            <>
          <Link to="/login">Log in</Link>
          <Link to ="/register">Register</Link>
            </>
          )}
        </nav>
      </header>
    );
}