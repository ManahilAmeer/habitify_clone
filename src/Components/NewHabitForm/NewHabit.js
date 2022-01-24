import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import Goal from "./Goal";
import Suggestion from "./Suggestion";
import { auth, db } from "../firebase";

import QMark from "@assets/QMark.svg";

import "@styles/newHabit.css";

function NewHabit(props) {
  const navigate = useNavigate();
  const reload = () => {
    navigate("/sign-in");
  };
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
          onSubmit={(values, { setSubmitting }) => {
            const habit = db.collection("habit").add({
              Name: values.name,
              uid:user.uid
            });
            setSubmitting(false);
            reload();
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
                        <Suggestion Visibility={Visibility} handleMenu={handleMenu} setFieldValue={setFieldValue}></Suggestion>
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
