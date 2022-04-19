<template>
  <el-form ref="ruleFormRef"
           :model="ruleForm"
           :rules="rules">
    <el-form-item label="Password"
                  prop="pass">
      <el-input v-model="ruleForm.pass"
                type="password"
                autocomplete="off" />
    </el-form-item>

    <el-form-item>
      <el-button type="primary"
                 @click="submitForm(ruleFormRef)">Submit</el-button>

    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";
import type { FormInstance } from "element-plus";

const ruleFormRef = ref<FormInstance>();

const validatePass = (rule: any, value: any, callback: any) => {
  if (value === "") {
    callback(new Error("Please input the password"));
  } else {
    if (ruleForm.checkPass !== "") {
      if (!ruleFormRef.value) return;
      ruleFormRef.value.validateField("checkPass", () => null);
    }
    callback();
  }
};

const ruleForm = reactive({
  pass: "",
  checkPass: "",
  age: "",
});

const rules = reactive({
  // pass: [{ validator: validatePass, trigger: "blur" }],
  pass: [{ trigger: "blur" }],
});

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  console.log(formEl);
  formEl.validate((valid) => {
    if (valid) {
      console.log("11111");
    } else {
      console.log("error submit!");
      return false;
    }
  });
};
</script>

