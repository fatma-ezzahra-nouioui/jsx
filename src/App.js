import logo from './logo.svg';
import ProfilePhoto from "./component/Profile/ProfilePhoto";
import Address from "./component/Profile/Address";
import FullName from "./component/Profile/FullName";
import './App.css';
import React from "react";
      const App = () => {
        return (
          <>
          <ProfilePhoto />;
          <Address />;
          <FullName />;
          </>
          
      );
};

export default App;