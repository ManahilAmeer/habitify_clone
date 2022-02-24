import React, {  } from "react";
import { Formik, Form, Field } from "formik";
import PropTypes from "prop-types";
import Goal from "Components/Goal/Goal";
import { updateHabit, deleteHabit } from "store/habitsReducer";
import { useDispatch } from "react-redux";
import QMark from "@assets/QMark.svg";
import "@views/EditHabitForm/EditHabit.css";
function EditHabit(props) {
  const { name, goal, ID, index, category, handleButton,flag,setFlag } = props;
  const usergoal = goal;
  const dispatch = useDispatch();
  const handleDeleteButton = () => {
    dispatch(
      deleteHabit({
        id: ID,
        index: index,
        category: category,
      })
    );
    setFlag(!flag);
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
          onSubmit={(values) => {
            const data = {
              name: values.name,
              goal: values.goal,
              id: ID,
              index:index,
              category:category,
            };
            dispatch(updateHabit(data));
            setFlag(!flag)
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
                    value={usergoal}
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
                      onClick={() => handleButton()}
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
  goal:PropTypes.number,
};
EditHabit.defaultProps = {
  goal:1
};
export default EditHabit;
