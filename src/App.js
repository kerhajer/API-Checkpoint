import axios from "axios";
import './App.css'
import { useState, useEffect } from "react";
function App() {


  const [users, setUsers] = useState([])


  const getDataUsers = async () => {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    setUsers(data);
  };

  useEffect(() => {
    getDataUsers();
  }, []);
  return (
    <div className="App" style={{ display:'flex' ,justifyContent:'start',gap:'5px',marginRight:'10 px'}} >


      {users.map((el) => (
        <div className="contact-card" key={el.id} >
          <div className="contact-card__header-image">
            <div className="contact-card__avatar"></div>
          </div>
          <p className="contact-card__name">{el.name}</p>
          <ul>
            <li className="contact-card__link ">
              {el.email}
            </li>
            <li className="contact-card__link">
              {el.phone}
            </li>
          </ul>

          <ul className="contact-card__footer">
            <li className="contact-card__footer__link contact-card__footer__link--twitter"><i class="fa fa-twitter"></i></li>
            <li className="contact-card__footer__link contact-card__footer__link--linkedin"><i class="fa fa-linkedin"></i></li>
            <li className="contact-card__footer__link contact-card__footer__link--codepen"><i class="fa fa-codepen"></i></li>
          </ul>

        </div >
      ))}
      </div>
    );
  }
  




export default App;
