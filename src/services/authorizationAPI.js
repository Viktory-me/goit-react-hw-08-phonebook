import axios from "axios";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

export async function signUpUser(credentials) {
  const { data } = await axios.post("/users/signup", credentials);
  token.set(data.token);
  return data;
}

export async function logInUser(credentials) {
  const { data } = await axios.post(`/users/login`, credentials);
  token.set(data.token);
  return data;
}

export async function logOutUser() {
  await axios.post(`/users/logout`);
  token.unset();
}

export async function getCurrentUser(savedToken) {
  token.set(savedToken);
  const { data } = await axios.get(`/users/current`);
  return data;
}

export async function fetchContacts() {
  const { data } = await axios.get(`/contacts`);
  return data;
}

export async function addContact(newContact) {
  const { data } = await axios.post(`/contacts`, newContact);
  return data;
}

export async function deleteContact(contactId) {
  const { data } = await axios.delete(`/contacts/${contactId}`);
  return data;
}
