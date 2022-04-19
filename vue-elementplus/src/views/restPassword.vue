<template>
  <el-form label-width="120px"
           class="container">
    <el-form-item label="密码">
      <el-input v-model="password"
                placeholder="请输入密码"
                type="password" />
    </el-form-item>

    <el-form-item>
      <el-button @click="handleRestPassword"
                 type="primary"
                 class="submit-btn">重置密码</el-button>
    </el-form-item>
  </el-form>

  <!-- 找回密码 -->

</template>

<script lang="ts">
import { defineComponent, getCurrentInstance, ref } from "vue";
import type { FormInstance } from "element-plus";
import { useRouter } from "vue-router";

export default defineComponent({
  setup() {
    // @ts-ignore
    const { proxy } = getCurrentInstance();
    const password = ref("");
    const handleRestPassword = async () => {
      if (password.value) {
        const res = await proxy.$axios.put("api/v1/auth/forgetpassword", {
          password: password.value,
        });
        console.log(res.date);
      }
    };
    return { handleRestPassword, password };
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
