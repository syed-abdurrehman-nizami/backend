require("dotenv").config();
const express = require("express");
const app = express();

const githubdata = {
  login: "syed-abdurrehman-nizami",
  id: 141093215,
  node_id: "U_kgDOCGjpXw",
  avatar_url: "https://avatars.githubusercontent.com/u/141093215?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/syed-abdurrehman-nizami",
  html_url: "https://github.com/syed-abdurrehman-nizami",
  followers_url:
    "https://api.github.com/users/syed-abdurrehman-nizami/followers",
  following_url:
    "https://api.github.com/users/syed-abdurrehman-nizami/following{/other_user}",
  gists_url:
    "https://api.github.com/users/syed-abdurrehman-nizami/gists{/gist_id}",
  starred_url:
    "https://api.github.com/users/syed-abdurrehman-nizami/starred{/owner}{/repo}",
  subscriptions_url:
    "https://api.github.com/users/syed-abdurrehman-nizami/subscriptions",
  organizations_url:
    "https://api.github.com/users/syed-abdurrehman-nizami/orgs",
  repos_url: "https://api.github.com/users/syed-abdurrehman-nizami/repos",
  events_url:
    "https://api.github.com/users/syed-abdurrehman-nizami/events{/privacy}",
  received_events_url:
    "https://api.github.com/users/syed-abdurrehman-nizami/received_events",
  type: "User",
  site_admin: false,
  name: "Syed Abdur Rehman",
  company: null,
  blog: "",
  location: null,
  email: null,
  hireable: null,
  bio: "Student of Software Engineering | Junior Developer of MERN stack | Strong Command on OOP and DSA | Expert in Operating System concepts.",
  twitter_username: null,
  public_repos: 11,
  public_gists: 0,
  followers: 2,
  following: 3,
  created_at: "2023-08-01T01:20:56Z",
  updated_at: "2024-08-17T14:57:44Z",
};

app.get("/", (req, res) => {
  res.send("home page");
});

app.get("/login", (req, res) => {
  res.send("<h1>This is a login page</h1>");
});

app.get("/signup", (req, res) => {
  res.send("<h1> this is a sign up page <h1>");
});

app.get("/github", (req, res) => {
  res.json(githubdata);
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
