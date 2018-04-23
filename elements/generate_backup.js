var setting = {
    // 在以下双引号中粘贴QQ钱包收款链接
    qqUrl: "https://i.qianbao.qq.com/wallet/sqrcode.htm?m=tenpay&a=1&u=1031092401&ac=CD3C9AE493BC106176F6B8F25E4230723AEA141B073F9DD9BC3747C823819645&n=Just%20your%20big%20fool.&f=wallet",

    // 在以下双引号中粘贴微信收款链接
    wechatUrl: "wxp://f2f0GmS4TQWrW_pacEXYhOOHSwjXlqUjv--L",

    // 在以下双引号中粘贴支付宝收款链接
    aliUrl: "HTTPS://QR.ALIPAY.COM/FKX05106TWOWYTJ6VELP79",

    // 用于动态生成二维码的API，不需要修改。
    qrcodeApi: "https://chart.googleapis.com/chart?chs=300x300&cht=qr&chld=L|1&choe=UTF-8&chl="
}

if (navigator.userAgent.match(/Alipay/i)) {
    // 支付宝
    window.location.href = setting.aliUrl;
} else if (navigator.userAgent.match(/MicroMessenger\//i)) {
    // 微信
    document.getElementById("wechat-url").src = setting.qrcodeApi + urlEncode(setting.wechatUrl);
    document.getElementById("code-wechat").style.display = "block";
} else if (navigator.userAgent.match(/QQ\//i)) {
    // QQ
    document.getElementById("qq-url").src = setting.qrcodeApi + urlEncode(setting.qqUrl);
    document.getElementById("code-qq").style.display = "block";
} else {
    // 其它，显示“万能码”
    document.getElementById("page-url").src = setting.qrcodeApi + urlEncode(window.location.href);
    document.getElementById("code-all").style.display = "block";
}

/*****************************************
 * url编码函数
 * 输入参数：待编码的字符串
 * 输出参数：编码好的
 ****************************************/
function urlEncode(String) {
    return encodeURIComponent(String).replace(/'/g, "%27").replace(/"/g, "%22");
}