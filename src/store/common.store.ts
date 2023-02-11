import { defineStore } from 'pinia';
import { ref } from 'vue';

export const commonStore = defineStore({
    id: 'commonStore', // id必填，且需要唯一
    state: () => {
        return {
            keepAliveComponents: [],
            upload_token: {
                accessid: '',
                expire: '',
                policy: '',
                signature: ''
            },
            info:<any>{},
            cancelTokenArr: [],
            direction: '',
            auth_ready_flag: false,
        };
    },
    actions: {
        // ...
    }
});