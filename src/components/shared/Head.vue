<template>
<div class="header">
<div class="line"></div>
<el-menu
  :default-active="activeIndex2"
  class="el-menu-demo"
  mode="horizontal"
  @select="handleSelect"
  background-color="#545c64"
  text-color="#fff"
  active-text-color="#ffd04b">
  <el-menu-item index="2"><router-link to="/profile">Paradox</router-link></el-menu-item>
  <el-menu-item index="1" active ><router-link to="/">Home</router-link></el-menu-item>
  <el-menu-item index="3" ><router-link to="/gallery">Gallery</router-link></el-menu-item>
  <el-submenu index="4">
    <template slot="title">Home</template>
    <el-menu-item index="4-1">item one</el-menu-item>
    <el-menu-item index="4-2">item two</el-menu-item>
    <el-menu-item index="4-3">item three</el-menu-item>
    <el-submenu index="4-4">
      <template slot="title">item four</template>
      <el-menu-item index="4-4-1">item one</el-menu-item>
      <el-menu-item index="4-4-2">item two</el-menu-item>
      <el-menu-item index="4-4-3">item three</el-menu-item>
    </el-submenu>
  </el-submenu>
  <el-menu-item index="5" >Info</el-menu-item>
  <el-menu-item index="6"><a href="https://www.ele.me" target="_blank">Orders</a></el-menu-item>
  <el-menu-item style="float:right" index="5" ><el-button @click="dialogFormVisible = true" style="border-radius: 30px">Login</el-button></el-menu-item>
</el-menu>

<el-dialog width="60%" :visible.sync="dialogFormVisible">
  <span slot="header" class="dialog-header">
    <h2>Login</h2>
  </span>
  <el-form :model="form">
    <el-form-item label="User name"  >
      <el-input v-model="form.user_name" :class="{invalid:!$v.user_name.$error}" @input="$v.user_name.$touch()" autocomplete="on"></el-input>
      <div>{{$v.user_name.$error}}</div>
      <!-- <p style="color:red" v-if="!$v.user_name.required">Username required!</p> -->
      <!-- <p  style="color:red" v-if="!$v.user_name.minLength">Length Must be gretter then 3</p> -->
    </el-form-item>
    <el-form-item label="Password" >
      <el-input v-model="form.name" autocomplete="on"></el-input>
    </el-form-item>
    <el-form-item class = "kk">
      <a href="" style="float:right;">forgot password?</a>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" style="width:100%;"  width="100%" @click=" submit();dialogFormVisible = false;">Submit</el-button>
    </el-form-item>
    <el-form-item>
      <el-button style="width:100%;" @click="dialogFormVisible = false;outerVisible = true">Signup</el-button>
    </el-form-item>

    <!-- <el-form-item label="Zones" :label-width="formLabelWidth">
      <el-select v-model="form.region" placeholder="Please select a zone">
        <el-option label="Zone No.1" value="shanghai"></el-option>
        <el-option label="Zone No.2" value="beijing"></el-option>
      </el-select>
    </el-form-item> -->
  </el-form>
</el-dialog>

  <el-dialog width="60%" title="Outer Dialog" :class = "{error:cls}" :visible.sync="outerVisible">
    <el-form :model="userinfo">
      <el-form-item label="Name" >
      <el-input v-model="userinfo.name" :class = "{error:cls}" autocomplete="on"></el-input>
    </el-form-item>
    <el-form-item label="User name" >
      <el-input v-model="userinfo.username" :class = "{error:cls}" autocomplete="on"></el-input>
    </el-form-item>
    <el-form-item label="Email" >
      <el-input v-model="userinfo.email" :class = "{error:cls}" autocomplete="on"></el-input>
    </el-form-item>
    <el-form-item label="Date of Birth" >
      <el-date-picker v-model="userinfo.dob" :class = "{error:cls}" type="date" placeholder="Pick a date" default-value="2010-10-01">
    </el-date-picker>
    </el-form-item>
    <el-form-item label="Country" >
      <el-input v-model="userinfo.country" :class = "{error:cls}" autocomplete="on"></el-input>
    </el-form-item>
    <el-form-item label="Mobile Number" >
      <el-input v-model="userinfo.mobileNumber" :class = "{error:cls}" autocomplete="on"></el-input>
    </el-form-item>
    <el-form-item label="Password" >
      <el-input  :class = "{error:cls}" autocomplete="on"></el-input>
    </el-form-item>
    <el-form-item label="Confirm Password" >
      <el-input v-model="userinfo.password" :class = "{error:cls}" autocomplete="on"></el-input>
    </el-form-item>

    </el-form>
    <el-dialog
        width="60%"
        title="Are you confirm to Submit"
        :visible.sync="innerVisible"
        append-to-body>
        <el-button @click= "signup();" style="float:left;margin-buttom:10px;" type="primary">Confirm</el-button>
    </el-dialog>
    <div slot="footer" class="dialog-footer">
      <el-button @click="outerVisible = false">Cancel</el-button>
      <el-button type="primary" @click="innerVisible = true;" >Submit</el-button>
    </div>
  </el-dialog>

</div>
</template>

<script>
import { required, minLength, between,email} from 'vuelidate/lib/validators'
import {mapGetters} from "vuex"
import axios from "axios"
  export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1',
        dialogFormVisible:false,
        outerVisible:false,
        innerVisible:false,
        user_name:'',
        cls:false,
        form: {
          name: '',
          user_name:'',
          password:''
        },
        userinfo:{
          name:'',
          username:'',
          email:'',
          dob:'',
          password:'',
          country:'',
          mobileNumber:''
        }
      };
    },
    computed:{

    },
    methods: {

      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      signup(){

      // if(this.name!='' && this.username!='' && this.email!='' && this.dob!='' && this.password!='' && this.country!='' && this.mobileNumber)
      //   {
          axios.post("https://vue-http-3aefd.firebaseio.com/user.json",this.userinfo).then(res=>console.log(res)).catch(error=>console.log(error));
          this.innerVisible = false;
          this.name = '';
          this.email='';
          this.dob='';
          this.password='';
          this.country='';
          this.mobileNumber='';
          this.outerVisible = false;
      //   }
      // else{
      //   this.cls = true;
      //   this.innerVisible = false;
      // }
      },
    //   submit() {
    //   this.$v.form.$touch();
    //   // if its still pending or an error is returned do not submit
    //   if (this.$v.form.$pending || this.$v.form.$error) return;
    //   // to form submit after this
    //   alert("Form submitted");
    // }
    },
    validations: {
    user_name: {
      required:required,
      minLength:minLength(3)
      }
    }
  }
</script>
<style  scoped>
  a:hover{
    cursor: pointer;
    color:rgba(255,255,255,.8);
  }
  a{
    color:white;
    margin-bottom: 5px;
  }
  .kk{
    margin-top:0px;
    height:10px;
  }
  .error{
    border: 1px ridge #BA0000;
    border-radius: 5px;
  }
  .invalid{
    border:1px solid #ff000040;
    background-color:rgba(92, 0, 0,8);
  }
  a{
    text-decoration: none;
    font-size:18px;
    height: 100%;
    width: 100%;
  }
  a:hover{
    text-decoration: underline;
  }
</style>
