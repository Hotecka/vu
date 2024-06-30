<template>
  <div class="container mt-5">
    <h1 class="text-center mb-4">Форма для связи</h1>
    
    <div class="row justify-content-center">
      <div class="col-md-6">
        <form @submit.prevent="submitForm">
          <div class="form-group">
            <label for="name">Ваше имя</label>
            <input type="text" class="form-control" id="name" v-model="formData.name" required>
          </div>

          <div class="form-group">
            <label for="email">Email адрес</label>
            <input type="email" class="form-control" id="email" v-model="formData.email" required>
          </div>

          <div class="form-group">
            <label for="message">Ваше сообщение</label>
            <textarea class="form-control" id="message" rows="4" v-model="formData.message" required></textarea>
          </div>

          <button type="submit" class="btn btn-primary">Отправить</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        name: '',
        email: '',
        message: ''
      }
    };
  },
  methods: {
    submitForm() {
      console.log('Отправка данных:', this.formData);
    
    }
  }
};
</script>

<style scoped>
label{
  color:black;
}
h1 {
  color: #333;
  font-size: 2.5rem;
  border-bottom: 3px solid #1e88e5;
  padding-bottom: 10px;
  margin-bottom: 30px;
}
.form-group {
  margin-bottom: 20px;
}
</style>
