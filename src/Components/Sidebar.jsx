import React, { useEffect } from 'react';

const Sidebar = () => {
  useEffect(() => {
    // Initialize Bootstrap's dropdown functionality
    const dropdownToggleElements = document.querySelectorAll('.dropdown-toggle');
    dropdownToggleElements.forEach((element) => {
      element.addEventListener('click', (event) => {
        event.preventDefault();
        const targetId = event.currentTarget.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement.classList.contains('show')) {
          targetElement.classList.remove('show');
        } else {
          targetElement.classList.add('show');
        }
      });
    });
  }, []);

  return (
    <div>
      <nav id="sidebar">
        <div className="sidebar-header">
          <h3>
            <img src="img/logo.png" className="img-fluid" alt="Logo" />
            <span>Vishweb design</span>
          </h3>
        </div>
        <ul className="list-unstyled components">
          <li className="active">
            <a href="#" className="dashboard">
              <i className="material-icons">dashboard</i>
              <span>Dashboard</span>
            </a>
          </li>

          <div className="small-screen navbar-display">
            <li className="dropdown d-lg-none d-md-block d-xl-none d-sm-block">
              <a
                href="#homeSubmenu0"
                className="dropdown-toggle"
              >
                <i className="material-icons">notifications</i>
                <span>4 notification</span>
              </a>
              <ul className="collapse list-unstyled menu" id="homeSubmenu0">
                <li>
                  <a href="#">You have 5 new messages</a>
                </li>
                <li>
                  <a href="#">You're now friend with Mike</a>
                </li>
                <li>
                  <a href="#">Wish Mary on her birthday!</a>
                </li>
                <li>
                  <a href="#">5 warnings in Server Console</a>
                </li>
              </ul>
            </li>

            <li className="d-lg-none d-md-block d-xl-none d-sm-block">
              <a href="#">
                <i className="material-icons">apps</i>
                <span>apps</span>
              </a>
            </li>

            <li className="d-lg-none d-md-block d-xl-none d-sm-block">
              <a href="#">
                <i className="material-icons">person</i>
                <span>user</span>
              </a>
            </li>

            <li className="d-lg-none d-md-block d-xl-none d-sm-block">
              <a href="#">
                <i className="material-icons">settings</i>
                <span>setting</span>
              </a>
            </li>
          </div>

         

        
       

       

      

         
         
          <li className="">
            <a href="#">
              <i className="material-icons">library_books</i>
              <span>Courses</span>
            </a>
          </li>
          <li className="">
            <a href="#">
              <i className="material-icons">library_books</i>
              <span>Reports</span>
            </a>
          </li>
          <li className="">
            <a href="#">
              <i className="material-icons">library_books</i>
              <span>Profile</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
