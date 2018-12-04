import axios from 'axios'

export default{
    handleHasAccessCode: (context, payload) => {
        context.commit('UPDATE_HAS_ACCESS_CODE', payload);
    }
}
