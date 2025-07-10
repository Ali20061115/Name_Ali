import { useState } from "react";

function useFilterUsers(users, searchTerm) {
  const filteredUsers = users.filter((user) =>
    user.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return { filteredUsers };
}

export default useFilterUsers; 