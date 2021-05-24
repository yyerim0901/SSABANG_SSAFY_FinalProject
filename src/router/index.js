import Vue from "vue";
import VueRouter from "vue-router";
// import store from "@/store/index.js";
import Home from "@/views/Home.vue";
import Login from "@/views/Login.vue";
import Mypage from "@/views/Mypage.vue";
import RegisterMember from "@/views/RegisterMember.vue";
import UpdateMember from "@/views/UpdateMember.vue";
import Board from "@/views/Board.vue";
import BoardWrite from "@/views/BoardWrite.vue";
import BoardDetail from "@/views/BoardDetail.vue";
import BoardUpdate from "@/views/BoardUpdate.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/mypage",
    name: "Mypage",
    component: Mypage,
  },
  {
    path: "/registermember",
    name: "RegisterMember",
    component: RegisterMember,
  },
  {
    path: "/updatemember",
    name: "UpdateMember",
    component: UpdateMember,
  },
  {
    path: "/board",
    name: "Board",
    component: Board,
  },
  {
    path: "/boardwrite",
    name: "BoardWrite",
    component: BoardWrite,
  },
  {
    path: "/boarddetail",
    name: "BoardDetail",
    component: BoardDetail,
  },
  {
    path: "/boardupdate",
    name: "BoardUpdate",
    component: BoardUpdate,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
