<template>
    <div class="container mt-5">
      <AppHeader />
      <div class="card shadow-sm custom-card">
        <div class="card-body">
          <h2 class="card-title text-center mb-4 custom-title">Add Store</h2>
          <form @submit.prevent="submitForm">
            <div class="mb-3">
              <label for="name" class="form-label">Store Name</label>
              <input 
                type="text" 
                id="name" 
                v-model="store.name" 
                required 
                class="form-control" 
                placeholder="Enter store name"
              />
            </div>
            <div class="mb-3">
              <label for="city" class="form-label">City</label>
              <input 
                type="text" 
                id="city" 
                v-model="store.city" 
                required 
                class="form-control" 
                placeholder="Enter city"
              />
            </div>
  
            <div class="d-flex justify-content-end mt-4">
              <button 
                type="button" 
                @click="cancelForm" 
                class="btn btn-secondary me-2 custom-btn-cancel"
              >
                Cancel
              </button>
              <button 
                type="submit" 
                class="btn btn-primary custom-btn-submit"
              >
                Save Store
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import AppHeader from './AppHeader.vue';
  
  export default {
    name: 'AddStore',
    components: {
      AppHeader
    },
    data() {
      return {
        store: {
          name: '',
          city: ''
        }
      };
    },
    methods: {
      submitForm() {
        // Placeholder for form submission logic (e.g., API call)
        console.log('Form submitted', this.store);
  
        // Reset form fields
        this.store.name = '';
        this.store.city = '';
      },
      cancelForm() {
        // Redirect or reset form fields
        this.store.name = '';
        this.store.city = '';
        this.$router.push({ name: 'HomePage' }); // Example of routing to homepage
      }
    }
  };
  </script>
  
  <style scoped>
  /* Custom styles to enhance the form layout and look */
  .custom-card {
    background-color: #f8f9fa;
    border-radius: 8px;
    padding: 20px;
  }
  
  .custom-title {
    color: #495057;
    font-weight: bold;
    font-size: 1.75rem;
  }
  
  .custom-btn-cancel {
    background-color: #6c757d;
    border-color: #6c757d;
    color: #fff;
  }
  
  .custom-btn-cancel:hover {
    background-color: #5a6268;
  }
  
  .custom-btn-submit {
    background-color: #007bff;
    border-color: #007bff;
    color: #fff;
  }
  
  .custom-btn-submit:hover {
    background-color: #0056b3;
  }
  
  input.form-control {
    border: 1px solid #ced4da;
    padding: 10px;
    font-size: 1rem;
    border-radius: 4px;
  }
  
  input.form-control:focus {
    border-color: #007bff;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }
  </style>
  