<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100 p-4">
    <div class="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
      <div class="flex justify-center">
        <p class="text-sm font-bold text-center mb-6 text-indigo-600">SmartMoney</p>
      </div>
      <h2 class="text-xl font-bold mb-6 text-center text-gray-800">Авторизация</h2>
      <form @submit.prevent="handleLogin" class="space-y-4">
        <div>
          <div class="flex justify-left">
            <label class="block text-gray-700 mb-1" for="email">Email</label>
          </div>
          <input v-model="email" type="email" id="email" required placeholder="Введите email"
            class="w-full px-4 py-2 border border-gray-300 text-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
        </div>
        <div>
          <div class="flex justify-left">
            <label class="block text-gray-700 mb-1" for="password">Пароль</label>
          </div>
          <input v-model="password" type="password" id="password" required placeholder="Введите пароль"
            class="w-full px-4 py-2 border border-gray-300 text-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
        </div>
        <button type="submit"
          class="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300">
          Войти
        </button>
      </form>

      <div class="mt-4 text-center">
        <a href="#" class="text-blue-500 hover:underline text-sm">Забыли пароль?</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const email = ref('');
const password = ref('');

const handleLogin = () => {
  // Здесь можно реализовать вашу логику авторизации
  alert(`Email: ${email.value}\nПароль: ${password.value}`);
};
</script>