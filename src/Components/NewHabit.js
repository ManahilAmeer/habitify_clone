import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import { db } from "./firebase";
import Goal from "./Goal";
import QMark from "../assets/QMark.svg";
import "../styles/newHabit.css";
function NewHabit(props) {
  const [name,setName]=useState("");
  return (
    <>
      <div
        className="tab"
        // onClick={() => props.handleHabitButton("Create Good Habit")}
      >
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
            // values.name=name;
            console.log(name);
            const habit = db.collection("habit").add({
              Name: values.name,
            });
            setSubmitting(false);
            values.name = "";
          }}
        >
          {({ setFieldValue,resetForm, isSubmitting }) => (
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
                          // value={name}
                          // onChange={(e) => {setName(e.target.value);
                          // // values.name=name;
                          // console.log(name)}}
                          className="input"
                        ></Field>
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
                    <button
                      className="cancel"
                      onClick={() => resetForm()}
                    >
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
