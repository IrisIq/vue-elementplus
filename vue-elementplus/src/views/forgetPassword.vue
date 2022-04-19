<template>
  <el-form label-width="120px"
           class="container">
    <el-form-item label="邮箱">
      <el-input v-model="email"
                placeholder="Enter Email"
                type="email" />
    </el-form-item>

    <el-form-item>
      <el-button @click="handleForgetPassword"
                 type="primary"
                 class="submit-btn">找回密码</el-button>
    </el-form-item>
  </el-form>

  <!-- 找回密码 -->

</template>

<script lang="ts">
import { defineComponent, getCurrentInstance, ref } from "vue";
import type { FormInstance } from "element-plus";
import { useRouter, useRoute } from "vue-router";

export default defineComponent({
  setup() {
    // @ts-ignore
    const { proxy } = getCurrentInstance();
    const password = ref("");
    const route = useRoute();
    const handleForgetPassword = async () => {
      if (password.value) {
        const res = await proxy.$axios.post(
          "api/v1/auth/forgetpassword" + route.params.id,
          {
            password: password.value,
          }
        );
        console.log(res.date);
      }
    };
    return { handleForgetPassword, password };
  },
});
</script>

<style scoped>
/* form */
.container {
  width: 50%;
  margin: 200px auto;
}
.submit-btn {
  width: 100%;
}

.tiparea p button {
  color: #409eff;
  background-color: #fff;
  border: inherit;
  cursor: pointer;
}
</style>
