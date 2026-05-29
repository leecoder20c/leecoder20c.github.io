import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQlKPsTMDtmFLEW9CxO_UrFj4j0TUzids",
  authDomain: "timetravler-14dcd.firebaseapp.com",
  databaseURL: "https://timetravler-14dcd-default-rtdb.firebaseio.com",
  projectId: "timetravler-14dcd",
  storageBucket: "timetravler-14dcd.firebasestorage.app",
  messagingSenderId: "631184199826",
  appId: "1:631184199826:web:f15b77abe634e920afd64b",
  measurementId: "G-F7QCB00CW7"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app); // 여기서 db 객체 생성

console.log("Firestore db 객체:", db);

import { collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

async function testWrite() {
  try {
    const docRef = await addDoc(collection(db, "test_collection"), {
      message: "Hello Firebase!",
      createdAt: new Date()
    });
    console.log("문서가 성공적으로 저장되었습니다. ID: ", docRef.id);
  } catch (e) {
    console.error("데이터 저장 중 오류 발생: ", e);
  }
}

window.testWrite = testWrite;

async function renderItems() {
  const container = document.getElementById("item-container");
  const querySnapshot = await getDocs(collection(db, "test_collection"));
  
  // 기존 내용을 비우고 새로 그림
  container.innerHTML = "";
  
  querySnapshot.forEach((doc) => {
    const data = doc.data();
    
    // 데이터를 기반으로 HTML 조각 만들기
    const itemElement = document.createElement("div");
    itemElement.className = "col-md-6";
    itemElement.innerHTML = `
      <div class="card p-3">
        <h3>${data.message || "제목 없음"}</h3>
        <p>${new Date(data.createdAt.seconds * 1000).toLocaleDateString()}</p>
      </div>
    `;
    
    container.appendChild(itemElement);
  });
}

// 화면이 다 로드되면 자동으로 호출
renderItems();