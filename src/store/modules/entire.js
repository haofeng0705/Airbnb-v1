import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getEntireRoomList } from "@/services";

export const fetchRoomListAction = createAsyncThunk(
  "fetchdata",
  async (page = 0, { dispatch }) => {
    // 0.修改currentPage
    dispatch(changeCurrentPageAction(page));

    // 1.根据页码获取最新的数据
    // const currentPage = getState().entire.currentPage
    dispatch(changeIsLoadingAction(true));
    dispatch(changeIsLoadingAction(true));
    const res = await getEntireRoomList(page * 20);
    dispatch(changeIsLoadingAction(false));

    // 2.获取到最新的数据, 保存redux的store中
    const roomList = res.list;
    const totalCount = res.totalCount;
    dispatch(changeRoomListAction(roomList));
    dispatch(changeTotalCountAction(totalCount));
  }
);

const entireSlice = createSlice({
  name: "entire",
  initialState: {
    currentPage: 0, // 当前页码
    roomList: [], // 房间列表
    totalCount: 0, // 总数据个数

    isLoading: false,
  },
  reducers: {
    changeCurrentPageAction(state, { payload }) {
      state.currentPage = payload;
    },
    changeRoomListAction(state, { payload }) {
      state.roomList = payload;
    },
    changeTotalCountAction(state, { payload }) {
      state.totalCount = payload;
    },
    changeIsLoadingAction(state, { payload }) {
      state.isLoading = payload;
    },
  },
});

export const {
  changeCurrentPageAction,
  changeIsLoadingAction,
  changeRoomListAction,
  changeTotalCountAction,
} = entireSlice.actions;
export default entireSlice.reducer;
