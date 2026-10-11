# Vue Github App

โปรเจกต์นี้เริ่มต้นจากเทมเพลตสำหรับพัฒนาแอปพลิเคชันด้วย **Vue 3** ร่วมกับ **Vite** พร้อมทั้งมีการใช้งาน **Docker** และ **Playwright** สำหรับทำ Automated Testing

## 🛠️ แนะนำการตั้งค่า IDE (เครื่องมือพัฒนา)

แนะนำให้ใช้ [VSCode](https://code.visualstudio.com/) พร้อมติดตั้งส่วนเสริมต่อไปนี้:
- [Vue - Official (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (หากเคยลง Vetur ไว้ ให้ปิดการใช้งานก่อน)
- [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin)

---

## 🚀 การติดตั้งและรันโปรเจกต์ (Local Development)

### 1. ติดตั้ง Dependencies
เปิด Command Line ในโฟลเดอร์โปรเจกต์และรัน:
```sh
npm install
```

### 2. รันโหมดนักพัฒนา (Development)
คำสั่งนี้จะเปิดเซิร์ฟเวอร์แบบ Hot-Reload หากมีการแก้โค้ด หน้าเว็บจะรีเฟรชเอง
```sh
npm run dev
```

### 3. คอมไพล์และบิลด์สำหรับนำไปใช้งาน (Production)
```sh
npm run build
```

---

## 🐳 การใช้งานด้วย Docker

โปรเจกต์นี้มีการตั้งค่า `Dockerfile` ไว้แล้ว สามารถบิลด์และรันผ่าน Docker ได้ตามขั้นตอนดังนี้:

### 1. Build Docker Image
สั่งบิลด์ Image โดยตั้งชื่อว่า `my-app:latest`:
```bash
docker build -t my-app:latest .
```

### 2. Run Docker Container
สั่งรันคอนเทนเนอร์แบบ Background (`-d`) และกำหนดชื่อเป็น `my-app` พร้อมตั้งค่า Port Mapping เป็น `9999` (เครื่องหลัก) ชี้ไปยัง `80` (ในคอนเทนเนอร์):
```bash
docker run -d --name my-app -p 9999:80 my-app:latest
```

### 3. เข้าใช้งานแอปพลิเคชัน
เมื่อรันสำเร็จแล้ว ให้เปิด Web Browser และเข้าไปที่ URL:
👉 **[http://localhost:9999](http://localhost:9999)**

---

## 🧪 การทดสอบระบบ (Automated Testing) ด้วย Playwright

เราใช้ **Playwright** ในการทำ End-to-End Testing คุณสามารถสร้างสคริปต์การทดสอบได้อัตโนมัติด้วยเครื่องมือ Codegen

### การบันทึกสคริปต์ทดสอบ (Record Test Script)
หากต้องการให้ระบบอัดหน้าจอและสร้างสคริปต์คลิกต่างๆ อัตโนมัติ ให้ใช้คำสั่ง:
```bash
npx playwright codegen http://localhost:9999/
```
*(ระบบจะเปิดหน้าต่าง Browser พร้อมกับ Inspector เมื่อคุณคลิกบนหน้าเว็บ โค้ดสำหรับทำ Test จะถูกสร้างขึ้นมาให้ทันที)*

### การรันสคริปต์ทดสอบ (Run Tests)
```sh
npm run test
```
หรือรันแบบเปิดหน้าจอให้ดูด้วย:
```sh
npm run test:headed
```

---

## 🚨 บันทึกข้อผิดพลาดที่เคยพบและวิธีแก้ไข (Troubleshooting)

**1. `docker build` ล้มเหลวเพราะคำสั่ง `npm install` พัง (Error: EJSONPARSE)**
- **สาเหตุ:** ไฟล์ `package.json` มีโครงสร้างปีกกาเกินมา และมีการประกาศ `"vue-github-app": "file:"` ซึ่งเรียกหาตัวเองจนเกิดการวนลูป
- **วิธีแก้:** ลบปีกกาที่เกินมาออก และลบ Dependency ที่อ้างอิงถึงตัวเองในโฟลเดอร์เดียวกันออกไป

**2. สั่ง `npm run build` ไม่ได้ (Missing script: "build")**
- **สาเหตุ:** ใน `package.json` ส่วนของ `"scripts"` ไม่มีคำสั่ง `"build"` สำหรับ Vite
- **วิธีแก้:** เพิ่ม `"dev": "vite"`, `"build": "vite build"`, และ `"preview": "vite preview"` ลงใน `package.json`

**3. รันคำสั่ง `npx codegen` แล้วขึ้น Error usage: codegen data_file ...**
- **สาเหตุ:** โปรแกรมไปเรียกใช้เครื่องมือสร้างโค้ดชื่อ `codegen` ของระบบทั่วไป แทนที่จะเป็นของ Playwright
- **วิธีแก้:** ต้องใส่คำว่า `playwright` เข้าไปด้วย เป็น `npx playwright codegen http://localhost:9999/`
"# playwright-vue-app2-command-script--npm-" 
"# npm-playwrigt" 
