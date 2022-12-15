import React, { useEffect, useState } from "react";
import axios from "axios";
import Layout from "../components/Layout";
const Home = () => {
  const getData = async () => {
    try {
      //   dispatch(showLoading());
      const gettoken = localStorage.getItem("token");

      const response = await axios.post(
        "/api/user/get-user-info-by-id",
        {},
        {
          headers: {
            Authorization: "Bearer " + gettoken,
          },
        }
      );
      //   dispatch(hideLoading());
      console.log(response);
      if (response.data.success) {
        // setDoctors(response.data.data);
      }
    } catch (error) {
      //   dispatch(hideLoading());
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Layout>Home</Layout>
    </>
  );
};

export default Home;
