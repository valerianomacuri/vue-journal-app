import axios from "axios"

const authApi = axios.create({
  baseURL:
    "https://identitytoolkit.googleapis.com/v1/accounts",
  params: {
    key: "AIzaSyCGA_mw2JiRLJd6r72OpjjbfPzh6e6SsbA",
  },
})

export default authApi
