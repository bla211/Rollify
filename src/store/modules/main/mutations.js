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
    UPDATE_MAILING_ADDRESS: (state, payload) => {
        state.mailingAddress = payload;
    },
    UPDATE_MAILING_ADDRESS_2: (state, payload) => {
        state.mailingAddress2 = payload;
    },
    UPDATE_CITY: (state, payload) => {
        state.city = payload;
    },
    UPDATE_STATE: (state, payload) => {
        state.state = payload;
    },
    UPDATE_ZIP_CODE: (state, payload) => {
        state.zipCode = payload;
    },
    UPDATE_PHONE_NUMBER: (state, payload) => {
        state.phoneNumber = payload;
    },
    UPDATE_ORIGIN_PLAN_SPONSOR: (state, payload) => {
        state.originPlanInfo.sponsor = payload;
    },
    UPDATE_ORIGIN_PLAN_NAME: (state, payload) => {
        state.originPlanInfo.name = payload;
    },
    UPDATE_ORIGIN_PLAN_ACCOUNT_NUMBER: (state, payload) => {
        state.originPlanInfo.accountNumber = payload;
    },
    UPDATE_ORIGIN_PLAN_AFFILIATE_NUMBER: (state, payload) => {
        state.originPlanInfo.affiliateNumber = payload;
    },
    UPDATE_ORIGIN_PLAN_DIVISION: (state, payload) => {
        state.originPlanInfo.division = payload;
    },
    UPDATE_DESTINATION_PLAN_SPONSOR: (state, payload) => {
        state.destinationPlanInfo.sponsor = payload;
    },
    UPDATE_DESTINATION_PLAN_NAME: (state, payload) => {
        state.destinationPlanInfo.name = payload;
    },
    UPDATE_DESTINATION_PLAN_ACCOUNT_NUMBER: (state, payload) => {
        state.destinationPlanInfo.accountNumber = payload;
    },
    UPDATE_DESTINATION_PLAN_AFFILIATE_NUMBER: (state, payload) => {
        state.destinationPlanInfo.affiliateNumber = payload;
    },
    UPDATE_DESTINATION_PLAN_DIVISION: (state, payload) => {
        state.destinationPlanInfo.division = payload;
    },
}
