import { createSlice } from "@reduxjs/toolkit";
import { addQuizId } from "../topics/topicsSlice";

export const quizzezSlice = createSlice({
  name: "quizzes",
  initialState: {
    quizzes: {}
  },
  reducers: {
    addQuiz: (state, action) => {
      const { id } = action.payload;
      state.quizzes[id] = action.payload;
    }
  }
});

export const addQuizForTopicId = quiz => {
    const { topicId, id } = quiz;
    return (dispatch) => {
        dispatch(quizzezSlice.actions.addQuiz(quiz));
        dispatch(addQuiz( { topicId: topicId, quizId: id } ));
    }
}

export const { addQuiz } = quizzezSlice.actions;
export const selectQuizzes = (state ) => state.quizzes.quizzes;
export default quizzezSlice.reducer;