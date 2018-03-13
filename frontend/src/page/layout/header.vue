
<template>
  <header class="header">
    <div class="container">
      <div class="header-logo">
        <img
          src="../../assets/images/pyhacker-logo.png"
          alt="pyhacker-logo"
          class="pyhacker-logo"
        >
      </div>
      
      <div class="header-navi">
        <el-row>
            <el-col :span="24">
              <el-menu default-active="activeIndex" class="el-menu-demo " mode="horizontal" @select="handleSelect" 
                    background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
                <el-menu-item index="1">Manage</el-menu-item>
                <el-menu-item index="2">Project</el-menu-item>
                <el-menu-item index="3">Playloads</el-menu-item>
                <el-menu-item index="4">Rules</el-menu-item>
                <el-menu-item index="5">Webssh</el-menu-item>
              </el-menu>
            </el-col>
        </el-row>
      </div>

      <div  class="header-search">
        <div>
          <el-input placeholder="Please Input Content" v-model="input5" class="input-with-select">
            <el-select v-model="select" slot="prepend" placeholder="Please Select">
              <el-option label="Project" value="1"></el-option>
              <el-option label="Playloads" value="2"></el-option>
              <el-option label="Rules" value="3"></el-option>
            </el-select>
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </div>
      </div>

      <div class="header-signin">
        <el-dropdown>
          <el-button type="primary">
            Ori71e2<i class="el-icon-arrow-down el-icon-right"></i>
          </el-button>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>Personal Information</el-dropdown-item>
            <el-dropdown-item>Github</el-dropdown-item>
            <el-dropdown-item>Navigation</el-dropdown-item>
            <el-dropdown-item>Blog</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </header>
</template>

<script>
  export default {
    data() {
      return {
        activeIndex: "1"
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style>

  .el-select .el-input {
    width: 130px;
  }
  .input-with-select .el-input-group__prepend {
    background-color: #fff;
  }
  .el-dropdown {
    vertical-align: top;
  }
  .el-dropdown + .el-dropdown {
    margin-left: 15px;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
</style>
