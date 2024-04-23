import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', {
    state: () =>{
        return{
            theme: 'dark',
            users: [
                {
                    name: 'Sobhan',
                    family : 'Bahremand',
                    age: '19',
                },
                {
                    name: 'Amir',
                    family : 'Shirazi',
                    age: '41',
                },
                {
                    name: 'Sossan',
                    family : 'Abedi',
                    age: '11',
                },
                {
                    name: 'Mitra',
                    family : 'Eshqi',
                    age: '25',
                },
                {
                    name: 'Reza',
                    family : 'Miri',
                    age: '63',
                },
                {
                    name: 'Bahman',
                    family : 'Hashemi',
                    age: '20',
                },
                {
                    name: 'Matin',
                    family : 'Baakideh',
                    age: '39',
                },
                {
                    name: 'Erfan',
                    family : 'Rakhshi',
                    age: '51',
                },
            ],
        }
    },
    actions : {
        addUser(data){
            this.users.push(data)
        },
        editUser(data,key){
            this.users[key] = data
        },
        deleteUser(key){
            this.users.splice(key,1)
        }
    }
})
