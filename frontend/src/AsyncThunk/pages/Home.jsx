import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser, deleteUser } from "../features/UserApi";
import Modal from "../components/Modal";

function Home() {
  const dispatch = useDispatch();
  const { user, isLoading, isError, searchApi } = useSelector(
    (state) => state.USER
  );
  useEffect(() => {
    dispatch(getUser());
  }, []);
  const [id, setId] = useState();
  const [show, setShow] = useState(false);
  const [select, setSelect] = useState();

  return (
    <>
      <div className="w-full h-full flex justify-center">
        <table border="2">
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Action</th>
          </tr>
          {user
            ?.filter((item) => {
              if (searchApi == "") {
                return item;
              } else {
                return item.name
                  .toLowerCase()
                  .includes(searchApi.toLowerCase());
              }
            })
            .map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.address}</td>
                  <div>
                    <button
                      onClick={() => {
                        setId(item.id);
                        setShow(true);
                        setSelect(item);
                      }}
                      className="px-2"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => dispatch(deleteUser(item.id))}
                      className="px-2"
                    >
                      Delete
                    </button>
                  </div>
                </tr>
              );
            })}
        </table>
      </div>
      {show && <Modal setShow={setShow} select={select} />}
    </>
  );
}

export default Home;
