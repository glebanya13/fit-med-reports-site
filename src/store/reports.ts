import { defineStore } from 'pinia'
import axios from 'axios'

const arr: any[] = [];

export const useReportsStore = defineStore('reports', {
    state: () => ({
        reports: arr
    }),
    getters: {
        showReports(state) {
            return state.reports
        },
    },
    actions: {
        async get_reports() {
            await axios.get("")
                .then((res) => {
                    this.reports.push(res.data);
                })
        },
        async post_reports() {
            await axios.post("", {

            })
            .then((res) => {
                console.log(res);
            })
            .catch((error) => {
                console.log(error);
            })
        }
    },
})
