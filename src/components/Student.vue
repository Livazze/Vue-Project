<script setup>
import { onMounted } from 'vue'
import { studentStore } from '../stores/studentStores'

const store = studentStore()

onMounted(() => {
    store.getStudent()
  }) //store içindeki getStudent() fonksiyonunu twtikler get /api/students ile gelen öğrenci listesini  kaydeder

</script>

<template>
  
  <!-- v-for öğe listeleri oluşturur. (value,key,imdex) in object. :key her elemeana benzersiz id verir. liste değişse bile sira karişmaz -->
  <div>
    <h1>students list</h1>
    <div v-for="student in store.studentsData" :key="student.id">
      <p>ID: {{student.id}}</p>
      <p>Name: {{student.name}}</p>
      <p>Department: {{student.department}}</p> <!--db de id olarak tuutyorym ama go da inner join sayesinde burada metin olarak gelir -->
      <p>Average: {{student.grade_average}}</p>
    </div>

  </div>
</template> 


