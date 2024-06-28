import React from "react";

const Header = () => {
  return (
    <div className="header">
      <div className="header-inner">
        <div className="header-search">
          <i class="fa-brands fa-linkedin"></i>
          <input type="text" placeholder="Search" />
        </div>
        <div className="header-sections">
          <ul>
            <div className="header-sections-i">
              <i class="fa-solid fa-house"></i>
              <li>Home</li>
            </div>
            <i class="fa-solid fa-people-group"></i>
            <li>Network</li>
            <div className="header-sections-i">
              <i class="fa-solid fa-briefcase"></i>
              <li>Jobs</li>
            </div>
            <div className="header-sections-i">
              <i class="fa-solid fa-comment-dots"></i>
              <li>Messaging</li>
            </div>
            <div className="header-sections-i">
              <i class="fa-solid fa-bell"></i>
              <li>Notifications</li>
            </div>
            <li>Me</li>
          </ul>
        </div>
        <div className="header-bussiness">For Bussiness</div>
      </div>
    </div>
  );
};

export default Header;
