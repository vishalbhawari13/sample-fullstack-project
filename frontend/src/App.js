import React, {useEffect, useState} from 'react';

function App(){
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(()=> {
    fetch('/api/users').then(res=>res.json()).then(setUsers).catch(console.error);
  },[]);

  const addUser = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/users', {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({name, email})
    });
    const data = await res.json();
    setUsers(prev => [...prev, data]);
    setName(''); setEmail('');
  }

  return (
    <div style={{padding:20, fontFamily:'Arial'}}>
      <h2>Users</h2>
      <ul>
        {users.map(u => <li key={u.id}>{u.name} — {u.email}</li>)}
      </ul>
      <h3>Add User</h3>
      <form onSubmit={addUser}>
        <input placeholder="name" value={name} onChange={e=>setName(e.target.value)} required/>
        <input placeholder="email" value={email} onChange={e=>setEmail(e.target.value)} required style={{marginLeft:8}}/>
        <button type="submit" style={{marginLeft:8}}>Add</button>
      </form>
    </div>
  );
}

export default App;
