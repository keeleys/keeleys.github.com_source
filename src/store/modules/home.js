import github from "@/image/github.svg";
import weixin from "@/image/weixin.svg";
import weibo from "@/image/weibo.svg";
import facebook from "@/image/facebook.svg";
const state = {
    links: [ 
        { id: 'github', src: github},
        { id: 'weixin', src: weixin},
        { id: 'weibo', src: weibo},
        { id: 'facebook', src: facebook},
    ]
}
export default {
    namespaced: true,
    state
}