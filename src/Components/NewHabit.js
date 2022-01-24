import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import { useAuthState } from "react-firebase-hooks/auth";

import Goal from "./Goal";
import { MostPopularData, StayFitData } from "./SuggestionData";
import { auth, db } from "./firebase";

import QMark from "@assets/QMark.svg";

import "@styles/newHabit.css";

function NewHabit(props) {
  const [name,setName]=useState("");
const [Visibility, setvisiblity] = useState("hidden");
  const handleMenu = () => {
   const visible = Visibility === "hidden" ? "visible" : "hidden";
   setvisiblity(visible);
  };
  
  const [user] = useAuthState(auth);
  return (
    <>
      <div className="tab">
        <Formik
          initialValues={{ name: "", password: "" }}
          validate={(values) => {
            const errors = {};
            if (!values.name) {
              errors.name = "Required";
            }
            return errors;
          }}
          onChange={(values) => {
            values.name = name;
          }}
          onSubmit={(values, { setSubmitting }) => {
            console.log(name);
            const habit = db.collection("habit").add({
              Name: values.name,
              uid:user.uid
            });
            setSubmitting(false);
            values.name = "";
          }}
        >
          {({ setFieldValue, resetForm, isSubmitting }) => (
            <Form>
              <div className="tab-content">
                <header className="content-header">New Habit</header>
                <div className="create-form">
                  <div className="name">
                    <p className="name-text">NAME</p>
                    <div className="name-input">
                      <div className="input-grp">
                        <Field
                          type="name"
                          name="name"
                          autocomplete="off"
                          onClick={() => {
                            handleMenu();
                          }}
                          className="input"
                        ></Field>
                        <div
                          style={{ visibility: Visibility }}
                          className="menu"
                        >
                          <div className="popular">
                            <p className="popular-heading">
                              Most Popular Habits
                            </p>

                            {MostPopularData.map((val, key) => {
                              return (
                                <div key={key} className="habit-sug">
                                  <div className="sug-icon">
                                    <div className="icon-container">
                                      {val.icon}
                                    </div>
                                  </div>
                                  <div
                                    onClick={() => {
                                      setFieldValue("name", val.title);
                                      handleMenu();
                                    }}
                                    className="item-text"
                                  >
                                    <p className="text-style">{val.title}</p>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                          <div className="popular">
                            <p className="popular-heading">
                              Stay Fit with exercise
                            </p>

                            {StayFitData.map((val, key) => {
                              return (
                                <div key={key} className="habit-sug">
                                  <div className="sug-icon">
                                    <div className="icon-container">
                                      {val.icon}
                                    </div>
                                  </div>
                                  <div
                                    onClick={() => {
                                      setFieldValue("name", val.title);
                                      handleMenu();
                                    }}
                                    className="item-text"
                                  >
                                    <p className="text-style">{val.title}</p>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                        {/* <ErrorMessage name="name" component="div" /> */}
                      </div>
                      <div>
                        <button className="name-btn">
                          <img src={QMark} alt="Question Mark"></img>
                        </button>
                      </div>
                    </div>
                  </div>
                  <Goal></Goal>
                </div>
                <div className="buttons-area">
                  <div className="margin">
                    <button className="cancel" onClick={() => resetForm()}>
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="cancel save"
                    >
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
}
export default NewHabit;
