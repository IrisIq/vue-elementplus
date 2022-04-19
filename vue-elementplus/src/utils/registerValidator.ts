import { ref, reactive } from "vue";

interface RegisterUser{
    name: string;
    email: string;
    password: string;
    password2: string;
    role: string;

}

export const registerUser = ref<RegisterUser>({
  name: "",
  email: "",
  password: "",
  password2: "",
  role: "",
});

const validatePass2 = (rule: any, value: any, callback: any) => {
  if (value === "") {
    callback(new Error("请再次输入密码"));
  } else if (value !== registerUser.value.password) {
    callback(new Error("两次密码不一致!"));
  } else {
    callback();
  }
};

export const registerRules = reactive({
  name: [
    {
      message: "请输入用户名", //错误提示
      required: true, //是否必须项目
      trigger: "blur", //触发
    },
    {
      min: 2,
      max: 30,
      message: "请输入长度2-30个字符的名称",
      trigger: "blur",
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
  password2: [
    { required: true, message: "请重复输入密码", trigger: "blur" },
    {
      min: 6,
      max: 30,
      message: "密码过短，请输入一个最短6位至30位密码",
      trigger: "blur",
    },
    { validator: validatePass2, trigger: "blur" },
  ],
  email: [
    {
      type: "email",
      message: "Email is dead", //错误提示
      required: true, //是否必须项目
      trigger: "blur", //触发
    },
  ],
});