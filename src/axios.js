import axios from "axios";

export const api = axios.create({
  baseURL: "https://fyp-backend.herokuapp.com"
  /* other custom settings */
});

export const adminRoutes = {
  issue: "",
  login: "/admin/signin",
  signup: "/admin/signup",
  allCertificates: "/admin/certificates",
  issueCertificate: "/admin/certificates/issue"
};

export const studentRoutes = {
  login: "/student/signin",
  signup: "/student/signup",
  getCertificate: "/student/certificate?rollnumber="
};

// module.exports = { api, adminRoutes };
