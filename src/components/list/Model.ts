import { createSlice } from '@reduxjs/toolkit';
import { bindActionCreators } from 'redux';

export const listSlice = createSlice({
  name: 'list',
  initialState: {
    members: [
      {
        name: 'Rares'
      }
    ],
    inputName: ''
  },
  reducers: {
    add: (state, action) => {
      state.members = [
        ...state.members,
        action.payload
      ];
    },
    remove: (state, action) => {
      state.members = state.members.filter((x, i) => i !== action.payload);
    },
    updateInputName: (state, action) => {
      state.inputName = action.payload;
    }
  }
});

const { add, remove, updateInputName } = listSlice.actions;

const asyncAdd = (payload: any) => (dispatch: any) => {
  setTimeout(() => {
    dispatch(add(payload));
  }, 5000);
};

export interface StateProps {
  list: {
    inputName: string,
    members: [{
      name: string
    }]
  }
}

export interface DispatchProps {
  actions: {
    add(payload: {
      name: string
    }): void,
    remove(payload: number): void,
    updateInputName(payload: string): void
  }
}

export const mapStateToProps = (state: any) => ({
  list: state.list
});

export const mapDispatchToProps = (dispatch: any) => ({
  actions: bindActionCreators({
    add,
    remove,
    asyncAdd,
    updateInputName
  }, dispatch)
});

export default listSlice.reducer;
