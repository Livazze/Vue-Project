import {defineStore} from 'pinia'
import {ref} from 'vue'
import {getStudentData} from './services/studentService'

export const studentStore = defineStore("student", () => {
    const studentsData = ref(null) //reaktif veri güncellendiğinde student.vue otomatik güncellenir

    function getStudent() {
        getStudentData() //service api den veiryii alıp store a koyuyuor
            .then(data => {
                studentsData.value = data
            })
            .catch(err => {
                console.log(err)
            })
    }
    return {
        studentsData,
        getStudent
    }
})