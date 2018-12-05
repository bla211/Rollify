//import axios from 'axios'

export default{
    handleHasAccessCode: (context, payload) => {
        context.commit('UPDATE_HAS_ACCESS_CODE', payload);
    },
    handleAccessCode: (context, payload) => {
        context.commit('UPDATE_ACCESS_CODE', payload);
    },
    handleFirstName: (context, payload) => {
        context.commit('UPDATE_FIRST_NAME', payload);
    },
    handleLastName: (context, payload) => {
        context.commit('UPDATE_LAST_NAME', payload);
    },
    handleEmail: (context, payload) => {
        context.commit('UPDATE_EMAIL', payload);
    },
    handleEmailConfirm: (context, payload) => {
        context.commit('UPDATE_EMAIL_CONFIRM', payload);
    },
    handlePassword: (context, payload) => {
        context.commit('UPDATE_PASSWORD', payload);
    },
    handlePasswordConfirm: (context, payload) => {
        context.commit('UPDATE_PASSWORD_CONFIRM', payload);
    },
    handlePlanSponsor: (context, payload) => {
        context.commit('UPDATE_PLAN_SPONSOR', payload);
    },
    handlePlanName: (context, payload) => {
        context.commit('UPDATE_PLAN_NAME', payload);
    }
}
