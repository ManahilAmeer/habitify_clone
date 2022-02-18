import React, { useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import PropTypes from "prop-types";
import Goal from "@components/Goal/Goal";
import { updateHabit, deleteHabit } from "store/habitsReducer";
import { useDispatch } from "react-redux";
import QMark from "@assets/QMark.svg";
import "@views/EditHabitForm/EditHabit.css";
function EditHabit(props) {
  const name = props.name;
  const usergoal = props.goal;
  const dispatch = useDispatch();
  useEffect(() => {}, [updateHabit, deleteHabit]);
  const [goal, setGoal] = useState(1);
  const handleDeleteButton = () => {
    dispatch(deleteHabit({ id: props.ID }));
  };
  return (
    <>
      <div className="tab">
        <Formik
          initialValues={{ name: name, goal: usergoal }}
          validate={(values) => {
            const errors = {};
            if (!values.name) {
              errors.name = "Required";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            const data = {
              name: values.name,
              goal: values.goal,
              id: props.ID,
            };
            dispatch(updateHabit(data));
          }}
        >
          {({ setFieldValue, isSubmitting }) => (
            <Form>
              <div className="tab-content">
                <header className="content-header">Edit Habit</header>
                <div className="create-form">
                  <div className="name">
                    <p className="name-text">NAME</p>
                    <div className="name-input">
                      <div className="input-grp">
                        <Field
                          type="name"
                          name="name"
                          autoComplete="off"
                          onClick={() => {}}
                          className="input"
                        ></Field>
                      </div>
                      <div>
                        <button className="name-btn">
                          <img src={QMark} alt="Question Mark"></img>
                        </button>
                      </div>
                    </div>
                  </div>
                  <Field
                    name="goal"
                    value={goal}
                    className="display-none"
                  ></Field>
                  <Goal setFieldValue={setFieldValue} goal={usergoal}></Goal>
                </div>
                <div className="buttons-area">
                  <div>
                    <button
                      className="cancel delete"
                      type="submit"
                      onClick={() => handleDeleteButton()}
                    >
                      Delete
                    </button>
                    <button className="cancel" type="button">
                      Archive
                    </button>
                  </div>
                  <div className="margin">
                    <button
                      className="cancel"
                      onClick={() => props.handleButton()}
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
EditHabit.prototype = {
  handleButton: PropTypes.func.isRequired,
};
EditHabit.defaultProps = {
  handleButton: () => {},
};
export default EditHabit;
