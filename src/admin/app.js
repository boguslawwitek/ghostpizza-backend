import logo from "../extensions/logo.png";

const config = {
  locales: [
      'pl',
  ],
  auth: {
    logo: logo,
  },
  menu: {
    logo: logo,
  }
};

const bootstrap = (app) => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};