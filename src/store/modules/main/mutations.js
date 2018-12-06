export default{
    UPDATE_HAS_ACCESS_CODE: (state, payload) => {
        state.hasAccessCode = payload;
    },
    UPDATE_ACCESS_CODE: (state, payload) => {
        state.accessCode = payload;
    },
    UPDATE_FIRST_NAME: (state, payload) => {
        state.firstName = payload;
    },
    UPDATE_LAST_NAME: (state, payload) => {
        state.lastName = payload;
    },
    UPDATE_EMAIL: (state, payload) => {
        state.email = payload;
    },
    UPDATE_EMAIL_CONFIRM: (state, payload) => {
        state.emailConfirm = payload;
    },
    UPDATE_PASSWORD: (state, payload) => {
        state.password = payload;
    },
    UPDATE_PASSWORD_CONFIRM: (state, payload) => {
        state.passwordConfirm = payload;
    },
    UPDATE_PLAN_SPONSOR: (state, payload) => {
        state.planInfo.sponsor = payload;
    },
    UPDATE_PLAN_NAME: (state, payload) => {
        state.planInfo.name = payload;
    }
}
