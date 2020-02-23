import axios from "axios";

export const api = axios.create({
  baseURL: "https://fyp-backend.herokuapp.com"
  // baseURL: "http://localhost:4000"
  /* other custom settings */
});

var numberOfAjaxCAllPending = 0;

// Add a request interceptor
api.interceptors.request.use(
  function(config) {
    console.log(window.location.href);
    numberOfAjaxCAllPending++;
    // show loader
    document.getElementById("myLoader").style.display = "block";
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);

// Add a response interceptor
api.interceptors.response.use(
  function(response) {
    numberOfAjaxCAllPending--;

    if (numberOfAjaxCAllPending == 0) {
      //hide myLoader
      document.getElementById("myLoader").style.display = "none";
    }
    return response;
  },
  function(error) {
    numberOfAjaxCAllPending--;
    if (numberOfAjaxCAllPending == 0) {
      //hide myLoader
      document.getElementById("myLoader").style.display = "none";
    }
    return Promise.reject(error);
  }
);

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
