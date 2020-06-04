import './app2.css'
import $ from 'jquery'
// 先对应
const $tabBar = $('#app2 .tab-bar')
const $tabContent = $('#app2 .tab-content')

$tabBar.on('click', 'li', (e) => {
    //封装用户点击的li
    const $li = $(e.currentTarget)
    $li.addClass('selected')
        .siblings().removeClass('selected')
    const index = $li.index()
    console.log(index)
    $tabContent.children()
        // .eq(index).css({ display: 'block' })//点击的显示，效果可以出来，但是不要用
        // .siblings().css({ display: 'none' })//其他的隐藏，效果可以出来，但是不要用
        // .eq(index).show()//点击的显示，效果可以出来，但是不要用
        // .siblings().hide()//其他的隐藏，效果可以出来，但是不要用
        //永远不要用跟CSS操作相关的API（show/hide/css 禁止使用）
        //要灵活使用，不要写死，css写css，js只写js，可独立操作，js永远不要写css
        //样式与行为分离
        //JS 只负责功能
        //CSS 只负责样式
        .eq(index).addClass('active')//active 活跃的
        .siblings().removeClass('active')
})

//打开后默认在1
$tabBar.children().eq(0).trigger('click')