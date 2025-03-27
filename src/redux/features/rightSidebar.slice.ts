import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AccountDetails {
    name: string;
    link: string;
}

interface RightSidebarState {
    rightSidebar: { accountDetails: AccountDetails | null };
}

const initialState: RightSidebarState = {
    rightSidebar: { accountDetails: null },
};

export const rightSidebarSlice = createSlice({
    name: "rightSidebar",
    initialState,
    reducers: {
        setAccountDetails(state, action: PayloadAction<AccountDetails | null>) {
            state.rightSidebar.accountDetails = action.payload;
        },
    },
});

export const { setAccountDetails } = rightSidebarSlice.actions;
export const selectRightSidebar = (state: {
    rightSidebar: RightSidebarState;
}) => state.rightSidebar;
