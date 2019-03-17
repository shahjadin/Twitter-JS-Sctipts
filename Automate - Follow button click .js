__cnt__ = 0;
__leng__=100;


for (i = 0; i < 10; i++) {
 jQuery('.Grid-cell .not-following .follow-text').each(function(i, ele) {
    ele = jQuery(ele);
    if (ele.css('display') != 'block') {
        console.log('already following:', i);
        return;
    }
    setTimeout(function() {
        ele.click();
      __leng__=__leng__+100;
       window.scrollTo(300, __leng__);
    }, __cnt__++ * 500);
});
}
