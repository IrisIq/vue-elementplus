 <template>
  <el-form ref="registerFormRef"
           :model="registerUser"
           :rules="registerRules"
           label-width="120px"
           class="registerForm sign-up-form">

    <el-form-item label="用户名"
                  prop="name">
      <el-input v-model="registerUser.name"
                placeholder="请输入用户名" />
    </el-form-item>

    <el-form-item label="邮箱"
                  prop="email">
      <el-input v-model="registerUser.email"
                placeholder="Enter Email" />
    </el-form-item>

    <el-form-item label="密码"
                  prop="password">
      <el-input v-model="registerUser.password"
                placeholder="请输入密码"
                type="password" />
    </el-form-item>

    <el-form-item label="确认密码"
                  prop="password2">
      <el-input v-model="registerUser.password2"
                placeholder="请重复输入密码"
                type="password " />
    </el-form-item>

    <el-form-item label="选择身份">
      <el-select v-model="registerUser.role"
                 placeholder="请选择身份">
        <el-option label="管理员"
                   value="admin"></el-option>
        <el-option label="用户"
                   value="user">user</el-option>
        <el-option label="游客"
                   value="visitor">visitor</el-option>

      </el-select>
    </el-form-item>

    <el-form-item>
      <el-button @click="handleRegister(registerFormRef )"
                 type="primary"
                 class="submit-btn">注册</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts">
import { defineComponent, ref, getCurrentInstance } from "vue";
import type { FormInstance } from "element-plus";
import { useRouter } from "vue-router";

export default defineComponent({
  props: {
    registerUser: {
      type: Object,
      required: true,
    },
    registerRules: {
      type: Object,
      required: true,
    },
  },
  setup(props, ctx) {
    // @ts-ignore
    const { proxy } = getCurrentInstance();
    const registerFormRef = ref<FormInstance>();
    const router = useRouter();

    const handleRegister = (formEl: FormInstance | undefined) => {
      if (!formEl) return;
      formEl.validate((valid: boolean) => {
        if (valid) {
          // @ts-ignore
          proxy.$axios
            .post("api/v1/auth/register", props.registerUser)
            .then((res: any) => {
              //注册成功
              proxy.$message({
                message: "注册成功",
                type: "success",
              });
              //路由跳转
              router.push("/");
            });
        } else {
          console.log("失败了!");
          return false;
        }
      });
    };
    return { registerFormRef, handleRegister };
  },
});
</script>
