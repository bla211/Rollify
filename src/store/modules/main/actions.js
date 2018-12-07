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
    handleMailingAddress: (context, payload) => {
        context.commit('UPDATE_MAILING_ADDRESS', payload);
    },
    handleMailingAddress2: (context, payload) => {
        context.commit('UPDATE_MAILING_ADDRESS_2', payload);
    },
    handleCity: (context, payload) => {
        context.commit('UPDATE_CITY', payload);
    },
    handleState: (context, payload) => {
        context.commit('UPDATE_STATE', payload);
    },
    handleZipCode: (context, payload) => {
        context.commit('UPDATE_ZIP_CODE', payload);
    },
    handlePhoneNumber: (context, payload) => {
        context.commit('UPDATE_PHONE_NUMBER', payload);
    },
    handleOriginPlanSponsor: (context, payload) => {
        context.commit('UPDATE_ORIGIN_PLAN_SPONSOR', payload);
    },
    handleOriginPlanName: (context, payload) => {
        context.commit('UPDATE_ORIGIN_PLAN_NAME', payload);
    },
    handleOriginPlanAccountNumber: (context, payload) => {
        context.commit('UPDATE_ORIGIN_PLAN_ACCOUNT_NUMBER', payload);
    },
    handleOriginPlanAffiliateNumber: (context, payload) => {
        context.commit('UPDATE_ORIGIN_PLAN_AFFILIATE_NUMBER', payload);
    },
    handleOriginPlanDivision: (context, payload) => {
        context.commit('UPDATE_ORIGIN_PLAN_DIVISION', payload);
    },
    handleDestinationPlanSponsor: (context, payload) => {
        context.commit('UPDATE_DESTINATION_PLAN_SPONSOR', payload);
    },
    handleDestinationPlanName: (context, payload) => {
        context.commit('UPDATE_DESTINATION_PLAN_NAME', payload);
    },
    handleDestinationPlanAccountNumber: (context, payload) => {
        context.commit('UPDATE_DESTINATION_PLAN_ACCOUNT_NUMBER', payload);
    },
    handleDestinationPlanAffiliateNumber: (context, payload) => {
        context.commit('UPDATE_DESTINATION_PLAN_AFFILIATE_NUMBER', payload);
    },
    handleDestinationPlanDivision: (context, payload) => {
        context.commit('UPDATE_DESTINATION_PLAN_DIVISION', payload);
    }
}
