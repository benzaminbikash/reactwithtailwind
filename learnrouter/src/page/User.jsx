import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function User() {
  const navigate = useNavigate();
  const users = [
    {
      id: 1,
      image: "/images/reshma.jpeg",
      name: "Reshma Ghimire",
      job: "Nurse",
    },
    {
      id: 2,
      image: "/images/zen.jpeg",
      name: "Zendaya",
      job: "Actress",
    },
    {
      id: 3,
      image: "/images/elon.jpeg",
      name: "Elon Musk",
      job: "CEO",
    },
  ];
  return (
    <>
      <h2>This is User Page</h2>
      <div>
        {users.map((item) => (
          <div>
            <Link to={`/user/${item.name}`} state={item}>
              {/* <button
              onClick={() => {
                navigate(`${item.name}`, { state: { item: item } });
              }}
            >
              {item.name}
            </button> */}
              {item.name}
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}

export default User;
