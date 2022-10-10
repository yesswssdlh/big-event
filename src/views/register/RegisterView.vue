<template>
  <div>
    <strong>后台管理系统</strong>
    <div style="width:200px;margin-top:20px">
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="5px"
        class="demo-ruleForm"
        :hide-required-asterisk="true"
      >
        <el-form-item  prop="name">
          <el-input v-model="ruleForm.name" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item  prop="name" >
          <el-input v-model="ruleForm.name" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item  prop="name" >
          <el-input v-model="ruleForm.name" placeholder="请再次确认密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')"
            >注册</el-button
          >
        </el-form-item>
      </el-form>
      <div>
        <router-link to="/login">去登录</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      ruleForm: {
        name: ''

      },
      rules: {
        name: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }

  }
}
</script>

<style lang="less" scoped></style>
