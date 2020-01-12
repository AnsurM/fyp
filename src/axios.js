import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:4000"
  /* other custom settings */
});

export const adminRoutes = {
  issue: "",
  login: "/admin/signin",
  signup: "/admin/signup",
  allCertificates: "/admin/certificates",
  issueCertificate: "/admin/certificates/issue"
};

// module.exports = { api, adminRoutes };
