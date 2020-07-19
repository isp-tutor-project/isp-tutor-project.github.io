<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <!-- Google Material Icons (Home Icon) -->
    <link
      href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet"
    />

    <!-- Google Firebase -->
    <script src="https://www.gstatic.com/firebasejs/6.2.1/firebase-app.js"></script>
    <script src="https://www.gstatic.com/firebasejs/6.2.1/firebase-firestore.js"></script>

    <title>ISP Tutor</title>
    <link rel="stylesheet" href="homepage.bundle.css" />
  </head>
  <body>
    <nav class="navbar">
      <div class="navbar-items lhs">
        <div class="brand">
          <img src="img/site/icon.jpg" width="36" /> ISP Tutor
        </div>
      </div>
      <div class="navbar-items center">
        <div id="activity_title">Activity title goes here</div>
        <div id="activity_section"></div>
      </div>
      <div id="user_info_region" class="navbar-items rhs invisible">
        <button class="btn btn-sm navbar-btn" id="sign_out_button">
          Sign Out
        </button>
        <div id="sign_in_text"></div>
      </div>
    </nav>
    <header class="header">
      <img
        id="title_logo"
        src="img/site/isptutorlogo_narrow.png"
        alt="ISP Tutor"
      />
    </header>

    <main>
      <section id="index_page" class="page">
        <div class="button-container">
          <h2>Sign-In Portal</h2>
          <button id="login_button" class="module-button">
            User Sign-In
          </button>
          <br />
          <button id="register_button" class="module-button">
            Register
          </button>
        </div>
      </section>

      <section id="login_page" class="page">
        <button id="l-back-button" class="btn-md back-button">Back</button>
        <form class="border-container" id="login_form">
          <div class="container">
            <label><b>Class Code</b></label>
            <input
              type="text"
              placeholder="Enter class code"
              id="login_classcode"
              required
            />
            <label><b>First two letters of first name</b></label>
            <input
              type="text"
              value=""
              id="login_fname"
              size="2"
              placeholder="FN"
              pattern="[a-zA-Z]{2}"
              minlength="2"
              maxlength="2"
              required
            />
            <label><b>First two letters of last name</b></label>
            <input
              type="text"
              value=""
              id="login_lname"
              size="2"
              placeholder="LN"
              pattern="[a-zA-Z]{2}"
              minlength="2"
              maxlength="2"
              required
            />
            <label><b>Birthday</b></label>
            <br />
            <select class="select-css" id="login_bmonth" required>
              <option value="" disabled selected hidden>Month</option>
              <option value="JAN">January</option>
              <option value="FEB">February</option>
              <option value="MAR">March</option>
              <option value="APR">April</option>
              <option value="MAY">May</option>
              <option value="JUN">June</option>
              <option value="JUL">July</option>
              <option value="AUG">August</option>
              <option value="SEP">September</option>
              <option value="OCT">October</option>
              <option value="NOV">November</option>
              <option value="DEC">December</option>
            </select>
            <select class="select-css" id="login_bday" required>
              <option value="" disabled selected hidden>Day</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
              <option>11</option>
              <option>12</option>
              <option>13</option>
              <option>14</option>
              <option>15</option>
              <option>16</option>
              <option>17</option>
              <option>18</option>
              <option>19</option>
              <option>20</option>
              <option>21</option>
              <option>22</option>
              <option>23</option>
              <option>24</option>
              <option>25</option>
              <option>26</option>
              <option>27</option>
              <option>28</option>
              <option>29</option>
              <option>30</option>
              <option>31</option>
            </select>
          </div>

          <button type="submit" id="login_submit" class="btn-md">Login</button>
        </form>
      </section>

      <section id="registration_page" class="page">
        <button id="r-back-button" class="back-button btn-md">Back</button>
        <form class="border-container" id="registration_form">
          <div class="container">
            <label><b>Class Code</b></label>
            <input
              type="text"
              placeholder="Enter class code"
              id="register_classcode"
              required
            />
            <label><b>First two letters of first name</b></label>
            <input
              type="text"
              value=""
              id="register_fname"
              size="2"
              placeholder="FN"
              pattern="[a-zA-Z]{2}"
              minlength="2"
              maxlength="2"
              required
            />
            <label><b>First two letters of last name</b></label>
            <input
              type="text"
              value=""
              id="register_lname"
              size="2"
              placeholder="LN"
              pattern="[a-zA-Z]{2}"
              minlength="2"
              maxlength="2"
              required
            />
            <label><b>Birthday</b></label>
            <br />
            <select class="select-css" id="register_bmonth" required>
              <option value="" disabled selected hidden>Month</option>
              <option value="JAN">January</option>
              <option value="FEB">February</option>
              <option value="MAR">March</option>
              <option value="APR">April</option>
              <option value="MAY">May</option>
              <option value="JUN">June</option>
              <option value="JUL">July</option>
              <option value="AUG">August</option>
              <option value="SEP">September</option>
              <option value="OCT">October</option>
              <option value="NOV">November</option>
              <option value="DEC">December</option>
            </select>
            <select class="select-css" id="register_bday" required>
              <option value="" disabled selected hidden>Day</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
              <option>11</option>
              <option>12</option>
              <option>13</option>
              <option>14</option>
              <option>15</option>
              <option>16</option>
              <option>17</option>
              <option>18</option>
              <option>19</option>
              <option>20</option>
              <option>21</option>
              <option>22</option>
              <option>23</option>
              <option>24</option>
              <option>25</option>
              <option>26</option>
              <option>27</option>
              <option>28</option>
              <option>29</option>
              <option>30</option>
              <option>31</option>
            </select>
          </div>

          <button type="submit" id="registration_submit" class="btn-md">
            Register
          </button>
        </form>
      </section>

      <section id="home_page" class="page">
        <div id="activity_btns_container" class="container"></div>
      </section>
    </main>

    <footer>
      <img src="img/site/klahrLabFooter.png" /><br />
      <p>
        ***Please Note: The ISP Tutor portal is currently not available for
        public use, however, check our www.isptutor.org website for updates and
        to use the Tutor in Demo mode.
      </p>
      <p>©2019 Klahr Lab, Carnegie Mellon University. All Rights Reserved</p>
      <p>
        Carnegie Mellon University | Dept. of Psychology | 5000 Forbes Ave. |
        Pittsburgh, PA 15213 The TED project was funded in part by the Institute
        of Education Science (IES), Grant R305H060034, and in part by the
        National Science Foundation, Grant SBE035442. The ISP Tutor project is
        funded by IES, Grant R305A170176.
      </p>
      <p>
        The research reported here was supported by the Institute of Education
        Sciences, U.S. Department of Education, through Grant R305A170176 to
        Carnegie Mellon University. The opinions expressed are those of the
        authors and do not represent views of the Institute or the U.S.
        Department of Education.
      </p>
    </footer>

    <!-- Snackbar -->
    <div id="snackbar">Some text some message..</div>

    <!-- Load the JS to control account registration system -->
    <script src="./homepage.bundle.js"></script>
  </body>
</html>
