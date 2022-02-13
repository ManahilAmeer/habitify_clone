import React, { useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import PropTypes from "prop-types";
import Goal from "@components/Goal/Goal";
import { updateHabit, deleteHabit } from "@store/habitsReducer";
import Suggestion from "@components/Suggestion";
import { addHabit } from "store/habitsReducer";
import { useSelector, useDispatch } from "react-redux";
import QMark from "@assets/QMark.svg";
import "views/NewHabitForm/newHabit.css";
function NewHabit(props) {
  const {handleHabitButton} = props;
  
  const dispatch = useDispatch();
  useEffect(() => {}, [updateHabit, deleteHabit]);
  const [goal, setGoal] = useState(1);
  const validationSchema = Yup.object({
    name: Yup.string().required("Please select a habit"),
    goal: Yup.number().min(1).max(100).required(),
  });
  const today = new Date();
  const date = today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  const uid = useSelector((state) => state.users.ID);
  const [Visibility, setvisiblity] = useState(false);
  const handleDeleteButton = () => {
    dispatch(deleteHabit({ ID: props.ID }));
  };
  const handleMenu = () => {
    setvisiblity(!Visibility)
  };
  return (
    <>
      <div className="tab">
        <Formik
          initialValues={{ name: "", goal: 1 }}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting }) => {
            const data = {
              name: values.name,
              goal: values.goal,
              uid: uid,
              category: "",
              completed: 0,
              date: date,
            };
            dispatch(addHabit(data));
            setSubmitting(false);
            handleHabitButton("Create Good Habit");
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
                          autoComplete="off"
                          onClick={() => {
                            handleMenu();
                          }}
                          className="input"
                        ></Field>
                        <Suggestion
                          Visibility={Visibility}
                          handleMenu={handleMenu}
                          setFieldValue={setFieldValue}
                        ></Suggestion>
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
                  <Goal setFieldValue={setFieldValue}></Goal>
                </div>
                <div className="buttons-area">
                  <div className="margin">
                    <button
                    type="button"
                      className="cancel"
                      onClick={() =>
                        handleHabitButton("Create Good Habit")
                      }
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
NewHabit.prototype = {
  handleHabitButton: PropTypes.func.isRequired,
};
NewHabit.defaultProps = {
  handleHabitButton: () => {},
};
export default NewHabit;
