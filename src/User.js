import React, { useState } from "react";

function User() {
  const [selected, setSelected] = useState("");
  const [admin, setAdmin] = useState(true);

  return (
    <div>
      <button onClick={() => setSelected("message")}>message</button>
      <button onClick={() => setSelected("posts")}>posts</button>
      {admin ?? <p>ERROR admin is null or undefined</p>}
      <p>{selected}</p>
    </div>
  );
}
export default User;
