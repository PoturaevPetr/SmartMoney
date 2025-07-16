# Vue 3 + TypeScript + Vite

## Быстрый запуск
Версия Node.js
```
v20.18.0
```

1. **Клонирровать репозиторий:**

```bash
git clone <ваш репозиторий или скачайте архив> 
cd <папка проекта>
```

2. **Eстановите зависимости**
```bash
npm install
```
* Возможно потреуется установить среду Capacitor
```bash
npm install @vue/cli @capacitor/core @capacitor/cli
npm install @capacitor/android @capacitor/ios
npx cap init myVueCapacitorApp com.example.myvuecapacitorapp

```

2. Для запуска в режиме разработки 
```bash
npm run dev
```

3. Для сборки
```bash
npm run build
```

4. Сборка под Android
```bash
npx cap add android
```

5. Сборка под iOS
```bash
npx cap add ios
```

6. Открыть проект в Android Studio или Xcode и запустите
```bash
npx cap open android
npx cap open ios
```