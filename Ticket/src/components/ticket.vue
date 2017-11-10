<template lang="html">
  <div class="box">
    <a class="delete is-medium" @click="deleteItem" :id="id"></a>
    <div class="notification is-info" v-show="!show">
        <h1>{{name}}</h1>
        <p>{{date}}点</p>
    </div>
    <div class="iframe" v-show="show">
      <iframe :src="src"></iframe>
    </div>
    <div class="draw_button">
      <a class="button is-success" @click="draw">开始抢券</a>
      <a class="button is-primary" @click="stop">结束抢券</a>
    </div>
    <div class="control">
      <div class="select is-info selected">
          <select v-model="faultDate">
            <option :value="time.value" v-for="time in times">{{ time.value }}</option>
          </select>
      </div>
        <a class="button is-info" @click="timeDraw">定时开始</a>
    </div>
    <div class="control" v-show='chzhiIsShow'>
      还有{{ chazhiShow }}
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      show: false,
      flag: true,
      src: '',
      faultDate: '',
      chazhi: '',
      chazhiShow: '',
      chzhiIsShow: false,
      times: [
        {
          value: '8'
        },
        {
          value: '10'
        },
        {
          value: '12'
        },
        {
          value: '14'
        },
        {
          value: '16'
        },
        {
          value: '18'
        },
        {
          value: '20'
        },
        {
          value: '22'
        },
        {
          value: '24'
        }
      ]
    }
  },
  props: {
    name: {
      type: String
    },
    api: {
      type: String
    },
    date: {
      type: String
    },
    time: {
      type: Number
    },
    id: {
      type: Number
    }
  },
  created () {
    this.faultDate = this.date.split(',')[0]
  },
  methods: {
    /**
     * check value type
     * @param  {String}  type
     * @param  {*}  val
     * @return {Boolean}
     */
    is (type, val) {
      return Object.prototype.toString.call(val) === ('[object ' + type + ']')
    },
    /**
     * 存入local数据
     * @param {String} key 键名
     * @param {*} value 要存入的数据
     * @param {Number} exp 过期时间，单位：秒
     */
    setLocalStorage (key, value, exp) {
      try {
        if (exp && typeof exp === 'number') {
          let expDate = new Date()
          expDate.setSeconds(exp)
          localStorage[key] = JSON.stringify({
            data: value,
            time: expDate.getTime()
          })
        } else {
          localStorage[key] = value instanceof Object ? JSON.stringify(value) : value
        }
        return true
      } catch (e) {
        alert('您的web浏览器不支持本地存储设置。在Safari中，最常见的原因是使用“私人浏览模式”或“无痕浏览”。有些设置可能无法保存或某些功能可能无法正常工作。')
        return false
      }
    },
    /**
     * 获取local数据
     * @param {String} key 键名
     * @param {Number} exp 过期时间（是否超过此时间）
     * @param {Boolean} force 是否强制删除已过期数据，true：已过期数据返回空
     * @return {*} 存在 exp : {data: value, time: 过期时间, expire: 是否过期} , 不存在 exp ： 原路返回
     */
    getLocalStorage (key, exp, force) {
      try {
        let local = JSON.parse(localStorage[key])
        if (exp && typeof exp === 'number' && local && this.is('Object', local) && local.time) {
          local.expire = new Date().getTime() - local.time > exp * 1000
          if (force && local.expire) {
            return null
          }
        }
        return local
      } catch (e) {
        console.warn('LocalStorage.Parse:', '[key:', key, ']', e.message)
        return localStorage[key]
      }
    },
    timer () {
      let a = setInterval(() => {
        if (this.src) {
          this.src = ''
        } else {
          this.src = this.api
        }
        if (this.flag === false) {
          clearInterval(a)
        }
      }, this.time / 2)
      setTimeout(() => {
        clearInterval(a)
        this.show = !this.show
      }, 20000)
    },
    draw () {
      this.show = !this.show
      this.timer()
    },
    stop () {
      this.flag = false
      this.show = !this.show
    },
    timeDraw () {
      this.chzhiIsShow = true
      const nowTime = new Date()
      const timestamp = nowTime.getTime()
      let dingshiTime = Date.parse(nowTime.toLocaleDateString().replace(/\//g, '-') + ' ' + this.faultDate + ':00:00')
      this.chazhi = Math.ceil((dingshiTime - timestamp) / 1000)
      setInterval(() => {
        this.chazhi -= 1
        this.chazhiShow = this.chazhi < 0 ? this.chazhi < -20 ? '您选择的时间已经过去' : '正在抢券' : this.chazhi < 60 ? this.chazhi + '秒' : this.chazhi < 3600 ? parseInt(this.chazhi / 60) + '分钟' + this.chazhi % 60 + '秒' : this.chazhi > 3600 * 24 ? '仅支持二十四小时内' : parseInt(this.chazhi / (60 * 60)) + '小时' + parseInt((this.chazhi % 3600) / 60) + '分钟' + ((this.chazhi % 3600) % 60) + '秒'
      }, 1000)
      console.log(this.chazhi)
      if (dingshiTime - timestamp === 10) {
        this.draw()
      }
    },
    deleteItem () {
      let apis = this.getLocalStorage('apis')
      apis.splice(this.id, 1)
      this.setLocalStorage('apis', apis)
      this.$emit('ievent')
    }
  }
}
</script>

<style lang="scss">
.box {
    position: relative;
    .delete {
      position: absolute;
      top: 0;
      right: 0;
      background-color: red;
    }
    width: 270px;
    margin-left: 10px;
    .notification {
        line-height: 2;
        min-height: 100px;
        text-align: center;
        h1 {
            font-size: 20px;
        }
    }
    .iframe {}
    .draw_button {
        display: flex;
        justify-content: space-around;
    }
    .control {
      display: flex;
      justify-content: space-around;
      padding-top: 10px;
      text-align: center;
    }
}
</style>
