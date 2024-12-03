const baseUrl = "http://localhost:3000/v1";

let headersList = {
  Accept: "*/*",
  "Content-Type": "application/json",
};

export const getUserById = async (id) => {
  try {
    const res = await fetch(`${baseUrl}/users/${id}`);
    const data = res.json();
    return data;
  } catch (e) {
    return e;
  }
};

//delete User
export const deleteUser = async (id) => {
  let response = await fetch(
    `${baseUrl}/users/${id}`,
    {
      method: "DELETE",
      headers: headersList,
    }
  );

  let data = await response.text();
  console.log(data);
};

export const loginUser = async (data) => {
  let bodyContent = JSON.stringify({
    email: data.email,
    password: data.password,
  });
  try {
    const res = await fetch(`${baseUrl}/auth/login`, {
      method: "POST",
      body: bodyContent,
      headers: headersList,
    });
    const data = res.json();
    return data;
  } catch (e) {
    return e;
  }
};

// Get All Users
export const fetchAllUsers = async () => {
  try {
    const res = await fetch(`${baseUrl}/users`);
    const data = res.json();
    return data;
  } catch (e) {
    return e;
  }
};

// create User
export const createUser = async (data) => {
  console.log(data);

  let bodyContent = JSON.stringify({
    username: data.username,
    email: data.email,
    password: data.password,
    roles: data.role,
  });
  try {
    let response = await fetch(`${baseUrl}/users`, {
      method: "POST",
      body: bodyContent,
      headers: headersList,
    });
    const data = res.json();
    return data;
  } catch (e) {
    return e;
  }
};
