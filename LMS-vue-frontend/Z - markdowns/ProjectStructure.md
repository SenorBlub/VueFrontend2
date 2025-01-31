**Vue Naming, Routing & Data Management Convention Guide**

---

## **📌 Introduction**
This guide provides a structured approach to naming and organizing components, files, stores, routing, backend data handling, and API management in your Vue + TailwindCSS project. By following this convention, your frontend code will be **consistent, maintainable, and scalable**.

---

## **📂 High-Level Folder Structure**
Your project is structured as:
```
/src/
    /assets/
    /components/
        /common/
          /atoms/
            /icons/
          /molecules/
        /features/
        /layouts/
    /stores/
    /views/
    /router/
    /types/
    /composables/
    /api/
```
### **Folder Purposes**
- **assets/** – Images, fonts, and static resources
- **components/** – UI components structured into:
  - **common/** – Shared reusable components (buttons, inputs, modals, etc.)
    - **atoms/** – The smallest individual parts of components
    - **icons/** – Icon components
    - **molecules/** – Small collections of atoms that work together
  - **features/** – Feature-specific components (draggable objects, notifications, trees, etc.)
  - **layouts/** – Layout-related components
- **stores/** – Pinia stores (both global and feature-specific)
- **views/** – Full-page components
- **router/** – Vue Router configuration and route files
- **types/** – Type definitions for data models and API responses
- **composables/** – Reusable logic (`useAuth.ts`, `useDrag.ts`, etc.)
- **api/** – API handlers for managing backend requests

---

## **✅ File Naming Conventions**
### **1️⃣ Vue Files**
- **Format:** `[Feature][Component].vue`
- **Example:** `ChatMessage.vue`, `UserProfile.vue`

### **2️⃣ TypeScript Files**
- **Format:** `[feature].[script].ts`
- **Example:** `auth.api.ts`, `chat.utils.ts`, `user.helpers.ts`

### **3️⃣ Pinia Store Files**
- **Format:** `use[Feature].ts`
- **Example:** `useAuth.ts`, `useChat.ts`

### **4️⃣ CSS Files**
- **Format:** `[feature].module.css` or `[feature].module.scss` for scoped styles
- **Example:** `chat.module.scss`, `profile.module.css`

### **5️⃣ WebGL Files**
- **Format:** `[feature].webgl.ts`
- **Example:** `visualizer.webgl.ts`
- **Placement:** Inside the specific feature folder that uses it

### **6️⃣ Internal Component Folder Structure**
Each feature-related component gets its own folder:
```
/components/features/[Feature][Component]/
    [Feature][Component].vue
    [Feature][Component].module.scss
    [Feature][Component].types.ts
```
**Example:**
```
/components/features/ChatMessage/
    ChatMessage.vue
    ChatMessage.module.scss
    ChatMessage.types.ts
```

---

## **📌 Using IDs for Naming HTML Elements**
To ensure elements are easily findable in debugging, automation, or JavaScript logic, follow these ID naming conventions:

### **1️⃣ General ID Naming Rules**
- Use **camelCase** for IDs.
- IDs should be **unique** within a page or component.
- Prefix IDs with the **feature or component name** to avoid collisions.
- Separate functional elements logically.

### **2️⃣ ID Naming Examples**
| Element Type        | Naming Format                    | Example                     |
|---------------------|---------------------------------|-----------------------------|
| Main Containers    | `featureContainer`              | `chatContainer`             |
| Buttons           | `featureButtonAction`           | `chatSendButton`            |
| Inputs            | `featureInputType`              | `userEmailInput`            |
| Modals            | `featureModalName`              | `settingsModal`             |
| Lists & Items     | `featureList` / `featureItemX`  | `chatMessageList`, `chatMessageItem3` |

### **3️⃣ Example in Vue**
```vue
<template>
  <div id="chatContainer" class="p-4">
    <input id="userMessageInput" type="text" class="border p-2" />
    <button id="chatSendButton" class="btn-primary">Send</button>
    <ul id="chatMessageList">
      <li id="chatMessageItem1">Hello!</li>
    </ul>
  </div>
</template>
```

---

## **📌 Using IDs & CSS Naming Conventions**
To ensure elements are easily findable in debugging, automation, or JavaScript logic, follow these ID and CSS naming conventions:

### **1️⃣ General ID Naming Rules**
- Use **camelCase** for IDs.
- IDs should be **unique** within a page or component.
- Prefix IDs with the **feature or component name** to avoid collisions.
- Separate functional elements logically.

### **2️⃣ CSS Naming Best Practices**
When using **@layer components** in TailwindCSS or custom CSS files:
- Use **BEM-style naming** for clarity: `block__element--modifier`
- Define reusable Tailwind classes inside `@layer components`, define utilities in `@layer utilities`
- Prefix utility styles with `u-` if applicable (e.g., `u-hidden`, `u-padding-md`)

### **3️⃣ ID & CSS Naming Examples**
| Element Type        | ID Naming Format               | CSS Class Naming Format           | Example                     |
|---------------------|--------------------------------|------------------------------------|-----------------------------|
| Main Containers    | `featureContainer`              | `.feature-container`               | `chatContainer`             |
| Buttons           | `featureButtonAction`           | `.feature__button--action`         | `chatSendButton`            |
| Inputs            | `featureInputType`              | `.feature__input--text`            | `userEmailInput`            |
| Modals            | `featureModalName`              | `.feature__modal`                  | `settingsModal`             |
| Lists & Items     | `featureList` / `featureItemX`  | `.feature__list`, `.feature__item` | `chatMessageList`, `chatMessageItem3` |

### **4️⃣ Example in Vue & TailwindCSS**
```vue
<template>
  <div id="chatContainer" class="feature-container p-4">
    <input id="userMessageInput" type="text" class="feature__input--text border p-2" />
    <button id="chatSendButton" class="feature__button--action btn-primary">Send</button>
    <ul id="chatMessageList" class="feature__list">
      <li id="chatMessageItem1" class="feature__item">Hello!</li>
    </ul>
  </div>
</template>
```

---

## **📌 Structuring TypeScript Files**
To keep TypeScript files organized and readable:
- Group related files by feature inside `/composables/`, `/api/`, or `/types/`.
- Use **descriptive filenames** (`auth.api.ts`, `chat.helpers.ts`).
- Keep **utility functions in `utils` subfolders** if applicable.

### **Example TypeScript Structure**
```
/types/
    user.types.ts
    auth.types.ts
    post.types.ts
/composables/
    useAuth.ts
    useChat.ts
/api/
    auth.api.ts
    users.api.ts
    posts.api.ts
```

---

## **📌 Structuring Pinia Stores**
Pinia stores should:
- **Reside in `/stores/`** with one store per feature or global state.
- **Follow naming conventions** (`use[Feature]Store.ts`).
- **Group related logic inside `state`, `getters`, and `actions`**.

### **Example Pinia Store (`useAuth.ts`)**
```ts
import { defineStore } from 'pinia';
import type { User } from '@/types/user.types';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null as User | null,
    token: ''
  }),
  actions: {
    login(userData: User, token: string) {
      this.user = userData;
      this.token = token;
    },
    logout() {
      this.user = null;
      this.token = '';
    }
  }
});
```

---

## **📌 Structuring Vue Files**
Vue files should be structured for readability and maintainability.

### **Recommended Vue File Structure**
```vue
<script setup lang="ts">
import { ref } from 'vue';

const message = ref('Hello, Vue!');
</script>

<template>
  <div class="feature-container">
    <h1 class="feature__title">{{ message }}</h1>
  </div>
</template>

<style scoped>
.feature-container {
  padding: 16px;
}

.feature__title {
  font-size: 1.5rem;
}
</style>
```

### **Best Practices**
- **Script First:** Define logic before template.
- **Scoped Styles:** Use `scoped` styles to avoid conflicts.
- **Minimal Global Imports:** Use `@layer components` for global styles.

---

## **📦 Data Object & API Response Handling**
To maintain type safety and structure, create `types/` for defining interfaces.

### **1️⃣ Structuring API Responses**
| Data Type | Naming Format | Example |
|-----------|--------------|---------|
| User Data | `User` | `interface User { id: number; name: string; email: string; }` |
| API Response | `[Feature]Response` | `interface AuthResponse { token: string; user: User; }` |

### **2️⃣ Structuring Data Models**
Inside `/types/`, create:
```
/types/
    user.types.ts
    auth.types.ts
    post.types.ts
```

---

## **📌 API Handler Structure**
To centralize API requests, create a `/api/` folder.

### **API Folder Structure**
```
/api/
    auth.api.ts
    users.api.ts
    posts.api.ts
```

### **Example API Handler (`auth.api.ts`)**
```ts
import axios from 'axios';
import type { AuthResponse } from '@/types/auth';

const API_BASE_URL = 'https://api.example.com';

export const login = async (email: string, password: string): Promise<AuthResponse> => {
  const response = await axios.post(`${API_BASE_URL}/login`, { email, password });
  return response.data;
};
```

---

## **📌 Pinia Store Structure**
Pinia stores handle state management. Keep stores organized by feature or page.

### **Store File Naming**
| Type | Naming Format | Example |
|------|--------------|---------|
| Global Store | `useGlobal.ts` | `useGlobal.ts` |
| Feature Store | `use[Feature].ts` | `useAuth.ts` |
| Page-Specific Store | `use[Page].ts` | `useDashboard.ts` |

---

## **📌 Routing Structure**
Routing is handled inside the `/router/` folder. The main router file is `index.ts`.

### **Router File Structure**
```
/router/
    index.ts
    routes/
        dashboard.ts
        auth.ts
        settings.ts
```

---

## **🎯 Final Takeaways**
1. **Use Tailwind for all styling** (except for rare cases requiring scoped styles).
2. **Use meaningful IDs and Vue file names for structure.**
3. **Leverage `@layer components` for reusable styles** like gradients & animations.
4. **Stick to a clear folder structure for scalability.**
5. **Use `composables/` for reusable logic to avoid clutter in components.**
6. **Use `/api/` for managing backend requests centrally.**
7. **Keep routes structured inside `/router/` and split them into separate files.**
8. **Use Pinia for state management, keeping global and feature-specific stores separate.**
9. **Define data models in `/types/` to maintain strong type safety.**
10. **Place WebGL files inside the feature folder that uses them, following the naming convention `[feature].webgl.ts`.**
11. **Use structured ID naming in HTML elements for better debugging and automation support.**

---

By following these conventions, your project will be **clean, efficient, and future-proof!** 🚀