<template>
  <div class="one">
    <div class="shenjianjiange">
      <div class="select is-info">
        <select v-model="time">
          <option v-for="time in times" :value="time.value">{{ time.text }}</option>
        </select>
      </div>
    </div>
    <div class="form">
        <div class="notification is-info">
          <input class="input is-info" type="text" placeholder="请再次输入券的名字" v-model="name">
          <p>时间仅支持数字,中间用英文逗号','隔开,零点写24点</p>
          <input class="input is-info" type="text" placeholder="请再次输入券的时间" v-model="date">
          <textarea class="textarea is-info" type="text" placeholder="请再次输入api接口" v-model="api"></textarea>
          <a class="button is-success add" @click="addData" :data-name="name" :data-api="api" :data-date="date">添加到页面</a>
        </div>
    </div>
    <div class="boxes">
      <template v-for="(api, index) in apis">
        <ticket :name="api.name" :api="api.api" :date="api.date" :time="time" :id="index"></ticket>
      </template>
    </div>
  </div>
</template>

<script>
import ticket from '@/components/ticket'
export default {
  name: 'one',
  data () {
    return {
      time: 300,
      name: '',
      date: '',
      api: '',
      times: [
        {
          text: '10ms(电脑卡的别用100以下)',
          value: 10
        },
        {
          text: '20ms(电脑卡的别用100以下)',
          value: 20
        },
        {
          text: '30ms(电脑卡的别用100以下)',
          value: 30
        },
        {
          text: '40ms(电脑卡的别用100以下)',
          value: 40
        },
        {
          text: '50ms(电脑卡的别用100以下)',
          value: 50
        },
        {
          text: '60ms(电脑卡的别用100以下)',
          value: 60
        },
        {
          text: '70ms(电脑卡的别用100以下)',
          value: 70
        },
        {
          text: '80ms(电脑卡的别用100以下)',
          value: 80
        },
        {
          text: '90ms(电脑卡的别用100以下)',
          value: 90
        },
        {
          text: '100ms',
          value: 100
        },
        {
          text: '200ms',
          value: 200
        },
        {
          text: '300ms',
          value: 300
        },
        {
          text: '400ms',
          value: 400
        },
        {
          text: '500ms',
          value: 500
        },
        {
          text: '600ms',
          value: 600
        }
      ],
      apis: [],
      array: [
        {
          name: '新服饰五折神券',
          api: 'https://api.m.jd.com/client.action?functionId=newBabelAwardCollection&body=%7B%22activityId%22%3A%222dWVnoE1Qh4UUJGvrchf2dB5NzVa%22%2C%22from%22%3A%22H5node%22%2C%22scene%22%3A%221%22%2C%22args%22%3A%22key%3D3ce22bbf278e4320bfa490f64513f82c%2CroleId%3D8824030%22%2C%22mitemAddrId%22%3A%22%22%2C%22geo%22%3A%7B%22lng%22%3A%22%22%2C%22lat%22%3A%22%22%7D%7D&client=wh5&clientVersion=1.0.0&sid=f77ff103b7ca65b4702fc4a8357ad99d&uuid=14987832905831375727030&area=&_=1510106676174&callback=jsonp2',
          date: '10,14'
        },
        {
          name: '母婴348-100,京享值5000',
          api: 'http://coupon.m.jd.com/center/receiveCoupon.json?couponId=FP_rabzvy&roleId=8978895&actId=f91d9f6b36a84e23b075254e7f6e9286',
          date: '10,14,20,24'
        },
        {
          name: '母婴自营全品类748-300',
          api: 'https://api.m.jd.com/client.action?functionId=newBabelAwardCollection&body=%7B%22activityId%22%3A%223XvLR3MnLXHjjJ4uCgYetfAcqpzT%22%2C%22from%22%3A%22H5node%22%2C%22scene%22%3A%221%22%2C%22args%22%3A%22key%3Df22825db960e40bf83a030da70096236%2CroleId%3D8978843%22%2C%22mitemAddrId%22%3A%22%22%2C%22geo%22%3A%7B%22lng%22%3A%22%22%2C%22lat%22%3A%22%22%7D%7D&client=wh5&clientVersion=1.0.0&sid=f77ff103b7ca65b4702fc4a8357ad99d&uuid=14987832905831375727030&area=&_=1510102677363&callback=jsonp2',
          date: '10'
        },
        {
          name: '京东牛奶满减券',
          api: 'http://api.m.jd.com/client.action?functionId=newBabelAwardCollection&body=%7B%22activityId%22%3A%22d4jNpRbDEY9rpEniFAEmj78Qdbk%22%2C%22from%22%3A%22H5node%22%2C%22scene%22%3A%221%22%2C%22args%22%3A%22key%3D97e20267d665495caad9c37c656887f1%2CroleId%3D8705018%22%2C%22mitemAddrId%22%3A%22%22%2C%22geo%22%3A%7B%22lng%22%3A%22%22%2C%22lat%22%3A%22%22%7D%7D&client=wh5&clientVersion=1.0.0&sid=7935131e5d49ca293545a79c70a2ac17&uuid=467679440&area=&_=1509551079787&callback=jsonp12',
          date: '10'
        },
        {
          name: '叮咚TOP智能音箱，限PLUS',
          api: 'http://coupon.m.jd.com/center/receiveCoupon.json?couponId=FP_qpzw52&roleId=8772885&actId=d93ee89bf4ff4db3bc4ed5e4f4d3b1d6',
          date: '10'
        },
        {
          name: '京东手机980-150',
          api: 'http://coupon.m.jd.com/center/receiveCoupon.json?couponId=FP_rcxzg9&roleId=8930108&actId=72b902f190444d76bc3574b28d43845a',
          date: ''
        },
        {
          name: '京东手机1980-300，限PLUS',
          api: 'http://coupon.m.jd.com/center/receiveCoupon.json?couponId=FP_rcxzg9&roleId=8930106&actId=82f2b2dce46c4275b3015d3bb27b1e58',
          date: '8,10,14,20,24'
        },
        {
          name: '京东手机2980-400',
          api: 'http://coupon.m.jd.com/center/receiveCoupon.json?couponId=FP_rzaahh&roleId=8930105&actId=3b659e6813354bc1b9f11183ca5a58d9',
          date: '8,10,14,20,24'
        },
        {
          name: '京东手机4980-700,京享值5000',
          api: 'http://coupon.m.jd.com/center/receiveCoupon.json?couponId=FP_zrcxcc&roleId=8929852&actId=a3061fbd1f374d72a9d1751d16d51036',
          date: '8,10,14,20,24'
        },
        {
          name: '非自营手机5200-1111',
          api: 'http://coupon.m.jd.com/center/receiveCoupon.json?couponId=FP_rcxzg9&roleId=8930106&actId=82f2b2dce46c4275b3015d3bb27b1e58',
          date: '20'
        },
        {
          name: '手机配件99-88',
          api: 'http://coupon.m.jd.com/center/receiveCoupon.json?couponId=FP_zq72ls&roleId=8705547&actId=bb66a606388d4c8c813234af55b5cc41',
          date: '10,20'
        },
        {
          name: '京东手机2980-400',
          api: 'http://coupon.m.jd.com/center/receiveCoupon.json?couponId=FP_rzaahh&roleId=8930105&actId=3b659e6813354bc1b9f11183ca5a58d9',
          date: '8,10,14,20,24'
        },
        {
          name: '京东手机4980-700',
          api: 'http://coupon.m.jd.com/center/receiveCoupon.json?couponId=FP_zrcxcc&roleId=8929852&actId=a3061fbd1f374d72a9d1751d16d51036',
          date: '8,10,14,20,24'
        },
        {
          name: '京东手机6000-1111',
          api: 'http://coupon.m.jd.com/center/receiveCoupon.json?couponId=FP_rd2z62&roleId=8929863&actId=f22161604981403cb477f148fe777404',
          date: '8,10,14,20,24'
        },
        {
          name: 'APPLE平板电脑1000-500',
          api: 'http://coupon.m.jd.com/center/receiveCoupon.json?couponId=FP_zq58m6&roleId=8757211&actId=3dacc2a899c4414f88fc48b5bdcaa168',
          date: ''
        },
        {
          name: '福临门、安达露西部分商品188-166',
          api: 'http://coupon.m.jd.com/center/receiveCoupon.json?couponId=FP_qrvtzs&roleId=8811098&actId=35047a6da12d4692a077995002075dcc',
          date: ''
        },
        {
          name: '油卡充值2000-521',
          api: 'http://coupon.m.jd.com/center/receiveCoupon.json?couponId=FP_qwz9g9&roleId=8653082&actId=45106c180c4b4f39af89a0d36ed1b811',
          date: '10'
        },
        {
          name: '油卡充值1111-25',
          api: 'http://coupon.m.jd.com/center/receiveCoupon.json?couponId=FP_q7z4j4&roleId=8732754&actId=770e3c24dfd24335bbad854d1e541874',
          date: '10'
        },
        {
          name: '油卡充值888-11',
          api: 'http://coupon.m.jd.com/center/receiveCoupon.json?couponId=FP_qkxxzl&roleId=8732758&actId=3e67c53faa8447a58f0ea85bb5300a29',
          date: '10'
        },
        {
          name: '3C自有品牌999-888',
          api: 'http://coupon.m.jd.com/center/receiveCoupon.json?couponId=FP_qzu3qe&roleId=8739331&actId=66ab3083d1bf485eb732d9d62953b8ef',
          date: '10'
        },
        {
          name: '女装商品499-100,1日至12日，限PLUS',
          api: 'http://coupon.m.jd.com/center/receiveCoupon.json?couponId=FP_qz74v3&roleId=8726204&actId=7ceeb981f81140278b7238bc5e1180a0',
          date: ''
        },
        {
          name: '智能微联100-50叮咚音箱、智能冰箱及部分微联品商品',
          api: 'http://coupon.m.jd.com/center/receiveCoupon.json?couponId=FP_zqxfmu&roleId=8762609&actId=489b9c4962ad4d8dbc750a6453d68c69',
          date: '22'
        },
        {
          name: '羊城通100-50',
          api: 'http://coupon.m.jd.com/center/receiveCoupon.json?couponId=FP_quz3th&roleId=8653070&actId=35b10eb7413a4cf6b558d0d1a4bd9874',
          date: '10'
        },
        {
          name: '手机话费90-2',
          api: 'http://coupon.m.jd.com/center/receiveCoupon.json?couponId=FP_qxwzen&roleId=8752719&actId=0e43a15ba1214599a24554b1a2d22a51',
          date: '10'
        },
        {
          name: '手机话费190-5',
          api: 'http://coupon.m.jd.com/center/receiveCoupon.json?couponId=FP_zq7e6e&roleId=8752712&actId=7eede902ec494444a75fdc7c22cb263b',
          date: '10'
        },
        {
          name: '手机话费199-100',
          api: 'http://coupon.m.jd.com/center/receiveCoupon.json?couponId=FP_qxwfzo&roleId=8752709&actId=686fd24a48d948988eeb4b4309a27ec7',
          date: '10'
        }
      ]
    }
  },
  created () {
    this.apis = this.getLocalStorage('apis') || []
    this.apis = this.apis.concat(this.array)
  },
  components: {
    ticket
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
    addData (e) {
      let name = e.target.dataset.name
      let date = e.target.dataset.date
      let api = e.target.dataset.api
      let item = {
        api: api,
        name: name,
        date: date
      }
      this.apis.unshift(item)
      console.log(this.apis)
      this.setLocalStorage('apis', this.apis)
      console.log(localStorage)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.one {
  .form {
    margin: 10px auto;
    width: 320px;
    .notification {
        line-height: 2;
        min-height: 100px;
        text-align: center;
    }
    .add {
      margin: 10px 0 0 0;
    }
  }
  .shenjianjiange {
    display:flex;
    justify-content: center;
  }
  .boxes {
    padding-top: 10px;
    display: flex;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
  }
}
</style>
