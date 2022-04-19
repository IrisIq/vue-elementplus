<template>
  <el-form ref="ruleFormRef"
           :model="loginUser"
           :rules="rules"
           label-width="120px"
           class="loginForm sign-in-form">
    <el-form-item label="邮箱"
                  prop="email">
      <span>{{ loginUser.email }} </span>
      <el-input v-model="loginUser.email"
                placeholder="Enter Email" />
    </el-form-item>
    <el-form-item label="密码"
                  prop="password">
      <span>{{ loginUser.password }} </span>
      <el-input v-model="loginUser.password"
                placeholder="请输入密码"
                type="password" />
    </el-form-item>

    <el-form-item>
      <el-button @click="handlelogin(ruleFormRef)"
                 type="primary"
                 class="submit-btn">Submit</el-button>
    </el-form-item>
  </el-form>

  <!-- 找回密码 -->
  <div class="tiparea">
    <p>
      忘记密码
      <a @click.prevent="handleForget">立即找回</a>
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance, ref } from "vue";
import type { FormInstance } from "element-plus";
import { useRouter } from "vue-router";

export default defineComponent({
  props: {
    loginUser: {
      type: Object,
      required: true,
    },
    rules: {
      type: Object,
      required: true,
    },
  },
  setup(props, contex) {
    const ruleFormRef = ref<FormInstance>();
    // @ts-ignore
    const { proxy } = getCurrentInstance();
    const router = useRouter();

    //触发登陆方法
    const handlelogin = (formEl: FormInstance | undefined) => {
      if (!formEl) return;
      formEl.validate((valid: boolean) => {
        if (valid) {
          proxy.$axios
            .post("api/v1/auth/register", props.loginUser)
            .then((res: any) => {
              //注册成功
              console.log(res.data);

              const { token } = res.data;
              localStorage.setItem("msToken", token);

              router.push("/");
            });
        } else {
          console.log("失败了!");
          return false;
        }
      });
    };

    const handleForget = () => {
      router.push("/forgetpwd");
    };
    return { handlelogin, ruleFormRef, handleForget };
  },
});
</script>

<style scoped>
/* form */
.loginForm {
  margin-top: 20px;
  background-color: #fff;
  padding: 20px 40px 20px 20px;
  border-radius: 5px;
  box-shadow: 0px 5px 10px #cccc;
}
.submit-btn {
  width: 100%;
}
.tiparea {
  text-align: right;
  font-size: 12px;
  color: #333;
}
.tiparea p button {
  color: #409eff;
  background-color: #fff;
  border: inherit;
  cursor: pointer;
}
</style>
