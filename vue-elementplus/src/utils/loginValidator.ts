import {  ref, reactive } from "vue";

interface User{
  email: string;
  password: string;
}
export const loginUser = ref<User>({
  email: "",
  password: "",
});

 //校验规则
export const rules = reactive({
  email: [
    {
      type: "email",
      message: "Email is dead", //错误提示
      required: true, //是否必须项目
      trigger: "blur", //触发
    },
  ],
  password: [
    { required: true, message: "密码错误", trigger: "blur" },
    {
      min: 6,
      max: 30,
      message: "密码过短，请输入一个最短6位至30位密码",
      trigger: "blur",
    },
  ],
});