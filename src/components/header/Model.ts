import { createSlice } from '@reduxjs/toolkit';

export const listSlice = createSlice({
  name: 'header',
  initialState: { },
  reducers: { }
});

export interface StateProps {
  list: {
    members: [{
      name: string
    }]
  }
}

export const mapStateToProps = (state: any) => ({
  list: state.list
});

export default listSlice.reducer;
